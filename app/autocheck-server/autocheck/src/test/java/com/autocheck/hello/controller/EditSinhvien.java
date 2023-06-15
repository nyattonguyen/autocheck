package com.autocheck.hello.controller;



import java.io.File;
import java.io.IOException;
import java.net.URI;

import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.impl.client.DefaultHttpClient;

public class EditSinhvien {

	public static void  main(String[] arg) throws ClientProtocolException, IOException
	{
		HttpClient httpclient = new DefaultHttpClient();
		String url = "http://localhost:9090/editSinhvien";
		//System.out.println("p");
		HttpPost httpPost = new HttpPost(url);

		File uploadFile = new File("C:/Users/ProjectWork/Downloads/6-cach-tim-kiem-bang-hinh-anh-tren-google-cuc-ky-don-gian-03.jpg");;
		FileBody uploadFilePart = new FileBody(uploadFile);
		MultipartEntity reqEntity = new MultipartEntity();
		reqEntity.addPart("file", uploadFilePart);
		httpPost.setEntity(reqEntity);

		HttpResponse response = httpclient.execute(httpPost);
		System.out.println(response.toString());
		
	}
}
