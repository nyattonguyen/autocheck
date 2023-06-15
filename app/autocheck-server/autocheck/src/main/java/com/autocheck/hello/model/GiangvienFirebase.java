package com.autocheck.hello.model;

import java.nio.charset.Charset;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ExecutionException;

import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.gson.Gson;

public class GiangvienFirebase {

	String filebasefile;
	
	public GiangvienFirebase(String firebase) {
		filebasefile = firebase;
	}
	public Giangvien create(Giangvien gv) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		List<QueryDocumentSnapshot> documents = file.getAll("giangvien");
		for (QueryDocumentSnapshot document : documents) {
			Giangvien s = document.toObject(Giangvien.class);
			if(s.getEmail().equals(gv.getEmail()))
			{
				return null;
			}
		
		}
		
		String id = file.create("giangvien", gv);
		gv.setId(id);
		return gv;
	}
	public Giangvien capnhatthongtin(Giangvien gv) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		DocumentSnapshot d = file.get("giangvien", gv.getId());
		Giangvien s = d.toObject(Giangvien.class);
		gv.setId(d.getId());
		gv.setPassword(s.getPassword());
		update(gv);
		gv.setPassword("");
		return gv;
	}
	public Giangvien thaydoimatkhau(Giangvien gv, DoiMatkhau mk) throws Exception
	{
		
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		DocumentSnapshot d = file.get("giangvien", gv.getId());
		Giangvien s = d.toObject(Giangvien.class);
		s.setId(s.getId());
		if(mk.getMatkhaumoi().equals(mk.getNhaplaimatkhaumoi()))
		{
		if(s.getPassword().equals(mk.getMatkhaucu()))
		{
			s.setPassword(mk.getMatkhaumoi());
			update(s);
			s.setPassword("");
			return s;
		}
		}
		return null;
	}
	public Giangvien update(Giangvien gv) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		String d = file.update("giangvien", gv, gv.getId());
		
		//Giangvien s = d.toObject(Giangvien.class);
		
		return gv;
	}
	
	public Giangvien get(String id) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		DocumentSnapshot d = file.get("giangvien", id);
		
		Giangvien s = d.toObject(Giangvien.class);
		s.setId(d.getId());
		return s;
	}
	public ArrayList<Giangvien> getAll() throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		List<QueryDocumentSnapshot> documents = file.getAll("giangvien");
		ArrayList<Giangvien> gv = new ArrayList<Giangvien>();
		
		for (QueryDocumentSnapshot document : documents) {
			Giangvien s = document.toObject(Giangvien.class);
			s.setId(document.getId());
			gv.add(s);
		}
		return gv;
	}
	public Giangvien resetMatkhau(String id) throws Exception
	{
		Giangvien gv = get(id);
		gv.setPassword(reset());
		update(gv);
		return gv;
	}
	public String vohieuhoa(String id, boolean gt) throws Exception
	{
		Giangvien gv = get(id);
		gv.setVohieuhoa(gt);
		update(gv);
		return null;
	}
	public String reset() {
	    int leftLimit = 48; 
	    int rightLimit = 122; 
	    int targetStringLength = 10;
	    Random random = new Random();

	    String generatedString = random.ints(leftLimit, rightLimit + 1)
	      .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
	      .limit(targetStringLength)
	      .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
	      .toString();

	    return generatedString;
	}
	public Giangvien dangnhap(String email) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		List<QueryDocumentSnapshot> documents = file.getAll("giangvien");
		for (QueryDocumentSnapshot document : documents) {
			Giangvien s = document.toObject(Giangvien.class);
			s.setId(document.getId());
			if(s.getEmail().equals(email))
			{
				if(s.isVohieuhoa())
					return null;
				return s;
			}
		
		}
		return null;
	}
	
}
