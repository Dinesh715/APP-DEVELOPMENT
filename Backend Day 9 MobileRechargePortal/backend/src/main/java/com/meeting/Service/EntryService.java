package com.meeting.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.meeting.DTO.AuthenticationRequest;
import com.meeting.DTO.AuthenticationResponse;
import com.meeting.DTO.RegisterRequest;
import com.meeting.Modal.User;
import com.meeting.Modal.Enumerate.Role;
import com.meeting.Repository.UserRepository;
import com.meeting.Util.JwtService;

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

		try {

			authenticationManager.authenticate(

					new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

			var user = uRepo.findByEmail(request.getEmail()).orElseThrow();

			var jwtToken = jwtService.generateToken(user);

			return AuthenticationResponse.builder().token(jwtToken).build();
			
		} catch (Exception e) {

			return AuthenticationResponse.builder().token(null).build();
		}

	}

	public AuthenticationResponse CreateNewUser(RegisterRequest request) {

		User user = User.builder()
				.name(request.getName())
				.phone(request.getPhone())
				.email(request.getEmail())
				.password(passwordEncoder.encode(request.getPassword()))
				.role(Role.USER).build();

		
		
		System.out.println(user);
		System.out.println(request);

		uRepo.save(user);
		var jwtToken = jwtService.generateToken(user);

		return AuthenticationResponse.builder().token(jwtToken).build();

	}
}
