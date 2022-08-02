import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {

  return (
    <div>
        <button onClick={props.onClick} className='btn' style={{backgroundColor: props.color}}>{props.text}</button>
    </div>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
