package com.autocheck.hello.model;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.batch.BatchRequest;
import com.google.api.client.googleapis.batch.json.JsonBatchCallback;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.googleapis.json.GoogleJsonError;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.HttpHeaders;
import com.google.api.client.http.HttpRequestInitializer;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import com.google.api.services.drive.model.File;
import com.google.api.services.drive.model.FileList;
import com.google.api.services.drive.model.Permission;
import com.google.auth.http.HttpCredentialsAdapter;
import com.google.auth.oauth2.GoogleCredentials;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class FileShare {
	 private static final String APPLICATION_NAME = "Google Drive API Java Quickstart";
	  /**
	   * Global instance of the JSON factory.
	   */
	  private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
	  /**
	   * Directory to store authorization tokens for this application.
	   */
	  private static final String TOKENS_DIRECTORY_PATH = "tokens_file";

	  /**
	   * Global instance of the scopes required by this quickstart.
	   * If modifying these scopes, delete your previously saved tokens/ folder.
	   */
	  private static final List<String> SCOPES =
	      Collections.singletonList(DriveScopes.DRIVE);
	  private static  String CREDENTIALS_FILE_PATH = "/credentials.json";
	  private static Drive service = null;
	  public FileShare(String file)
	  {
		  CREDENTIALS_FILE_PATH = "/"+file;
		  System.out.println(CREDENTIALS_FILE_PATH);
	  }

	  /**
	   * Creates an authorized Credential object.
	   *
	   * @param HTTP_TRANSPORT The network HTTP Transport.
	   * @return An authorized Credential object.
	   * @throws IOException If the credentials.json file cannot be found.
	   */
	  private static Credential getCredentials(final NetHttpTransport HTTP_TRANSPORT)
	      throws IOException {
	    // Load client secrets.
	    InputStream in = FileShare.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
	    if (in == null) {
	      throw new FileNotFoundException("Resource not found: " + CREDENTIALS_FILE_PATH);
	    }
	    GoogleClientSecrets clientSecrets =
	        GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));

	    String clientId = clientSecrets.getDetails().getClientId();
        String clientSecret = clientSecrets.getDetails().getClientSecret();
        
	    // Build flow and trigger user authorization request.
	    GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
	        HTTP_TRANSPORT, JSON_FACTORY, clientId, clientSecret, SCOPES)
	        .setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
	        .setAccessType("offline")
	        .setApprovalPrompt("force")
	        .build();
	    LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();
	    Credential credential = new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
	    //returns an authorized Credential object.
	    return credential;
	  }
	  public  void run() throws IOException, GeneralSecurityException {
		    // Build a new authorized API client service.
		    final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
		    service = new Drive.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
		        .setApplicationName(APPLICATION_NAME)
		        .build();
		  }
	  
	  public void  share(String email, String id) throws IOException
	  {
		  
			    
		  Permission userPermission = new Permission()
			        .setType("user")
			        .setRole("writer");
		  userPermission.setEmailAddress(email);
		  service.permissions().create(id, userPermission).execute();
				
	  }
	  

}
