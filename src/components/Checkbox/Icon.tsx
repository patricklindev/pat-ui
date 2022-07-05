import React from 'react'

interface IIcon{
    path: string;
    viewBox: string;
    fill?:string
}

const Icon:React.FC<IIcon> =(props)=> {

  const {viewBox,path,fill} = props

  return (
    <svg viewBox={viewBox}>
      <path fill={fill} fillOpacity="1" d={path} />
    </svg>
  )
}

export default Icon