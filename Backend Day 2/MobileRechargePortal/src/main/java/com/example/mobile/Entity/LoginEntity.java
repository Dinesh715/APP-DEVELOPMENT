package com.example.mobile.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="login")
public class LoginEntity {
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int sno;
	
	public LoginEntity() {
		super();
	}
	public LoginEntity(int sno, String name, String password) {
		super();
		this.sno = sno;
		this.name = name;
		this.password = password;
	}
	@Override
	public String toString() {
		return "LoginEntity [sno=" + sno + ", name=" + name + ", password=" + password + "]";
	}
	public int getSno() {
		return sno;
	}
	public void setSno(int sno) {
		this.sno = sno;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	private String name;
	private String password;

}
