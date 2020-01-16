import { Router } from 'express'

// controllers
import userController from './app/controllers/userController'

const router = Router()

router.get('/user', userController.index)
router.get('/user/:login', userController.show)
router.post('/user', userController.store)
router.put('/user/:login', userController.update)
router.delete('/user/:login', userController.destroy)

export default router
