package com.autocheck.hello.config;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configurable
@EnableWebMvc
public class ConfigWeb implements  WebMvcConfigurer {
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {  
        // I tried these many combinations separately.

        //registry.addResourceHandler("/asset/**");
        //.addResourceLocations("/**");
     }

}
