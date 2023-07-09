import React from 'react'
import { useContext } from 'react'
import { AppState } from './App'
const C3 = ({data}) => {
    const appData = useContext(AppState)
  return (
    <div className='c3'>
        <div>component 3</div>
        <h2>{data}</h2>
        <h2>{appData}</h2>
    </div>
  )
}

export default C3