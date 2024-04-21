package com.springboot.yatrii.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.yatrii.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long>{

}
