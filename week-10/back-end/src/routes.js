import { Router } from 'express'

// controllers
import usersController from './app/controllers/usersController'

const router = Router()

router.get('/users', usersController.index)
router.get('/users:id', usersController.show)
router.post('/users', usersController.store)
router.put('/users:id', usersController.update)
router.delete('/users:id', usersController.destroy)

export default router
