package com.springbackend.dao;

import com.springbackend.model.User;
import com.springbackend.utils.Response;

public interface UsersDAO {
	public Response registerUser(User user);
	public Response loginUser(User user);
}
