package com.springbackend.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.springbackend.model.User;
import com.springbackend.utils.Response;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
@Repository
public class UsersDAOImpl implements UsersDAO{
	
	 @PersistenceContext
	    private EntityManager entityManager;

	    @Override
	    public Response registerUser(User user) {
	        Response response = new Response();

	        try {
	            entityManager.persist(user);

	            response.setMessage("Registration Success");
	            response.setOperation(true);
	            response.setStatusCode(201);
	        } catch (Exception e) {
	            response.setMessage("Registration failed");
	            response.setOperation(false);
	            response.setStatusCode(500);
	            // Log the exception or handle it as needed
	            e.printStackTrace();
	        }

	        return response;
	    }

		@Override
		public Response loginUser(User user) {
			// TODO Auto-generated method stub
			
			 Response response = new Response();
			 System.out.println("I am in login user DAO");
			  System.out.println(user.getEmail());
			  System.out.println(user.getPassword());

		        try {
		            String hql = "SELECT user.password FROM User user WHERE user.email = :email";
		            Query query = entityManager.createQuery(hql);
		            query.setParameter("email", user.getEmail());

		            List<String> result = query.getResultList();

		            if (result.isEmpty()) {
		                response.setMessage("User not found");
		                response.setOperation(true);
		                response.setStatusCode(404);
		            } else {
		                String passwordFromDB = result.get(0);
		                if (passwordFromDB.equals(user.getPassword())) {
		                    response.setMessage("Login Success");
		                    response.setOperation(true);
		                    response.setStatusCode(200);
		                } else {
		                    response.setMessage("Incorrect Password");
		                    response.setOperation(true);
		                    response.setStatusCode(401);
		                }
		            }
		        } catch (Exception e) {
		            response.setMessage("Login failed");
		            response.setOperation(false);
		            response.setStatusCode(500);
		            // Log the exception or handle it as needed
		            e.printStackTrace();
		        }

		        return response;
		    }
	}