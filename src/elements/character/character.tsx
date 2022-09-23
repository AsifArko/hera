import * as React from 'react'

const Character = () => {
  return <>
    <img
      src={`/src/assets/avatar/character.png`}
      style={{width: '400px', opacity: '25%'}}
      loading="lazy"
    />
  </>
}

export default Character;