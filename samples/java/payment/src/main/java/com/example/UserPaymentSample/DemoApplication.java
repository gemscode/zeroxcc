package com.example.UserPaymentSample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }

  public static String show(String value) {
    return " THIS IS COOL";
  }

  public static String test() {
    return "test"; 
  }

}
