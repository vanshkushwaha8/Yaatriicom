package com.springboot.yatrii.service;

import com.springboot.yatrii.exception.ProductException;
import com.springboot.yatrii.model.Cart;
import com.springboot.yatrii.model.User;
import com.springboot.yatrii.request.AddItemRequest;

public interface CartService {

	public Cart createCart(User user);
	
	public String addCartItem(Long userId, AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);
}
