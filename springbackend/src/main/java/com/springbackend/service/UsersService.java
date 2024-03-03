package com.springbackend.service;

import com.springbackend.model.User;
import com.springbackend.utils.Response;

public interface UsersService {
	public Response registerUser(User user);
	public Response loginUser(User user);
}
