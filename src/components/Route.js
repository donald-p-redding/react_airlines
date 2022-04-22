import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const Route = ({ src, dest }) => {

  return (
    <g className='vector' key={uuidv4()}>
      <circle className='source' cx={src.long} cy={src.lat}>
        <title>{src.name}</title>
      </circle>
      <circle className='destination' cx={dest.long} cy={dest.lat}>
        <title>{dest.name}</title>
      </circle>
      <path className='path' d={`M${src.long} ${src.lat} L ${dest.long} ${dest.lat}`}/>
    </g>
  )
}

export default Route