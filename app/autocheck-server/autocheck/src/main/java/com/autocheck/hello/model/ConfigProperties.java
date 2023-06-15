package com.autocheck.hello.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;

@Configuration
public class ConfigProperties  {

	@Value("${firebasefile}")
    private String firebasefile;

   // getting the value from that key which you set in application.properties
    @Bean
    public String getFirebasefile() {
        return firebasefile;
    }
}