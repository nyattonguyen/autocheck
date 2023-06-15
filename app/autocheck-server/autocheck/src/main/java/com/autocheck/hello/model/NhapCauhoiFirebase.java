package com.autocheck.hello.model;

import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.concurrent.ExecutionException;

import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.gson.Gson;

public class NhapCauhoiFirebase {

	String filebasefile;
	Giangvien gv;
	
	public NhapCauhoiFirebase(String firebase, Giangvien g) {
		filebasefile = firebase;
		gv = g;
	}
	public String getLuu(String id)
	{
		String file = "/qr/" +id+".xlsx";
	    String outputFile = "src/main/resources/static"+file;
	    Path path = FileSystems.getDefault().getPath(outputFile);
	    return path.toAbsolutePath().toString();
	}
	public void nhap(String id) throws Exception
	{
		FirebaseStatic.setFirebasefile(filebasefile);
		FirebaseModel file = FirebaseStatic.getFirebase();
		CauhoiNhapExcel nhapexcel = new CauhoiNhapExcel(getLuu(id), id);
		nhapexcel.nhap();
		Baitap bt = nhapexcel.getBt();
		ArrayList<Cauhoi> chs = nhapexcel.getCauhoi();
		BaitapFirebase btf = new BaitapFirebase(filebasefile, gv);
		Baitap b = btf.create(bt, id);
		btf.createCauhoi(chs, b.getId());
		
	}
	
}
