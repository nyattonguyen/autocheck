package com.autocheck.hello.model;

import java.util.Date;
import java.util.Random;

public class DiemdanhKey {
	String key1;
	String key2;
	String qrfile;
	Mon mon;
	Location lc;
	Date date;
	public Location getLc() {
		return lc;
	}
	public void setLc(Location lc) {
		this.lc = lc;
	}
	String filebasefile;
	public DiemdanhKey(String firebase)
	{
		filebasefile = firebase;
	}
	public String create() {
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
	
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getKey1() {
		return key1;
	}
	public void setKey1(String key1) {
		this.key1 = key1;
	}
	public String getKey2() {
		return key2;
	}
	public void setKey2(String key2) {
		this.key2 = key2;
	}
	public Mon getMon() {
		return mon;
	}
	public void setMon(Mon mon) {
		this.mon = mon;
	}
	public String getFilebasefile() {
		return filebasefile;
	}
	public void setFilebasefile(String filebasefile) {
		this.filebasefile = filebasefile;
	}
	public String getQrfile() {
		return qrfile;
	}
	public void setQrfile(String qrfile) {
		this.qrfile = qrfile;
	}

}
