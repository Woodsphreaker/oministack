import socket from 'socket.io'
import parseStringToArray from '../utils/parseStringToArray'
import calculateDistance from '../utils/calculateDistance'

// store the connection on object (best in some database)
const connections = []

const localData = {}

const creatSocketServer = http => {
  const io = socket(http)
  localData.io = io
  createSocketConnection(io)
}

const createSocketConnection = io => {
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

    createSocketListeners(socket)
  })
}

const createSocketListeners = socket => {
  socket.on('testConn', text => console.log(text))
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
  const { io } = localData
  for (const connection of to) {
    io.to(connection.id).emit(message, data)
  }
}

export { creatSocketServer, findConnections, sendMessage }
