// database connection
import db from '../../database/knexConnection'

const show = async (req, res) => {
  const { id } = req.body

  try {
    const ong = await db('ongs').where({ id }).select('name').first()
    if (!ong) {
      return res.status(400).json({ error: 'No Ong Found with this ID' })
    }

    return res.json({ message: 'ok', ong })
  } catch (error) {
    return res.json(error)
  }
}

export default { show }
