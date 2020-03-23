import { Router } from 'express'

// Controllers
import DefaultController from './app/controllers/defaultController'

const router = Router()

router.get('/', DefaultController.index)
router.get('/:id', DefaultController.show)
router.post('/', DefaultController.store)
router.put('/:id', DefaultController.update)
router.delete('/:id', DefaultController.destroy)

export default router
