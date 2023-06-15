package com.autocheck.hello.model;


import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.auth.oauth2.TokenResponse;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.SheetsScopes;
import com.google.api.services.sheets.v4.model.BatchUpdateSpreadsheetRequest;
import com.google.api.services.sheets.v4.model.CellData;
import com.google.api.services.sheets.v4.model.CellFormat;
import com.google.api.services.sheets.v4.model.Color;
import com.google.api.services.sheets.v4.model.DuplicateSheetRequest;
import com.google.api.services.sheets.v4.model.GridRange;
import com.google.api.services.sheets.v4.model.PointStyle;
import com.google.api.services.sheets.v4.model.RepeatCellRequest;
import com.google.api.services.sheets.v4.model.Request;
import com.google.api.services.sheets.v4.model.Spreadsheet;
import com.google.api.services.sheets.v4.model.SpreadsheetProperties;
import com.google.api.services.sheets.v4.model.UpdateCellsRequest;
import com.google.api.services.sheets.v4.model.UpdateValuesResponse;
import com.google.api.services.sheets.v4.model.ValueRange;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import com.google.api.client.googleapis.auth.oauth2.GoogleRefreshTokenRequest;


public class ExcelModel {

	private static final String APPLICATION_NAME = "autocheck";
	  private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
	  private static final String TOKENS_DIRECTORY_PATH = "tokens";

	  /**
	   * Global instance of the scopes required by this quickstart.
	   * If modifying these scopes, delete your previously saved tokens/ folder.
	   */
	  private static final List<String> SCOPES =
	      Collections.singletonList(SheetsScopes.SPREADSHEETS);
	  private static String CREDENTIALS_FILE_PATH = "/credentials.json";
	  private Sheets service = null;
	  public ExcelModel(String file)
	  {
		  this.CREDENTIALS_FILE_PATH = "/" +file;
		  //System.out.print("file" + file);
	  }

	  /**
	   * Creates an authorized Credential object.
	   *
	   * @param HTTP_TRANSPORT The network HTTP Transport.
	   * @return An authorized Credential object.
	   * @throws IOException If the credentials.json file cannot be found.
	   */
	  public static String getNewToken(String refreshToken, String clientId, String clientSecret) throws IOException {
          ArrayList<String> scopes = new ArrayList<>();
  
          //scopes.add(CalendarScopes.CALENDAR);
  
          TokenResponse tokenResponse = new GoogleRefreshTokenRequest(new NetHttpTransport(), new JacksonFactory(),
                  refreshToken, clientId, clientSecret).setScopes(SCOPES).setGrantType("refresh_token").execute();
  
          return tokenResponse.getAccessToken();
  }
	  private static Credential getCredentials(final NetHttpTransport HTTP_TRANSPORT)
	      throws IOException {
	    // Load client secrets.
	    InputStream in = ExcelModel.class.getResourceAsStream(CREDENTIALS_FILE_PATH);
	    if (in == null) {
	      throw new FileNotFoundException("Resource not found: " + CREDENTIALS_FILE_PATH);
	    }
	    GoogleClientSecrets clientSecrets =
	        GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));
	    String clientId = clientSecrets.getDetails().getClientId();
        String clientSecret = clientSecrets.getDetails().getClientSecret();
        
	   
	    // Build flow and trigger user authorization request.
	    GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
	        HTTP_TRANSPORT, JSON_FACTORY, clientId,clientSecret , SCOPES)
	        .setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
	        .setAccessType("offline")
	        .setApprovalPrompt("force")
	        .build();
	   
	    LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();
	    return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
	  }
	  public void run() throws GeneralSecurityException, IOException
	  {
		  final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
		    //final String spreadsheetId = "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms";
		    //final String range = "Class Data!A2:E";
		    this.service =
		        new Sheets.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
		            .setApplicationName(APPLICATION_NAME)
		            
		            .build();
		    
	  }
	  public boolean readDulieu(Mon mon, Sinhvien sv) throws GeneralSecurityException, IOException
	  {
		  
		    final String spreadsheetId = mon.getExcel();
		    
		   
		    final String range = "Sheet1!A2:ZZ";
		    ValueRange response = service.spreadsheets().values()
		        .get(spreadsheetId, range)
		        .execute();
		    List<List<Object>> values = response.getValues();
		    String d = "";
		    if (values == null || values.isEmpty()) {
		      System.out.println("No data found.");
		      List<Object> sve = new ArrayList<>();
		      sve.add("1");
		      sve.add(sv.getMaso());
		      sve.add(sv.getHovaTen().get(0));
		      sve.add(sv.getHovaTen().get(1));
		      sve.add(sv.getLop());
		      for(int i= 0; i <mon.getBuoihientai(); i++ )
		      {
		    	  if(i == mon.getBuoihientai() -1)
		    	  sve.add("o");
		    	  else
		    		  sve.add("");
		      }
		      writeExcel(mon.getExcel(), 2, sve);
		    } else {
		    	int i = 2;
		      for (List row : values) {
		        // Print columns A and E, which correspond to indices 0 and 4.
		        //System.out.printf("%s, %s\n", row.get(0), row.get(4));
		        d += row.get(0);
		        if(row.get(1).equals(sv.getMaso()))
		        { 
		        while(row.size() -1 < mon.getBuoihientai() + 4)
		        {
		        	row.add("");
		        }
		        row.set(mon.getBuoihientai() + 4, "o");
		        System.out.println(row.toString());
		        writeExcel(mon.getExcel(), i, row);
		        return false;
		        }
		        i++;
		      }
		      
		      List<Object> sve = new ArrayList<>();
		      sve.add(i);
		      sve.add(sv.getMaso());
		      sve.add(sv.getHovaTen().get(0));
		      sve.add(sv.getHovaTen().get(1));
		      sve.add(sv.getLop());
		      for(int j= 0; j <mon.getBuoihientai(); j++ )
		      {
		    	  if(j == mon.getBuoihientai() -1)
		    	  sve.add("o");
		    	  else
		    		  sve.add("");
		      }
		      writeExcel(mon.getExcel(), i, sve);
		    }
		    
		    return true;
		    
	  }
	  public String createMau(String ten, int tongBuoi) throws IOException
	  {
		  String id = createExcel(ten, tongBuoi);
		  //String id = ten;
		  ArrayList<String> buoi = new ArrayList<String>();
		  buoi.add("STT");
		  buoi.add("MSSV");
		  buoi.add("Họ");
		  buoi.add("Tên");
		  buoi.add("Lớp");
		  for(int i =0; i < tongBuoi; i++)
		  {
			  buoi.add("Buổi " + (i+1));
		  }
		  List<List<Object>> values = Arrays.asList(
			        Arrays.asList(
			                buoi.toArray()
			        )
			);
		  //System.out.println(values.get(0));
		  ValueRange body = new ValueRange()
			        .setValues(values);
			String range = "A1";
			UpdateValuesResponse result =
			        service.spreadsheets().values().update(id, range , body)
			                .setValueInputOption("USER_ENTERED")
			                .execute();
			System.out.printf("%d cells updated.", result.getUpdatedCells());
			
			return id;
		  
	  }
	  
	  public String createExcel(String ten, int buoi) throws IOException
	  {
		  //ten = "Diem danh";
		  Spreadsheet spreadsheet = new Spreadsheet()
			        .setProperties(new SpreadsheetProperties()
			                .setTitle(ten));
			spreadsheet = service.spreadsheets().create(spreadsheet)
			        .setFields("spreadsheetId")
			        .execute();
			System.out.println("Spreadsheet ID: " + spreadsheet.getSpreadsheetId());
			String id = spreadsheet.getSpreadsheetId();
			return id;
	  }
	  public void writeExcel(String id, int r, List row) throws IOException
	  {
		  String range = "Sheet1!A"+r;
		  List<List<Object>> values = Arrays.asList(row);
		  
		  
//		  List<List<Object>> values = Arrays.asList(
//			        Arrays.asList(
//			                "1", "2", "3"
//			        ), 
//			        Arrays.asList(
//			                "4", "5", "6"
//			        ), 
//			          Arrays.asList(
//			                "7", "8", "9"
//			        )
//			);
			ValueRange body = new ValueRange()
			        .setValues(values);
			UpdateValuesResponse result =
			        service.spreadsheets().values().update(id, range, body)
			                .setValueInputOption("USER_ENTERED")
			                .execute();
			System.out.printf("%d cells updated.", result.getUpdatedCells());
	  }

	  /**
	   * Prints the names and majors of students in a sample spreadsheet:
	   * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
	   */
	  
}
