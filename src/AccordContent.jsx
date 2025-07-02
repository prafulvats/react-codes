import React from 'react'

const AccordContent = (props) => {
  return (<>
      <h3>{props.faq.head}</h3>
      <p>{props.faq.text}</p>
      </>
  )
}

export default AccordContent
