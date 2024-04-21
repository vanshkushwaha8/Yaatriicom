package com.springboot.yatrii.service;

import java.util.List;

import com.springboot.yatrii.exception.ProductException;
import com.springboot.yatrii.model.Rating;
import com.springboot.yatrii.model.User;
import com.springboot.yatrii.request.RatingRequest;

public interface RatingService {
	
	public Rating createRating(RatingRequest req, User user) throws ProductException;
	
	public List<Rating> getProductRating(Long productId);
	
	
}
