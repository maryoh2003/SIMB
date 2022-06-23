package com.web.fbti.controller;

import javax.annotation.PreDestroy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

import com.web.fbti.controller.config.SSHConnection;
import com.web.fbti.controller.config.SSHTunnel;

@Configuration
@SpringBootApplication
@EnableScheduling
@ComponentScan(basePackages = {"com.web.fbti"})
public class ApplicationLauncher implements CommandLineRunner {
	
	@Autowired(required = false)
	SSHConnection sshConnection;
    
    public static void main(String[] args) {
        SpringApplication.run(ApplicationLauncher.class, args);
    }
    
    @PreDestroy
    public void end() {
    	try {
    		if (sshConnection != null)
    		sshConnection.shutdown();
    	}
    	catch (Exception e) {
    		e.printStackTrace();
		}
    }

	@Override
	public void run(String... args) throws Exception {
		if(sshConnection == null)
			sshConnection = new SSHTunnel().sshConnection() ;
	}
}