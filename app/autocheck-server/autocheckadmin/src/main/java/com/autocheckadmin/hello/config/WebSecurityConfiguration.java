package com.autocheckadmin.hello.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

import com.autocheckadmin.hello.service.*;



@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter  {

	@Value("${firebasefile}")
	String firebasefile2;
//	 @Autowired
//	 MyUserDetailsService user;
	
		//@Bean
	    public BCryptPasswordEncoder passwordEncoder() {
	        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
	        return bCryptPasswordEncoder;
	    }
	 
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	http.authorizeRequests().antMatchers( "/login", "/logout", "/assets/**").permitAll()
    	.anyRequest().authenticated()
    	.and().csrf().disable()
    	//.and()
        .formLogin()
                .loginPage("/login")
                .loginProcessingUrl("/login") 
                .defaultSuccessUrl("/", true)
                .failureUrl("/login?error=true")
                .usernameParameter("username")
                .passwordParameter("password")
    
                .and().logout().logoutUrl("/logout").logoutSuccessUrl("/index");
               

       
        http.rememberMe().key("uniqueAndSecret").tokenValiditySeconds(2592000);
    }
    @Autowired
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
    	
    	auth.inMemoryAuthentication()
        
        .withUser("admin").password("{noop}admin").roles("ADMIN");
    	
    	
        
    }
    
    
    
    
    
}