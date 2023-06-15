package com.autocheck.hello.service;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.autocheck.hello.model.Giangvien;
import com.autocheck.hello.model.GiangvienFirebase;

@Service
public class MyUserDetailsService implements UserDetailsService {

	String filebasename;
	public MyUserDetailsService(String firebase)
	{
		filebasename = firebase;
	}

    @Override
    public UserDetails loadUserByUsername(String username) {
    	
    	
    	GiangvienFirebase gv = new GiangvienFirebase(filebasename);
        Giangvien user = null;
		try {
			user = gv.dangnhap(username);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        else
        {
        	List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();  
            SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_TEACHER");
            authorities.add(authority);
        	UserDetails u = (UserDetails) new User(username, user.getPassword(), authorities);
        	HttpSession s = session();
        	user.setPassword("");
        	s.setAttribute("giangvien", user);
        	return u;
        }
    }
    public static HttpSession session() {
        ServletRequestAttributes attr = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        return attr.getRequest().getSession(true); // true == allow create
    }
}