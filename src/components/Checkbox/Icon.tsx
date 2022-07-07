import React from 'react'

export interface IIcon{
    path: string;
    viewBox: string;
    fill?:string
}

const Icon:React.FC<IIcon> =(props)=> {

  const {viewBox,path,fill} = props

  return (
    <svg viewBox={viewBox} data-testid={viewBox} role="img">
      <path fill={fill} fillOpacity="1" d={path} data-testid={path}/>
    </svg>
  )
}

export default Icon