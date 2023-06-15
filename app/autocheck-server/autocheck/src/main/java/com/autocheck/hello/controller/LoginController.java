package com.autocheck.hello.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.autocheck.hello.model.Sinhvien;
@Controller
public class LoginController {

	@Value("${firebasefile}")
	String firebasefile2;
	
	@Value("${googleexcel}")
	String excelfile;
	
	@Value("${fileshare}")
	String fileshare;
	
	
	@Autowired
	HttpServletRequest request;
	@Autowired
	HttpServletResponse response;
	
	@GetMapping("/login")
	public String login()
	{
		return "login";
	}
	
	
	@PostMapping("/login")
	public String loginPost() {
	System.out.println("login");
	return "index";
	
//	    String username = request.getParameter("username");
//	    String password =  request.getParameter("password");
//	    if (username == null || username.isEmpty() || password == null || password.isEmpty()  ) {
//	      return "redirect:/login?error";
//	    }
//	    
//	    System.out.println("login");
//	    
//
//	    User userDetail = (User) new User("1", "1", null);
//	    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetail, null,
//	        userDetail.getAuthorities());
//	    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//	    SecurityContextHolder.getContext().setAuthentication(authentication);
//	    return "redirect:/home";
	  }
}
