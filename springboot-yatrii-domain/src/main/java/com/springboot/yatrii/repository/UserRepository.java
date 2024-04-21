package com.springboot.yatrii.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.yatrii.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	public User findByEmail(String email);
}
