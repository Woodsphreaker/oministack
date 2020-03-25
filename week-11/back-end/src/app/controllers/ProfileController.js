// database connection
import db from '../../database/knexConnection'

const index = async (req, res) => {
  const { authorization: ongID } = req.headers

  const incidents = await db('incidents').where({ ong_id: ongID }).select()

  return res.json(incidents)
}

export default { index }
