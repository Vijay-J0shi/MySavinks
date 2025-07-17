import Bookmark from '../models/bookmark.model.js';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import validator from 'validator';

export const addBookmark = async (req, res) => {
  try {
    const { url } = req.body;
    const userId = req.userId;

    if (!url || !validator.isURL(url)) {
      return res.status(400).json({ message: 'Invalid URL' });
    }

    const fullUrl = url.startsWith('http') ? url : `https://${url}`;

    const pageResponse = await fetch(fullUrl);
    if (!pageResponse.ok) {
      return res.status(400).json({ message: 'Failed to fetch webpage content' });
    }

    const html = await pageResponse.text();
    const $ = cheerio.load(html);



    const title = $('title').text() || 'Untitled';
    const faviconPath = $('link[rel="icon"]').attr('href') || '/favicon.ico';
    const favicon = faviconPath.startsWith('http') ? faviconPath : `${new URL(fullUrl).origin}${faviconPath}`;




    let summary = '';
    try {
      const summaryRes = await fetch(`https://r.jina.ai/${fullUrl}`);
      if (summaryRes.ok) {
        summary = await summaryRes.text();
      } else {
        console.warn(`Jina summary fetch failed: ${summaryRes.status}`);
      }
    } catch (err) {
      console.warn('Summary fetch error:', err.message);
    }


    
    const bookmark = await Bookmark.create({
      user: userId,
      url,
      title,
      favicon,
      summary,
    });

    return res.status(201).json(bookmark);
  } catch (err) {
    console.error('Add bookmark error:', err);
    return res.status(500).json({ message: 'Something went wrong while adding bookmark' });
  }
};




export const getBookmarks = async (req, res) => {
  const bookmarks = await Bookmark.find({ user: req.userId }).sort({ createdAt: -1 })
  res.json(bookmarks)
}






export const deleteBookmark = async (req, res) => {
  const { id } = req.params
  await Bookmark.deleteOne({ _id: id, user: req.userId })
  res.json({ message: "Bookmark deleted" })
}
