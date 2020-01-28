import socket from 'socket.io'
import parseStringToArray from '../utils/parseStringToArray'
import calculateDistance from '../utils/calculateDistance'

// store the connection on object (best in some database)
const connections = []

const creatSocketServer = http => {
  const io = socket(http)

  io.on('connection', socket => {
    const {
      id,
      handshake: { query },
    } = socket

    const { latitude, longitude, techs } = query

    connections.push({
      id,
      coordinates: {
        latitude,
        longitude,
      },
      techs: parseStringToArray(techs),
    })
  })
}

const findConnections = (coordinates, techs) => {
  return connections.filter(connection => {
    return (
      calculateDistance(coordinates, connection.coordinates) < 10 &&
      connection.techs.some(tech => techs.includes(tech))
    )
  })
}

const sendMessage = (to, message, data) => {
  // refatorar acesso ao io
}

export { creatSocketServer, findConnections }
