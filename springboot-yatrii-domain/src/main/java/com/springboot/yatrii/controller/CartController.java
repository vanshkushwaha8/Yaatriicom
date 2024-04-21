package com.springboot.yatrii.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.yatrii.exception.ProductException;
import com.springboot.yatrii.exception.UserException;
import com.springboot.yatrii.model.Cart;
import com.springboot.yatrii.model.User;
import com.springboot.yatrii.request.AddItemRequest;
import com.springboot.yatrii.response.ApiResponse;
import com.springboot.yatrii.service.CartService;
import com.springboot.yatrii.service.UserService;

@RestController
@RequestMapping("/api/cart")
public class CartController {

	@Autowired
	private  CartService cartService;
	@Autowired
	private UserService userService;
	
	@GetMapping("/")
	public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization")String jwt)throws UserException{
		User user = userService.findUserProfileByJwt(jwt);
		Cart cart = cartService.findUserCart(user.getId());
		
		return new ResponseEntity<Cart>(cart, HttpStatus.OK);
	}
	@PutMapping("/addItem")
	public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req, @RequestHeader("Authorization")String jwt) throws UserException, ProductException{
		User user = userService.findUserProfileByJwt(jwt);
		cartService.addCartItem(user.getId(), req);
		ApiResponse res = new ApiResponse();
		res.setMessage("Item added to cart");
		res.setStatus(true);
		return new ResponseEntity<>(res, HttpStatus.OK);
	}
}
