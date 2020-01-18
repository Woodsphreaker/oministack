import React from 'react'
import { UserInfo, RowContainer, RemoveProfile } from '../../pages/Main/styles'
import { MdDeleteForever } from 'react-icons/md'

import propTypes from 'prop-types'

const DevItem = ({ dev, removeDev }) => {
  return (
    <li>
      <header>
        <img src={dev.avatar_url} alt={dev.name} title={dev.name} />
        <UserInfo>
          <strong>{dev.name}</strong>
          <span>{dev.techs.toString()}</span>
        </UserInfo>
      </header>
      <p>{dev.bio}</p>
      <RowContainer>
        <a href={`https://github.com/${dev.github_username}`}>Acessar Perfil</a>
        <RemoveProfile onClick={() => removeDev(dev.github_username)}>
          <MdDeleteForever size={15} />
        </RemoveProfile>
      </RowContainer>
    </li>
  )
}

DevItem.propTypes = {
  dev: propTypes.shape({
    avatar_url: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    techs: propTypes.array.isRequired,
    bio: propTypes.string.isRequired,
    github_username: propTypes.string.isRequired,
  }).isRequired,
  removeDev: propTypes.func.isRequired,
}

export default DevItem
