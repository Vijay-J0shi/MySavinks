import { describe, it, expect, vi, beforeEach } from 'vitest';
import { addBookmark } from '../controllers/bookmark.controller.js';
import Bookmark from '../models/bookmark.model.js';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import validator from 'validator';

vi.mock('../models/bookmark.model.js');
vi.mock('node-fetch', () => ({
  default: vi.fn(),
}));
vi.mock('cheerio');
vi.spyOn(validator, 'isURL').mockImplementation(() => true);

describe('addBookmark Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { body: { url: 'example.com' }, userId: '123' };
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    };
    fetch.mockReset();
    Bookmark.create.mockReset();
  });

  it('✅ should add a bookmark successfully', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      text: async () => `<html><head><title>Example</title><link rel="icon" href="/favicon.ico"/></head></html>`,
    });
    fetch.mockResolvedValueOnce({
      ok: true,
      text: async () => 'Page summary content',
    });

    cheerio.load.mockReturnValue(() => ({
      text: () => 'Example',
      attr: () => '/favicon.ico',
      find: () => ({
        text: () => 'Example',
        attr: () => '/favicon.ico',
      }),
    }));

    Bookmark.create.mockResolvedValue({
      _id: '456',
      user: '123',
      url: 'example.com',
      title: 'Example',
      favicon: 'https://example.com/favicon.ico',
      summary: 'Page summary content',
    });

    await addBookmark(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      title: 'Example',
      summary: 'Page summary content',
    }));
  });

  it('⚠️ should handle Jina summary API failure gracefully', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      text: async () => `<html><head><title>Example</title><link rel="icon" href="/favicon.ico"/></head></html>`,
    });
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 429,
      statusText: 'Too Many Requests',
    });

    cheerio.load.mockReturnValue(() => ({
      text: () => 'Example',
      attr: () => '/favicon.ico',
      find: () => ({
        text: () => 'Example',
        attr: () => '/favicon.ico',
      }),
    }));

    Bookmark.create.mockResolvedValue({
      _id: '456',
      user: '123',
      url: 'example.com',
      title: 'Example',
      favicon: 'https://example.com/favicon.ico',
      summary: '',
    });

    await addBookmark(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      title: 'Example',
      summary: '',
    }));
  });

  it('❌ should return 400 if page fetch fails', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    await addBookmark(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Failed to fetch webpage content' });
  });

  it('❌ should return 500 if fetch throws error', async () => {
    fetch.mockRejectedValueOnce(new Error('Network crash'));

    await addBookmark(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Something went wrong while adding bookmark' });
  });
});
