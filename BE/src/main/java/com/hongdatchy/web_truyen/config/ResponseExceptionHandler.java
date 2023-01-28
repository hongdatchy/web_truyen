package com.hongdatchy.web_truyen.config;

import com.hongdatchy.web_truyen.entities.response.MyResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;



@ControllerAdvice
public class ResponseExceptionHandler extends ResponseEntityExceptionHandler {
	private static final Logger LOG = LoggerFactory.getLogger(ResponseExceptionHandler.class);

	@ExceptionHandler({ Exception.class })
	public ResponseEntity<Object> globalExceptionHandler(Exception ex, WebRequest request) {
		String msg = ex.getMessage();
		LOG.error(msg);
		return ResponseEntity.ok(MyResponse.fail(msg));
	}

//	@Override
//	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
//			HttpHeaders headers, HttpStatus status, WebRequest request) {
//		String msg = ex.getMessage();
//		LOG.error(msg);
//		return new ResponseEntity<>(msg, HttpStatus.BAD_REQUEST);
//	}
	
	
	@ExceptionHandler({ BadCredentialsException.class })
    protected ResponseEntity<Object> handleBadCredentialsException(BadCredentialsException ex) {
        String msg = ex.getMessage();
        LOG.info(msg);
        return ResponseEntity.ok(MyResponse.fail("User hoặc password không hợp lệ"));
    }

}
