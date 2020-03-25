// database connection
import db from '../../database/knexConnection'

const index = async (req, res) => {
  const { page = 1 } = req.query

  try {
    const [{ 'count(*)': count }] = await db('incidents').count()
    const incidents = await db('incidents')
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ])
      .innerJoin('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)

    res.header('X-Total-Count', count)
    return res.json(incidents)
  } catch (error) {
    return res.status(500).json({ error })
  }
}
const show = async (req, res) => {
  const { id } = req.params

  try {
    const incidents = await db('incidents').where({ ong_id: id })

    return res.json(incidents)
  } catch (error) {
    return res.status(500).json({ error })
  }
}
const store = async (req, res) => {
  const { title, description, value } = req.body
  const { authorization: ongID } = req.headers

  if (!ongID) {
    return res.status(401).json({ message: 'Not Permited' })
  }

  try {
    const ong = await db('ongs').first().where({ id: ongID })

    if (!ong) {
      return res.status(400).json({ message: 'ong not exists' })
    }
  } catch (error) {
    return res.status(500).json({ error })
  }

  try {
    const [id] = await db('incidents').insert({
      title,
      description,
      value,
      ong_id: ongID,
    })

    return res.json({ message: 'incident created', id })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
const update = async (req, res) => {
  return res.json({ message: 'update method' })
}
const destroy = async (req, res) => {
  const { id } = req.params
  const { authorization: ongID } = req.headers

  try {
    const incident = await db('incidents')
      .where({ id, ong_id: ongID })
      .select('ong_id')
      .first()
    if (!incident) {
      return res.status(401).json({ message: 'Not Permited' })
    }
  } catch (error) {
    return res.status(500).json({ error })
  }

  try {
    await db('incidents').delete().where({ id })
    return res.json({ message: 'incident deleted' })
  } catch (error) {
    return res.status(500).json({ error })
  }
}

export default { index, show, store, update, destroy }
