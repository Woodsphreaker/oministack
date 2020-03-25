import { Router } from 'express'

// Controllers
import OngController from './app/controllers/ongController'

const router = Router()

router.get('/', OngController.index)
router.get('/:id', OngController.show)
router.post('/', OngController.store)
router.put('/:id', OngController.update)
router.delete('/:id', OngController.destroy)

export default router
