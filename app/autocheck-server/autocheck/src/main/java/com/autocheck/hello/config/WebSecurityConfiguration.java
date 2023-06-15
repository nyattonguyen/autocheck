package com.autocheck.hello.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;

import com.autocheck.hello.service.*;

@Configuration
@EnableWebSecurity
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter  {

	@Value("${firebasefile}")
	String firebasefile2;
//	 @Autowired
//	 MyUserDetailsService user;
	
	// @Bean
	    public BCryptPasswordEncoder passwordEncoder() {
	        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
	        return bCryptPasswordEncoder;
	    }
	 
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	http.authorizeRequests().antMatchers("/sinhvien/**", "/login", "/logout", "/asset/**", "/qr/*").permitAll()
    	.anyRequest().authenticated()
    	.and().csrf().disable()
    	//.and()
        .formLogin()
                .loginPage("/login")
                .loginProcessingUrl("/login") 
                .defaultSuccessUrl("/")
                .failureUrl("/login?error=true")
                .usernameParameter("username")
                .passwordParameter("password")
    
                .and().logout().logoutUrl("/logout").logoutSuccessUrl("/home").deleteCookies("JSESSIONID")
                .invalidateHttpSession(true);
               

       
        http.rememberMe().key("uniqueAndSecret").tokenValiditySeconds(2592000);
    }
    @Autowired
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
    	//System.out.println();
    	MyUserDetailsService user = new MyUserDetailsService(firebasefile2);
     auth.userDetailsService(user).passwordEncoder(NoOpPasswordEncoder.getInstance());
    //  auth.inMemoryAuthentication().passwordEncoder(NoOpPasswordEncoder.getInstance()).withUser("kai").password("123456").roles("USER");
    }
    
   
    
    
}