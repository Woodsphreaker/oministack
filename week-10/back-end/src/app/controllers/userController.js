import api from '../../services/api'
import Dev from '../models/Dev'

const index = async (req, res) => {
  const user = await Dev.find({})

  return res.json({ user })
}

const show = async (req, res) => {
  const { login } = req.params
  const user = await Dev.findOne({ github_username: login })

  return res.json({ user })
}

const store = async (req, res) => {
  const { githubUsername, techs = [], latitude, longitude } = req.body

  const { data: response } = await api.get(`/users/${githubUsername}`)

  const { login, name = login, avatar_url, bio } = response

  const user = await Dev.findOne({ github_username: login })

  if (!user) {
    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    }
    const newUser = await Dev.create({
      github_username: login,
      name,
      bio,
      avatar_url,
      techs: techs.split(',').map(el => el.trim()),
      location,
    })

    return res.json(newUser)
  }

  return res.status('401').json({ error: 'user already exists' })
}

const update = async (req, res) => {
  return res.json({ message: 'update method' })
}

const destroy = async (req, res) => {
  return res.json({ message: 'destroy method' })
}

export default { index, show, store, update, destroy }
