import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'

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
router.post(
  '/ong',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      whatsapp: Joi.number().required(),
      city: Joi.string().min(2).required(),
      uf: Joi.string().min(2).required(),
    }),
  }),
  OngController.store
)
router.put('/ong/:id', OngController.update)
router.delete('/ong/:id', OngController.destroy)

// Incident
router.get(
  '/incident',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  IncidentController.index
)
router.get('/incident/:id', IncidentController.show)
router.post('/incident', IncidentController.store)
router.put('/incident/:id', IncidentController.update)
router.delete('/incident/:id', IncidentController.destroy)

// Profiles Incidents
router.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
)

// Detail Controller
router.get('/detail', DetailController.show)

export default router
