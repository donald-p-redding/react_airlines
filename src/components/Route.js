import React from 'react'

const Route = ({ src, dest }) => {

  const genId = () => {
    const val = Math.floor(Math.random() * 10000)
    return String(val)
  }

  return (
    <g className='vector' key={src.code + genId()}>
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