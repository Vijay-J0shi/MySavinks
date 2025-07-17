import express from 'express'
import isAuth from '../middleware/isAuth.js'
import { addBookmark, getBookmarks, deleteBookmark } from '../controllers/bookmark.controller.js'

const router = express.Router()
router.use(isAuth)

router.post('/', addBookmark)
router.get('/', getBookmarks)
router.delete('/:id', deleteBookmark)

export default router
