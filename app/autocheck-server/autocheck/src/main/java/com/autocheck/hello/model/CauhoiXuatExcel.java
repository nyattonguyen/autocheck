package com.autocheck.hello.model;



import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import  org.apache.poi.hssf.usermodel.HSSFSheet;  
import  org.apache.poi.hssf.usermodel.HSSFRow;  

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.BuiltinFormats;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.DataFormat;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellReference;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
 
public class CauhoiXuatExcel {
    ArrayList<Cauhoi> cauhoi;
    Baitap bt;
    ArrayList<BainopSinhvien> bainop;
    private static CellStyle cellStyleFormatNumber = null;
     
    public CauhoiXuatExcel(Baitap b, ArrayList<Cauhoi> ch, ArrayList<BainopSinhvien> bn)
    {
    	bt =b;
    	cauhoi = ch;
    	bainop =bn;
    }
    
 
    public String xuat() throws IOException
    {
    	String file = "/qr/" +bt.getId()+".xlsx";
	    String outputFile = "src/main/resources/static"+file;
	    writeExcel(outputFile);
	    return file;
    }
   
    public  void writeExcel(String file) throws IOException {
        Workbook workbook = getWorkbook(file);
        Sheet sheet = workbook.createSheet("Cau hoi");
        write(sheet);
        createOutputFile(workbook, file);
        System.out.println("Done!!!");
    }
 
    private  Workbook getWorkbook(String excelFilePath) throws IOException {
        Workbook workbook = null;
 
        if (excelFilePath.endsWith("xlsx")) {
            workbook = new XSSFWorkbook();
        } else if (excelFilePath.endsWith("xls")) {
            workbook = new HSSFWorkbook();
        } else {
            throw new IllegalArgumentException("The specified file is not Excel file");
        }
 
        return workbook;
    }
 
    private  void write(Sheet sheet) {
        CellStyle cellStyle = createStyleForHeader(sheet);
        Row row = sheet.createRow(0);
        Cell cell = row.createCell(0);
        cell.setCellStyle(cellStyle);
        cell.setCellValue("Tiêu đề: " + bt.getTieude());
        Row row1 = sheet.createRow(1);
        Cell cell1 = row1.createCell(0);
        cell1.setCellStyle(cellStyle);
        cell1.setCellValue("Mô tả: " + bt.getMota());
        Row row2 = sheet.createRow(2);
        Cell cell2 = row2.createCell(0);
        cell2.setCellValue("");
        int r = 2;
        int n = 3;
        int index = 1;
        for(Cauhoi c: cauhoi)
        {
        	row2.createCell(r).setCellValue("Câu " + index +":" + c.getNoidung());
        	index++;
        	r++;
        }
        Map<String, List<BainopSinhvien>> bg =
        	    bainop.stream().collect(Collectors.groupingBy(w -> w.getMasv()));
        for (Map.Entry<String, List<BainopSinhvien>> p : bg.entrySet()) {
        	Row rch = sheet.createRow(n);
        	n++;
        	writeCautraloi(rch,p.getKey(), p.getValue());
        }
        
    }
    public void writeCautraloi(Row r, String m, List<BainopSinhvien> b)
    {
    	r.createCell(0).setCellValue(b.get(0).getMasv());
    	r.createCell(1).setCellValue(b.get(0).getHoten());
    	
    	int i= 2;
    	for(BainopSinhvien n : b)
    	{
    		
    		r.createCell(i).setCellValue(String.join(", ", n.getDapansinhvien()));
    		i++;
    	}
    	
    	
    }
    
 
    private  CellStyle createStyleForHeader(Sheet sheet) {
        Font font = sheet.getWorkbook().createFont();
        font.setFontName("Times New Roman"); 
        font.setBold(true);
        font.setFontHeightInPoints((short) 14); // font size
        //font.setColor(IndexedColors.WHITE.getIndex()); // text color
        CellStyle cellStyle = sheet.getWorkbook().createCellStyle();
        cellStyle.setFont(font);
        //cellStyle.setFillForegroundColor(IndexedColors.BLUE.getIndex());
        //cellStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        //cellStyle.setBorderBottom(BorderStyle.THIN);
        return cellStyle;
    }
     
  
     
    private  void autosizeColumn(Sheet sheet, int lastColumn) {
        for (int columnIndex = 0; columnIndex < lastColumn; columnIndex++) {
            sheet.autoSizeColumn(columnIndex);
        }
    }
     
    private  void createOutputFile(Workbook workbook, String excelFilePath) throws IOException {
        try (OutputStream os = new FileOutputStream(excelFilePath)) {
            workbook.write(os);
        }
    }
 
}

