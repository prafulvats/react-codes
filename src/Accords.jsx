import React, { useState } from 'react'
import './Accords.css'
import AccordContent from './AccordContent';

const Accords = (props) => {
  const handleClick = () => {
    props.setShowIndex();
  }
  return (
      <div className='main'>
        <h2 className='mainhead' onClick={handleClick}><span>{props.faq.title}</span><span><i className="fa fa-angle-double-down" style={{"font-size":"15px","color":"red"}}></i></span></h2>
        {props.showData && <AccordContent faq={props.faq}/> }
      </div>
  )
}

export default Accords
