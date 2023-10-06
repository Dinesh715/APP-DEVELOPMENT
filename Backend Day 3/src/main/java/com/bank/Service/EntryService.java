package com.bank.Service;


import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bank.DTO.AuthenticationRequest;
import com.bank.DTO.AuthenticationResponse;
import com.bank.DTO.RegisterRequest;
import com.bank.Modal.User;
import com.bank.Modal.Enumerate.Role;
import com.bank.Repository.UserRepository;
import com.bank.Util.JwtService;




@Service
public class EntryService {

	@Autowired
	UserRepository uRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	public AuthenticationResponse validateUser(AuthenticationRequest request) {
		
		authenticationManager.authenticate(
				
			new UsernamePasswordAuthenticationToken(
					request.getEmail(), request.getPassword()
				)
		);
		
		var user = uRepo.findByEmail(request.getEmail()).orElseThrow();
		
		var jwtToken = jwtService.generateToken(user);
		
		return AuthenticationResponse.builder()
				.token(jwtToken)
				.build();
		
	}
	
	
	public AuthenticationResponse CreateNewUser(RegisterRequest request) {
		
		
		var user = User.builder()
				.firstName(request.getFirstName())
				.lastName(request.getLastName())

				.email(request.getEmail())
				.password(passwordEncoder.encode(request.getPassword()))
				.role(Role.USER)
				.build();
				
		
	
		
			
			uRepo.save(user);
			
			var jwtToken = jwtService.generateToken(user);
			
			return AuthenticationResponse.builder()
					.token(jwtToken)
					.build();
		}
	}

