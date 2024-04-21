package com.springboot.yatrii.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.yatrii.model.OrderItem;
import com.springboot.yatrii.repository.OrderItemRepository;
import com.springboot.yatrii.service.OrderItemService;

@Service
public class OrderItemServiceImpl implements OrderItemService{

	@Autowired
	private OrderItemRepository orderItemRepository;
	
	@Override
	public OrderItem createOrderItem(OrderItem orderItem) {
		// TODO Auto-generated method stub
		
		return orderItemRepository.save(orderItem);
	}

	
}
