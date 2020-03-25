import db from '../../database/knexConnection'

import generateHash from '../../utils/generateHash'

const index = async (req, res) => {
  const ongs = await db('ongs').select()

  return res.json(ongs)
}
const show = async (req, res) => {
  const { id } = req.params
  console.log(id)

  const ong = await db('ongs').first().where({ id })

  if (!ong) {
    return res.status(400).json({ message: 'ONG not found' })
  }

  return res.json(ong)
}
const store = async (req, res) => {
  const id = generateHash({ bytes: 4 })
  const { name, email, whatsapp, city, uf } = req.body

  const ong = await db('ongs').first().where({ name })

  if (ong) {
    return res.status(400).json({ message: 'ONG already exists' })
  }

  try {
    await db('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })
  } catch (error) {
    console.log(error)
  }

  return res.json({ message: 'store method', id })
}
const update = async (req, res) => {
  return res.json({ message: 'update method' })
}
const destroy = async (req, res) => {
  return res.json({ message: 'destroy method' })
}

export default { index, show, store, update, destroy }
