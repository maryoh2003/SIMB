package com.web.fbti.controller.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;
import java.util.function.Consumer;

import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;


public class SSHConnection {

	private String SSH_URL;
    private String DRIVER_NAME;
	private String SSH_HOST;
	private String SSH_USER;
	private String SSH_PW;
    private int SSH_PORT;
	private String LOC_HOST;
	private int LOC_PORT;
	private int REMORT_PORT;
	
	public SSHConnection(
			String sshUrl, 
			String driverName, 
			String sshHost, 
			String sshUser, 
			String sshPw, 
			int sshPort, 
			String locHost, 
			int locPort, 
			int remortPort) {
		
		this.SSH_URL = sshUrl;
		this.DRIVER_NAME = driverName;
		this.SSH_HOST = sshHost;
		this.SSH_USER = sshUser;
		this.SSH_PW = sshPw;
		this.SSH_PORT = sshPort;
		this.LOC_HOST = locHost;
		this.LOC_PORT = locPort;
		this.REMORT_PORT = remortPort;
	}
	

	private Session sshSession;
//	private Connection dbConn;
	
	public SSHConnection init(Consumer<Boolean> arg) {
		try {
			Properties config = new Properties();
			config.put("StrictHostKeyChecking", "no");
			
			JSch jsch = new JSch();
			sshSession = jsch.getSession(SSH_USER, SSH_HOST, SSH_PORT);
			sshSession.setPassword(SSH_PW);
			sshSession.setConfig(config);
			sshSession.connect();
			sshSession.setPortForwardingL(LOC_PORT, LOC_HOST, REMORT_PORT);
			
	        //mysql database connectivity                  
//	        Class.forName(DRIVER_NAME);
//	        dbConn  = DriverManager.getConnection (SSH_URL, SSH_USER, SSH_PW);

			arg.accept(true);
		}
		catch (Exception e) {
			e.printStackTrace();
			arg.accept(false);
		}
		return this;
	}
	
	public void shutdown() throws Exception {
		if (sshSession != null && sshSession.isConnected()) {
			sshSession.disconnect();
		}
	}
}
