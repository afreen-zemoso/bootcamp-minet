package com.minet.userservice.service;

import com.minet.userservice.dto.request.AuthenticationRequest;
import com.minet.userservice.dto.request.UserRequest;
import com.minet.userservice.dto.TokenDTO;
import com.minet.userservice.dto.response.UserResponse;

public interface UserService {
    // save user
    UserResponse saveUser(UserRequest user);

    // read user by id
    UserResponse getUserById(Integer userId);

    // read user by email
    UserResponse getUserByEmail(String email);

    // update user
    UserResponse updateUser(UserRequest user);

    TokenDTO loginUser(AuthenticationRequest authenticationRequest);

    void validateToken(TokenDTO tokenRequest);
}
