import React from 'react'
import C2 from './C2.js'
const C1 = ({data}) => {
  return (
    <div className='c1'>
        <div>Component 1</div>
        <C2 data={data}/>
    </div>
  )
}

export default C1