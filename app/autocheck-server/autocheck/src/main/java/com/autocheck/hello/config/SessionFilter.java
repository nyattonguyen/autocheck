package com.autocheck.hello.config;

import java.io.IOException;
import java.util.Arrays;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Component;

import com.autocheck.hello.model.Giangvien;




@Component
public class SessionFilter implements Filter {
    @Override
    public void doFilter(
      ServletRequest request, ServletResponse response, FilterChain chain)
      throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;
        HttpSession session = req.getSession(false);
       
            if (session != null) {
            	Giangvien gv  = (Giangvien) session.getAttribute("giangvien");
            	if(gv != null)
            	{
            		
            	}
            	else
            	{
            	
            	}
            }
            else
            {
            	
            	
            }
        
        chain.doFilter(req, res);
    }
}