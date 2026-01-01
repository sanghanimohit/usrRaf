import React from 'react'
import useToggle from '../Hooks/UseToggle'

const ToggleCounter = () => {
    const [isVisibal , toggleVisibal] = useToggle (false)
  return (
    <div>
        <button onClick={toggleVisibal}>
            {isVisibal ? 'hide':'show'}
        </button>
        {isVisibal && <p>this content is visible.....!</p>}
    </div>
  )
}

export default ToggleCounter