package com.springboot.yatrii.service;

import com.springboot.yatrii.exception.UserException;
import com.springboot.yatrii.model.User;

public interface UserService {
	public User findUserById(Long userId)throws UserException;
	
	public User findUserProfileByJwt(String jwt)throws UserException;
	
	
}
