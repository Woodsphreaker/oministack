import Dev from '../models/Dev'

import parseStringToArray from '../../utils/parseStringToArray'

const index = async (req, res) => {
  const { latitude, longitude, techs } = req.query

  const users = await Dev.find({
    techs: {
      $in: parseStringToArray(techs),
    },
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [longitude, latitude],
        },
        $maxDistance: 10000,
      },
    },
  })

  return res.json(users)
}

export default { index }
