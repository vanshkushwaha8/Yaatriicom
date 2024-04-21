package com.springboot.yatrii.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.springboot.yatrii.exception.ProductException;
import com.springboot.yatrii.model.Product;
import com.springboot.yatrii.model.Review;
import com.springboot.yatrii.model.User;
import com.springboot.yatrii.repository.ProductRepository;
import com.springboot.yatrii.repository.ReviewRepository;
import com.springboot.yatrii.request.ReviewRequest;
import com.springboot.yatrii.service.ProductService;
import com.springboot.yatrii.service.ReviewService;

@Service
public class ReviewServiceImpl implements ReviewService{

	private ReviewRepository reviewRepository;
	private ProductService productService;
	private ProductRepository productRepository;
	
	public ReviewServiceImpl(ReviewRepository reviewRepository, ProductService productService,
			ProductRepository productRepository) {
		this.reviewRepository = reviewRepository;
		this.productService = productService;
		this.productRepository = productRepository;
	}

	@Override
	public Review createReview(ReviewRequest req, User user) throws ProductException {
		// TODO Auto-generated method stub
		Product product = productService.findProductById(req.getProductId());
		
		Review review = new Review();
		review.setUser(user);
		review.setProduct(product);
		review.setReview(req.getReview());
		review.setCreatedAt(LocalDateTime.now());
		
		return reviewRepository.save(review);
	}

	@Override
	public List<Review> getAllReview(Long productId) {
		// TODO Auto-generated method stub
		return reviewRepository.getAllProductsReview(productId);
	}

	
}
