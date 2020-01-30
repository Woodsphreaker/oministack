import io from 'socket.io-client'

const socket = io('http://10.1.1.10:3000', {
  autoConnect: false,
})

const connect = ({ latitude, longitude, techs }) => {
  // send options to socket connection
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  }

  socket.connect()
  createListeners()
}

// refactor this function
const subscribeNewDev = action => {
  socket.on('newDev', dev => action(dev))
}

const createListeners = () => {
  // socket.on('newDev', data => console.log(data))
  // socket.on('message', text => console.log(text))
  // socket.emit('testConn', { test: 123 })
}

const disconnect = () => {
  if (socket.connected) {
    socket.disconnect()
  }
}
export { connect, disconnect, subscribeNewDev }
