import { Router } from 'express'

// Controllers
import OngController from './app/controllers/OngController'
import IncidentController from './app/controllers/IncidentController'
import ProfileController from './app/controllers/ProfileController'
import SessionController from './app/controllers/SessionControler'
import DetailController from './app/controllers/DetailController'

const router = Router()

// Routes

// Session
router.post('/session', SessionController.show)

// Ong
router.get('/ong', OngController.index)
router.get('/ong/:id', OngController.show)
router.post('/ong', OngController.store)
router.put('/ong/:id', OngController.update)
router.delete('/ong/:id', OngController.destroy)

// Incident
router.get('/incident', IncidentController.index)
router.get('/incident/:id', IncidentController.show)
router.post('/incident', IncidentController.store)
router.put('/incident/:id', IncidentController.update)
router.delete('/incident/:id', IncidentController.destroy)

// Profiles Incidents
router.get('/profile', ProfileController.index)

// Detail Controller
router.get('/detail', DetailController.show)

export default router
