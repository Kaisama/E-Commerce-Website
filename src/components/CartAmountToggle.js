import React from 'react'
import{FaPlus,FaMinus} from 'react-icons/fa'

const CartAmountToggle = ({amount,setDecrease,setIncrease}) => {
  return (
    <div className='cart-button' style={{display:"flex", gap:"1rem"}}>
        <button onClick={()=>setDecrease()} style={{backgroundColor:"gray",padding:".5rem 1.5rem",color:"white",border:"none"}} ><FaMinus style={{backgroundColor:""}}/></button>
        <div className='amount-style' style={{backgroundColor:"gray",width:"6rem",border:"none",color:"white",textAlign:"center",fontSize:"3rem"}}>{amount}</div>
        <button onClick={()=>setIncrease()} style={{backgroundColor:"gray",padding:".5rem 1.5rem",color:"white",border:"none"}}><FaPlus/></button>
    </div>
  )
}

export default CartAmountToggle