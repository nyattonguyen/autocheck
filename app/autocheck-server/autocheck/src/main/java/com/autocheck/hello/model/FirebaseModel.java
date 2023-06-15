package com.autocheck.hello.model;

import java.io.FileInputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.ClassPathResource;

import com.google.api.core.ApiFuture;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.cloud.FirestoreClient;
import com.google.firebase.database.FirebaseDatabase;
public class FirebaseModel {

	
	private String firebasefilepath;
	
	
	FirebaseDatabase defaultDatabase;
	Firestore db = null;
	public FirebaseModel(String file) throws Exception
	{

		
		ClassPathResource res = new ClassPathResource(file);
			FileInputStream serviceAccount =
			  new FileInputStream(res.getFile());
			
			FirebaseOptions options = new FirebaseOptions.Builder()
			  .setCredentials(GoogleCredentials.fromStream(serviceAccount))
			  .setDatabaseUrl("https://autocheck-ef5b7-default-rtdb.firebaseio.com")
			  .build();
			FirebaseApp defaultApp = null;
			if(FirebaseApp.getApps().size() == 0 )
			{
				 defaultApp = FirebaseApp.initializeApp(options);
			}
			
			else
			{
				 defaultApp = FirebaseApp.getInstance();
			}
			FirebaseAuth defaultAuth = FirebaseAuth.getInstance(defaultApp);
			defaultDatabase = FirebaseDatabase.getInstance(defaultApp);
			db = FirestoreClient.getFirestore();
	}
	public <T> String create(String c, T a) throws InterruptedException, ExecutionException
	{
		DocumentReference docRef = db.collection(c).document();
		
		//Sinhvien sv = new Sinhvien();
		//sv.setHoten("ho ten");
		
		ApiFuture<WriteResult> result = docRef.set(a);
		// ...
		// result.get() blocks on response
		System.out.println("Update time : " + result.get().getUpdateTime());
		return docRef.getId();
	}
	public <T> String update(String c, T a, String id) throws InterruptedException, ExecutionException
	{
		DocumentReference docRef = db.collection(c).document(id);
		
		//Sinhvien sv = new Sinhvien();
		//sv.setHoten("ho ten");
		
		ApiFuture<WriteResult> result = docRef.set(a);
		// ...
		// result.get() blocks on response
		System.out.println("Update time : " + result.get().getUpdateTime());
		return docRef.getId();
	}
	public List<QueryDocumentSnapshot>  getAll(String doc) throws InterruptedException, ExecutionException
	{
		// asynchronously retrieve all users
		ApiFuture<QuerySnapshot> query = db.collection(doc).get();
		// ...
		// query.get() blocks on response
		QuerySnapshot querySnapshot = query.get();
		List<QueryDocumentSnapshot> documents = querySnapshot.getDocuments();
		return documents;
		/*
		for (QueryDocumentSnapshot document : documents) {
		  System.out.println("User: " + document.getId());
		  System.out.println("First: " + document.getString("first"));
		  if (document.contains("middle")) {
		    System.out.println("Middle: " + document.getString("middle"));
		  }
		  System.out.println("Last: " + document.getString("last"));
		  System.out.println("Born: " + document.getLong("born"));
		}
		*/
	}
	public DocumentSnapshot get(String doc, String id) throws InterruptedException, ExecutionException
	{
		DocumentReference docRef = db.collection(doc).document(id);
		// asynchronously retrieve the document
		ApiFuture<DocumentSnapshot> future = docRef.get();
		// ...
		// future.get() blocks on response
		DocumentSnapshot document = future.get();
		if (document.exists()) {
			System.out.println("Document data: " + document.getData());
		  
		  return document;
		} else {
		  System.out.println("No such document!");
		}
		return null;
	}
	public void delete(String doc, String id) throws InterruptedException, ExecutionException
	{
		DocumentReference docRef = db.collection(doc).document(id);
		// asynchronously retrieve the document
		ApiFuture<DocumentSnapshot> future = docRef.get();
		// ...
		// future.get() blocks on response
		DocumentSnapshot document = future.get();
		document.getReference().delete();
	}
	
}
