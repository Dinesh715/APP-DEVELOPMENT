package com.bank.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.bank.DTO.AuthenticationRequest;
import com.bank.DTO.AuthenticationResponse;
import com.bank.DTO.RegisterRequest;
import com.bank.DTO.UserDTO;
import com.bank.Modal.User;
import com.bank.Modal.Enumerate.Role;
import com.bank.Repository.UserRepository;
import com.bank.Util.JwtService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class UserService {

	@Autowired
	UserRepository uRepo;
	

	
    
    public List<UserDTO> getAllUsers() {
        
    	List<User> user=uRepo.findAll();
    	List<UserDTO> userDTO=new ArrayList<>();
    	for(User u:user)
    	{
    		userDTO.add( UserDTO
    				.builder()
    				.firstName(u.getFirstName())
    				.email(u.getEmail())
    				.build());
    	}
    	return userDTO;
    }

    public User getUserById(int userId) {
        Optional<User> optionalUser = uRepo.findById(userId);
      
            return optionalUser.get();
        
    }

    public User updateUser(int userId, User updatedUser) {
        Optional<User> optionalUser = uRepo.findById(userId);
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
//            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setEmail(updatedUser.getEmail());
//            existingUser.setFirstName(updatedUser.getFirstName());
//            existingUser.setLastName(updatedUser.getLastName());
            return uRepo.save(existingUser);
        } else {
            return null;
        }
    }

    public void deleteUser(int userId) {
        Optional<User> optionalUser = uRepo.findById(userId);
     
            uRepo.delete(optionalUser.get());
        
    }
}
