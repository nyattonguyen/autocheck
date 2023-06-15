package com.autocheck.hello.controller;
import java.io.File;
import java.io.IOException;
import java.net.URI;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.ContentBody;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
public class Giangvien {

	

		public static void  main(String[] arg) throws ClientProtocolException, IOException
		{
//			HttpClient httpclient = new DefaultHttpClient();
//			String url = "http://localhost:9090/giangvien/create";
//			//System.out.println("p");
//			HttpPost httpPost = new HttpPost(url);
//
//			//File image = null; 
//			//FileBody fileBody = new FileBody(image);
//			MultipartEntityBuilder builder = MultipartEntityBuilder.create()
//			                         .setMode(HttpMultipartMode.BROWSER_COMPATIBLE)
//			                         .addTextBody("hoten", "ho ten giang vien");
//			                         //.addPart("my_file", fileBody);
//			HttpEntity multiPartEntity = builder.build();
//
//		
//	
//			httpPost.setEntity(multiPartEntity);
//			
//
//			HttpResponse response = httpclient.execute(httpPost);
//			HttpEntity entity = response.getEntity();
//			String responseString = EntityUtils.toString(entity, "UTF-8");
//			System.out.println(responseString);
			
		}
	

	
}
