import api from '../../services/api'
import Dev from '../models/Dev'

const index = async (req, res) => {
  return res.json({ message: 'index method' })
}

const show = async (req, res) => {
  const { id } = req.params
  return res.json({ message: 'show method', id })
}

const store = async (req, res) => {
  const body = req.body
  const user = await Dev.findOne({ name: 'woods' })

  if (user) {
    user.remove()
  }

  return res.json({ message: 'store method', body })
}

const update = async (req, res) => {
  return res.json({ message: 'update method' })
}

const destroy = async (req, res) => {
  return res.json({ message: 'destroy method' })
}

export default { index, show, store, update, destroy }
