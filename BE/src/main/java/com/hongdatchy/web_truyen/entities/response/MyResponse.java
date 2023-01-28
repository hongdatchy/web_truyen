package com.hongdatchy.web_truyen.entities.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MyResponse {

	private String message;
	private Object data;
	
	public static MyResponse success(Object data){
        return new MyResponse("success", data);
    }

    public static MyResponse fail(String message){
        return new MyResponse("fail", message);
    }
}
