import db from '../../database/knexConnection'

const show = async (req, res) => {
  const { id } = req.query
  console.log(id)

  try {
    const [incident] = await db('incidents')
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ])
      .innerJoin('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .where({ 'incidents.id': id })

    return res.json(incident)
  } catch (error) {
    return res.status(500).json({ error })
  }
}

export default { show }
