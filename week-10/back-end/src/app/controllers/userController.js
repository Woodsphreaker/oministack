import api from '../../services/api'
import Dev from '../models/Dev'
import * as Yup from 'yup'
import { findConnections, sendMessage } from '../../lib/socket'

// utils
import parseStringToArray from '../../utils/parseStringToArray'

const index = async (req, res) => {
  const user = await Dev.find()

  return res.json(user)
}

const show = async (req, res) => {
  const { login } = req.params
  const user = await Dev.findOne({ github_username: login })

  if (!user) {
    return res.status(400).json({ error: 'User not found' })
  }

  return res.json(user)
}

const store = async (req, res) => {
  const { githubUsername, techs = [], latitude, longitude } = req.body

  const schema = Yup.object().shape({
    githubUsername: Yup.string().required(),
    techs: Yup.string().required(),
    latitude: Yup.string().required(),
    longitude: Yup.string().required(),
  })

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ error: 'validations failed' })
  }

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
      techs: parseStringToArray(techs),
      location,
    })

    const sendSocketMessageTo = findConnections(
      { latitude, longitude },
      parseStringToArray(techs)
    )

    sendMessage(sendSocketMessageTo, 'newDev', newUser)

    return res.json(newUser)
  }

  return res.status('401').json({ error: 'user already exists' })
}

const update = async (req, res) => {
  const { login } = req.params
  const { name, bio, avatar_url, techs = [], latitude, longitude } = req.body

  const user = await Dev.findOne({ github_username: login })

  if (!user) {
    return res.status(400).json({ error: 'user not found' })
  }

  const location = {
    type: 'Point',
    coordinates: [longitude, latitude],
  }

  await user.updateOne({
    name,
    bio,
    avatar_url,
    techs: parseStringToArray(techs),
    location,
  })

  return res.json({ message: 'update method' })
}

const destroy = async (req, res) => {
  const { login } = req.params

  const user = await Dev.findOne({ github_username: login })

  if (!user) {
    return res.status(400).json({ error: 'User not found' })
  }

  const { github_username } = await user.remove()

  return res.json({ github_username })
}

export default { index, show, store, update, destroy }
