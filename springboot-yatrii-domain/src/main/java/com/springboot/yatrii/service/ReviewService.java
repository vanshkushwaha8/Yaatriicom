package com.springboot.yatrii.service;

import java.util.List;

import com.springboot.yatrii.exception.ProductException;
import com.springboot.yatrii.model.Review;
import com.springboot.yatrii.model.User;
import com.springboot.yatrii.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req, User user)throws ProductException;
	
	public List<Review> getAllReview(Long productId);
}
