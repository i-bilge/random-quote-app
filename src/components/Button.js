import React from 'react'
import './Button.css';

function Button(props) {
  return (
    <button className='Button' onClick={ props.onClick}>
      Generate
    </button>
  )
}

export default Button