package com.springboot.Exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionController {
	Logger logger=LoggerFactory.getLogger(ExceptionController.class);
	
	@ExceptionHandler(value = UserNotFoundException.class)
	   public ResponseEntity<?> exception(UserNotFoundException exception) {
		logger.debug("Exception Handling");
	      return new ResponseEntity<>(exception.getMessage(), HttpStatus.NOT_FOUND);
	   }

}
