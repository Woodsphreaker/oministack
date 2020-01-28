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

  socket.on('message', text => console.log(text))
}

const disconnect = () => {
  if (socket.connected) {
    socket.disconnect()
  }
}
export { connect, disconnect }
