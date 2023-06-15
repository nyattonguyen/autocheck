package com.autocheck.hello.model;

public class DiemdanhQrKey {
	String key;
	String qr;

	public DiemdanhQrKey() {}
	

	public DiemdanhQrKey(String key, String qr) {
		
		this.key = key;
		this.qr = qr;
	}


	public String getQr() {
		return qr;
	}


	public void setQr(String qr) {
		this.qr = qr;
	}


	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}
	
}
