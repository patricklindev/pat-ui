import React from 'react'

interface IIcon{
    path: string;
    viewBox: string;
}

const Icon:React.FC<IIcon> =(props)=> {

  const {viewBox,path} = props

  return (
    <svg viewBox={viewBox}>
      <path  fillOpacity="1" d={path} />
    </svg>
  )
}

export default Icon