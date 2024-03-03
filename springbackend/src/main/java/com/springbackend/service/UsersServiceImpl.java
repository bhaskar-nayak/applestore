package com.springbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springbackend.dao.UsersDAO;
import com.springbackend.model.User;
import com.springbackend.utils.Response;

@Service
public class UsersServiceImpl implements UsersService{

	 @Autowired
	 UsersDAO usersDAO;
	@Override
	@Transactional
	public Response registerUser(User user) {
		// TODO Auto-generated method stub
		return usersDAO.registerUser(user);
	}
	@Override
	public Response loginUser(User user) {
		// TODO Auto-generated method stub
		return usersDAO.loginUser(user);
	}
	
}
