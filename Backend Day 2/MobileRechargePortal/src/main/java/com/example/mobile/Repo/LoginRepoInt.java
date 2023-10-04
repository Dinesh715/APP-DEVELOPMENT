package com.example.mobile.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.mobile.Entity.LoginEntity;


@Repository
public interface LoginRepoInt extends JpaRepository<LoginEntity, Integer> {
	public List<LoginEntity> findByNameAndPassword(String name,String password);
	
	public boolean existsByNameAndPassword(String name,String password);
}
