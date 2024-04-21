import React from 'react'
import { IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from "@mui/material";
import {useDispatch} from 'react-redux'
import { removeCartItem, updateCartItem } from '../../state/Cart/Action';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const handleUpdateCartItem = (num) =>{
        const data = {data:{quantity:item.quantity+num}, cartItemId:item?.id}
        dispatch(updateCartItem(data))
    }
    const handleRemoveCartItem=()=>{
        dispatch(removeCartItem(item.id))
    }
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className="w-[25rem] h-[25rem] lg:w-[9rem] lg:h-[9rem]">
                <img className='w-full h-full object-cover object-top' src={item.product.imageUrl} />
            </div>
            <div className="ml-5 space-y-1">
                <p className='font-semibold'>{item.product.title}</p>
                <p className='opacity-70'> {item.product.description}</p>
                <div className='flex space-x-5 items-center text-gray-900 mt-10'>
                    <p className='font-semibold'>₹{item.product.price}</p>
                    <p className='opacity-50 line-through'>₹{item.product.discountedPrice}</p>
                    <p className='text-green-600 font-semibold'>{item.product.discountPercent}% off</p>
                </div>
            </div>

            
        </div>
        <div className='lg:flex item-center lg:space-x-10 pt-4'>
                <div className='flex item-center space-x-2'>
                    <IconButton onClick={()=>handleUpdateCartItem(-1) }disabled={item.quantity<=1}>
                        <GroupAddIcon/>
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>{item.quantity}</span>
                        <IconButton onClick={()=>handleUpdateCartItem(1)} sx={{color:"RGB(145 85 253)"}}>
                            <AddCircleOutlineIcon/>
                        </IconButton>
                </div>
                <div>
                    <Button onClick={handleRemoveCartItem} sx={{color:"RGB(145 85 253)"}}>remove</Button>
                </div>
            </div>
    </div>
  )
}

export default CartItem
