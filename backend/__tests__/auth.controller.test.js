// __tests__/auth.controller.test.js
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { signUp } from '../controllers/auth.controller.js';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import genToken from '../config/token.js';

// Mocks
vi.mock('../models/user.model.js');
vi.mock('bcryptjs');
vi.mock('../config/token.js');

describe('signUp', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        name: 'Mr Josh',
        email: 'vj@gmail.com',
        password: 'vj123',
      },
    };
    res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
      cookie: vi.fn(),
    };
  });

  it('should create a new user', async () => {
    User.findOne.mockResolvedValue(null);
    bcrypt.hash.mockResolvedValue('hashedPassword');
    User.create.mockResolvedValue({
      _id: '123',
      name: 'Mr Josh',
      email: 'vj@gmail.com',
    });
    genToken.mockResolvedValue('jwt_token');

    await signUp(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      _id: '123',
      name: 'Mr Josh',
      email: 'vj@gmail.com',
    });
  });

  it('should return 400 if user already exists', async () => {
    User.findOne.mockResolvedValue({ email: 'vj@gmail.com' });

    await signUp(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'User already exist' });
  });
});
