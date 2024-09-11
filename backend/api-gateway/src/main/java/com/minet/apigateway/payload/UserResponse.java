package com.minet.apigateway.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse {
    private Integer id;
    private String fullName;
    private String email;
    private double balance;
}
