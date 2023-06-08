import React from 'react'
import { useState } from 'react'
import './canter.css'

const Canter = (props) => {

    let [canter, setCanter] = useState(props.startAt)

    // setTimeout(() => setCanter(canter + props.countBy), 1000)
    function countUp() {
        setCanter(canter + props.countBy)
    }
    function countCown() {

    if(canter <= 0) {
        return 
    }
        
    setCanter(canter - props.countBy)
            
        
    }

    function resetBtn() {
        setCanter(props.startAt)
    }

  return (
    <div className='container'>

        <div className='starts'>
        <p className='textOne'>startAt:{props.startAt} </p>
        <p className='textTwo'>StartBy:{props.countBy}</p>
        </div>
        
        <h4>
            <span>{canter}</span>
        </h4>
        <div className='inbox'>
            <button id='primatyBtn' onClick={countUp}>StartAt</button>
            
            <button id='secondaryBtn' onClick={countCown}>EndAt</button>
        </div>    

        <div className="reset-btn">
            <button id='resetBtn' onClick={resetBtn}>Reset</button>
        </div>
    </div>
  )
}

Canter.defaultProps = {
    startAt:0,
    countBy: 1
}

export default Canter