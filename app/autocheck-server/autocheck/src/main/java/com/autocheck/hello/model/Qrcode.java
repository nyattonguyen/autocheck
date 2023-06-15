package com.autocheck.hello.model;

import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Path;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

public class Qrcode {

	public Qrcode()
	{}
	
	public String create(String str,String key) throws WriterException, IOException
	{
	    String data = str;
	    QRCodeWriter qrCodeWriter = new QRCodeWriter();
	    BitMatrix matrix = qrCodeWriter.encode(data, BarcodeFormat.QR_CODE, 800, 800);

	    // Write to file image
	    String file = "qr/" +key+".png";
	    String outputFile = "src/main/resources/static/"+file;
	    Path path = FileSystems.getDefault().getPath(outputFile);
	    MatrixToImageWriter.writeToPath(matrix, "PNG", path);
	    return file;
	}
}
