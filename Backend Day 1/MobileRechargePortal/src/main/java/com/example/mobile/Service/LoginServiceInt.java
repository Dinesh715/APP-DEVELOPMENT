package com.example.mobile.Service;

import java.util.List;

import com.example.mobile.Entity.LoginEntity;


public interface LoginServiceInt {
	public List<LoginEntity> getLoginData();
	public List<LoginEntity> findByNameAndPassword(String name,String password);
	public void saveLoginData(LoginEntity le);
	public void updateLoginData(LoginEntity le);
	public void deleteLoginData(int sno);
	public boolean existsByNameAndPassword(String name,String password);

}
