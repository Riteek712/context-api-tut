import React from 'react'
import C3 from './C3.js'
const C2 = ({data}) => {
  return (
    <div className='c2'>
        <div>Component 2</div>
        <C3 data={data}/>
    </div>
  )
}

export default C2