import React from 'react'
import classes from './TshirtList.module.css'

const TshirtList = (props) => {
   console.log('Hey',props.TshirtList)
 
  return (
    <div className={classes.maindiv}>
        
        {props.TshirtList.map((tshirt)=>(
            <div className={classes.list}>
            <span>{tshirt.tshirtname}</span>
            <span>₹{tshirt.price}</span>
             <span>{tshirt.description}</span>
             <span>
             <span><button>Large:{tshirt.largeQuantity}</button></span>
             <span><button>Medium:{tshirt.mediumQuantity}</button></span>
             <span><button>Small:{tshirt.smallQuantity}</button></span>
             </span>
            </div>
        ))}
    </div>
  )
}

export default TshirtList