import React from 'react';
import { AccordionData } from './types';
import { useEffect, useRef, useState } from 'react';
// import img from '/Users/omarbrown/accordian/accordian/src/components/Accordion/square.png';

function AccordionItem({
	data,
	isOpen,
	btnOnClick,
      }: {
	data: AccordionData;
	isOpen: boolean;
	btnOnClick: () => void;
      }) {
	const contentRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
	  if (isOpen) {
	    const contentEl = contentRef.current as HTMLDivElement;
      
	    setHeight(contentEl.scrollHeight);
	  } else {
	    setHeight(0);
	  }
	  if (data.id === 2) {
		setLoading(true);
	  }
	}, [isOpen, data.id]);
      
	return (
	  <li className={`accordion-item ${isOpen ? 'active' : ''}`}>
	    <h2 className="accordion-item-title">
	      <button className="accordion-item-btn" onClick={btnOnClick} disabled={loading}>
		<div className='row'> 
		  {/* <input type="checkbox"/> */}
		  {/* <span> {data.png} </span> */}
		  <span className='title'> {data.title} </span>
		  <span className='subTitle'> {data.subTitle} </span>
		</div>
	      </button>
	    </h2>
	    <div className="accordion-item-container" style={{ height }}>
	      <div ref={contentRef} className="accordion-item-content">
		{data.content}
	      </div>
	    </div>
	  </li>
	);
      }

export default AccordionItem;