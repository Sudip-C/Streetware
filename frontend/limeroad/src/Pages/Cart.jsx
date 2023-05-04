import React from 'react'
import { CloseIcon,AddIcon,MinusIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react'
import "../Components/ProductComponents/CartComponents/cart.css"
import Bill from '../Components/ProductComponents/CartComponents/Bill';
export const Cart = () => {

  const product=[
    {
      "_id": "64520eb37a2b535d2f820039",
      "image": "https://img3.junaroad.com/uiproducts/15892957/pri_175_p-1547294126.jpg",
      "title": "Logo Print Round-Neck Sweatshirt",
      "brand": "Levanse",
      "price": 849,
      "before_disc": 1699,
      "offer_percent": 50,
      "gender": "Men",
      "type": "Formal Shoes",
      "model": "Western Wear",
      "size": [
      "M",
      "S",
      "L",
      "XL",
      "XXL",
      "XXXL"
      ],
      "Quantity": 8,
      "__v": 0
      },
      {
        "_id": "64520eb37a2b535d2f820038",
        "image": "https://img3.junaroad.com/uiproducts/15892957/pri_175_p-1547294126.jpg",
        "title": "Logo Print Round-Neck Sweatshirt",
        "brand": "Levanse",
        "price": 849,
        "before_disc": 1699,
        "offer_percent": 50,
        "gender": "Men",
        "type": "Formal Shoes",
        "model": "Western Wear",
        "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
        ],
        "Quantity": 6,
        "__v": 0
        },
        {
          "_id": "64520eb37a2b535d2f820034",
          "image": "https://img3.junaroad.com/uiproducts/15892957/pri_175_p-1547294126.jpg",
          "title": "Logo Print Round-Neck Sweatshirt",
          "brand": "Levanse",
          "price": 849,
          "before_disc": 1699,
          "offer_percent": 50,
          "gender": "Men",
          "type": "Formal Shoes",
          "model": "Western Wear",
          "size": [
          "M",
          "S",
          "L",
          "XL",
          "XXL",
          "XXXL"
          ],
          "Quantity": 2,
          "__v": 0
          }
    ]
    
  
let total;
for(let i=0 ;i<product.length;i++){
  total+=product[i].Quantity*product[i].price
}
  
console.log(total)


  return (
 
  
    <div className='fulldisplay'  >
    <div className='cart' >
      <div className='products'>

   {product.map((product)=>(    
        <div className='selectedProductCard' key={product._id} >
       <div className='productimage'>
         <img src={product.image} alt='prod' style={{width:"100%"}} />
       </div>
       <div className='cartproductdetails' >
       <div className='part1'>
       <div>
       <h3>{product.title}</h3>
       <p style={{fontSize:"15px"}}>by {product.brand.toUpperCase()}</p>
       </div>
       <p>size: <b>{product.size[0]}</b></p>
       <p>quantity:  <IconButton aria-label='Search database'  bg='white' icon={<AddIcon/>} />  {product.Quantity}  
       <IconButton aria-label='Search database'  bg='white' icon={<MinusIcon/>} /></p>
       </div>
       <div className='part2'>
       <IconButton aria-label='Search database'  bg='white' icon={<CloseIcon/>} /> 
        <div className='price'>
         <h1 style={{fontSize:"20px"}}>{product.price*product.Quantity}</h1>
         <p style={{textDecoration:"line-through",fontSize:"15px"}}>{product.before_disc*product.Quantity}</p>
         </div>
         <p>free shipping</p>
       </div>
       </div>
           </div>
        
   ))}
   </div>
    <div className='billing'>
      <Bill total={total}/>
    </div>
  </div>
  </div>
  
 
  )
}

