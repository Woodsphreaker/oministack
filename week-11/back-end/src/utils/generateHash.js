import crypto from 'crypto'

export default ({ bytes = 4, hash = 'HEX' }) => {
  return crypto.randomBytes(bytes).toString(hash)
}
