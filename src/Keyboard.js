import React from 'react'
import './Keyboard.css';
import PropTypes from 'prop-types'


const Keyboard = ({ letter, onClick, feedback}) => (
  <div style={{backgroundColor: `${feedback}`}} className={"letter"} onClick={() => onClick(letter)}>
    <span>
    {letter}
    </span>
  </div>
)
 
Keyboard.propTypes = {
  letter: PropTypes.string.isRequired,
  feedback: PropTypes.oneOf([
    'gray',
    '#17a2b8'    
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
}
export default Keyboard