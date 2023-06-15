package com.autocheck.hello.model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

@Controller
public class FirebaseStatic  {

	

	
	static String firebasefile;
	
	
	static String excelfile;
	
	static String fileshare;
	
	public static FirebaseModel firebase = null;
	public static ExcelModel excel = null;
	public static FileShare share = null;
	public FirebaseStatic() {
	}
	public static String getFirebasefile() {
		return firebasefile;
	}
	public static void setFirebasefile(String firebasefile2) {
		FirebaseStatic.firebasefile = firebasefile2;
	}
	public static String getExcelfile() {
		return excelfile;
	}
	public static void setExcelfile(String excelfile) {
		FirebaseStatic.excelfile = excelfile;
	}
	public static String getFileshare() {
		return fileshare;
	}
	public static void setFileshare(String fileshare) {
		FirebaseStatic.fileshare = fileshare;
	}
	public static void setFirebase(FirebaseModel firebase) {
		FirebaseStatic.firebase = firebase;
	}
	
	static public  FirebaseModel getFirebase() throws Exception
	{
		System.out.print("filebase" + firebasefile);
		if(firebase == null)
		{
			firebase = new FirebaseModel(firebasefile);
		}
		return firebase;
	}
	static public  ExcelModel getExcel() throws Exception
	{
		if(excel == null)
		{
			excel = new ExcelModel(excelfile);
			excel.run();
		}
		return excel;
	}
	static public  FileShare getShare() throws Exception
	{
		if(share == null)
		{
			share = new FileShare(fileshare);
			share.run();
		}
		return share;
	}
}
