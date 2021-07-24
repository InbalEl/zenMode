import './ModeButton.css'
import React from 'react'

function ModeButton(props) {
    return (
        <button className='mode-button'
        onClick={() => {props.onClick(props.mode)}}>
            {props.mode.name}
        </button>
    )
}

export default ModeButton