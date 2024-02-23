import React, { useState } from 'react'
import TshirtList from '../TshirtList/TshirtList'


const InputForm = () => {
    const [tshirtName,setTshirtName]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState('')
    const [largeQuantity,setLargeQuantity]=useState('')
    const [mediumQuantity,setMediumQuantity]=useState('')
    const [smallQuantity,setSmallQuantity]=useState('')

    const [TshirtList,setTshirtList]=useState([])

    const tshirtNameHandler=(event)=>{
       setTshirtName(event.target.value)
    }
    const descriptionHandler=(event)=>{
        setDescription(event.target.value)
    }
    const priceHandler=(event)=>{
        setPrice(event.target.value)
    }
    const largeQuantityHandler=(event)=>{
        setLargeQuantity(event.target.value)
    }
    const mediumQuantityHandler=(event)=>{
        setMediumQuantity(event.target.value)
    }
    const smallQuantityHandler=(event)=>{
        setSmallQuantity(event.target.value)
    }


    const submitHandler=(event)=>{
      event.preventDefault();
      const newObj={
        tshirtName,
        description,
        price,
        largeQuantity,
        mediumQuantity,
        smallQuantity
      }

      setTshirtList((prevList)=>[...prevList,newObj])
      console.log(TshirtList)

     
    }

  return (
    <div>
    <form onSubmit={submitHandler}>
        <label htmlFor="tshirtname">TshirtName</label><br/>
        <input type="text" id='tshirtname' onChange={tshirtNameHandler}/><br/>
        <label htmlFor="description">description</label><br/>
        <input type="text" id='description' onChange={descriptionHandler}/><br/>
        <label htmlFor="price">Price</label><br/>
        <input type="number" id='price' onChange={priceHandler} /><br/>
        <p>Quantity Available</p>
        <label htmlFor="large" >L :</label>
        <input type="number" id='large' onChange={largeQuantityHandler}/>
        <label htmlFor="medium" >M :</label>
        <input type="number" id='medium' onChange={mediumQuantityHandler}/>
        <label htmlFor="small" >S :</label>
        <input type="number" id='small' onChange={smallQuantityHandler}/><br/>
        <button>Add Product</button>
    </form>
      <TshirtList TshirtList={TshirtList}/>
    </div>
  )
}

export default InputForm