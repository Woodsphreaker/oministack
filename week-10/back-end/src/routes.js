import { Router } from 'express'

// controllers
import userController from './app/controllers/userController'
import searchController from './app/controllers/searchController'

const router = Router()

// devs
router.get('/user', userController.index)
router.get('/user/:login', userController.show)
router.post('/user', userController.store)
router.put('/user/:login', userController.update)
router.delete('/user/:login', userController.destroy)

// search
router.get('/search', searchController.index)

export default router
