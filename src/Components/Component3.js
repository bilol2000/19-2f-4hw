import React from 'react'
import { useSelector } from 'react-redux'

const Component3 = () => {

  const { previousPath } = useSelector((state) => state.app)

  return (
    <div>
      <h1>Component 3</h1>
      <p>Coming from: {previousPath}</p></div>
  )
}

export default Component3