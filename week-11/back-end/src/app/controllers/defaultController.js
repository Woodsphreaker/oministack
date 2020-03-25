import User from '../models/userModel'

const index = async (req, res) => {
  const users = await User.find()

  return res.json({ message: 'index method', users })
}
const show = async (req, res) => {
  return res.json({ message: 'show method' })
}
const store = async (req, res) => {
  const { name, age } = req.body

  const user = await User.findOne({ name })

  if (user) {
    return res.status(400).json({ message: 'User already exists' })
  }

  const newUser = await User.create({
    name,
    age,
  })

  return res.json({ message: 'store method', newUser })
}
const update = async (req, res) => {
  return res.json({ message: 'update method' })
}
const destroy = async (req, res) => {
  return res.json({ message: 'destroy method' })
}

export default { index, show, store, update, destroy }
