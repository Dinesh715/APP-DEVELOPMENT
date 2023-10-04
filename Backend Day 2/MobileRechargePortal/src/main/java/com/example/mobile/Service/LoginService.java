package com.example.mobile.Service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobile.Entity.LoginEntity;
import com.example.mobile.Repo.LoginRepoInt;

@Service
public class LoginService implements LoginServiceInt {
	@Autowired
	private LoginRepoInt lr;

	public List<LoginEntity> getLoginData() {
		return lr.findAll();
	}

	public void saveLoginData(LoginEntity le) {
		lr.save(le);
		
	}

	public void updateLoginData(LoginEntity le) {
		lr.save(le);
		
	}

	public void deleteLoginData(int sno) {
		lr.deleteById(sno);
	}

	public List<LoginEntity> findByNameAndPassword(String name, String password) {
		return lr.findByNameAndPassword(name, password);
	}
	
	public boolean existsByNameAndPassword(String name,String password) {
		return !(lr.existsByNameAndPassword(name, password));
	}
	
}
