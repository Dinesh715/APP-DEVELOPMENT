package com.example.mobile.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.mobile.Entity.LoginEntity;
import com.example.mobile.Service.LoginService;

@RestController
@CrossOrigin("*")
public class LoginController {
	@Autowired
	private LoginService ls;
	
	@GetMapping("/getlogin")
	public List<LoginEntity> getLoginDetails()
	{
		return ls.getLoginData();
	}
	
	@PostMapping("/savelogin")
	public void saveLoginDetails(@RequestBody LoginEntity le)
	{
		ls.saveLoginData(le);
	}
	
	@PutMapping("/updatelogin")
	public void updateLoginDetails(@RequestBody LoginEntity le,@RequestParam int sno)
	{
		le.setSno(sno);
		ls.updateLoginData(le);
	}
	
	@DeleteMapping("/deletelogin")
	public void deleteLoginDetails(@RequestParam int sno)
	{
		ls.deleteLoginData(sno);
	}
	
	@GetMapping("/checklogin/{name}/{password}")
	public boolean existsByNameAndPassword(@PathVariable String name,@PathVariable String password) {
		return ls.existsByNameAndPassword(name, password);
	}
}

