package com.springboot.yatrii.service;

import com.springboot.yatrii.exception.CartItemException;
import com.springboot.yatrii.exception.UserException;
import com.springboot.yatrii.model.Cart;
import com.springboot.yatrii.model.CartItem;
import com.springboot.yatrii.model.Product;

public interface CartItemService {
	
	public CartItem createCartItem(CartItem cartItem);
	
	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem)throws CartItemException, UserException;
	
	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId);
	
	public void removeCartItem(Long userId, Long cartItemId)throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long cartItemId) throws CartItemException;
}
