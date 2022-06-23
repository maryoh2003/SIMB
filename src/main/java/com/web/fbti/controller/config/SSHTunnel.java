package com.web.fbti.controller.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;


@Configuration
public class SSHTunnel {

	@Value("${spring.datasource.url}")
	private String SSH_URL;
	
	@Value("${spring.datasource.driver-class-name}")
	private String DRIVER_NAME;
	
	@Value("${ssh.host}")
	private String SSH_HOST;
	
	@Value("${spring.datasource.username}")
	private String SSH_USER;
	
	@Value("${spring.datasource.password}")
	private String SSH_PW;

	@Value("${ssh.port}")
	private int SSH_PORT;
	
	@Value("${local.host}")
	private String LOC_HOST;
	
	@Value("${local.db.port}")
	private int LOC_PORT;
	
	@Value("${remote.db.port}")
	private int REMORT_PORT;
	
	@Profile("!server")
	@Bean    
	@ConfigurationProperties(prefix = "spring.datasource")
	public SSHConnection sshConnection() {
		SSHConnection conn = new SSHConnection(SSH_URL, DRIVER_NAME, SSH_HOST, SSH_USER, SSH_PW, SSH_PORT, LOC_HOST, LOC_PORT, REMORT_PORT);
		conn.init(arg -> {
			if(!arg) {
				System.out.println("!!!!! SSH 터널링 실패 !!!!! 프로그램을 종료");
                System.exit(0);
			}
			else {
				System.out.println("!!!!! SSH 터널링 성공 !!!!!");
			}
		});
		return conn;
	}
}
