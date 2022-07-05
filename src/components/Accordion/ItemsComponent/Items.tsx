import React from 'react'
import {useState} from 'react'
import '../Accordion.scss'
import { Data } from './Data'
import Icon from '../../Icon'



function Items() {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if(selected === i){
        return setSelected(null)
        }
        setSelected(i)
    }

  return (
    <div className='accordion'>
    {Data.map((item, i) => (
      <div key={i} className='item'>
        <div className='title' onClick={() => toggle(i)}>
          <h2>{item.id}</h2>
          <span>{selected === i ? 
            <Icon
            className='arrow-up'
            disabled={false}
            loading={false}
            name="angle down"
            size="small"
            /> : 
            <Icon
            disabled={false}
            loading={false}
            name="angle down"
            size="small"
            />
    }</span>
        </div>
        <div className={selected === i ? 'content show' : 'content hidden'}>{item.name}</div>
      </div>
    ))}
  </div>
  )
}

export default Items