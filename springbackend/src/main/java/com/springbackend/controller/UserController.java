package com.springbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springbackend.model.User;
import com.springbackend.service.UsersService;
import com.springbackend.utils.Response;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

	@Autowired
	UsersService usersService;
	@GetMapping("/healths")
	public String healthcheck() {
		return "App is working awesome";	
	}
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@PostMapping("/register")
	public ResponseEntity register(@RequestBody User user) {
		
		Response response = usersService.registerUser(user);
		return new ResponseEntity(response,response.getOperation()? HttpStatus.CREATED : HttpStatus.BAD_REQUEST);	
	}
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@PostMapping("/login")
	public ResponseEntity login(@RequestBody User user) {
		Response response = usersService.loginUser(user);
		return new ResponseEntity(response,response.getOperation()? HttpStatus.OK : HttpStatus.BAD_REQUEST);	
	}
	
}
