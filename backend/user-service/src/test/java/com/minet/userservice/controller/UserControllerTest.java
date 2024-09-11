package com.minet.userservice.controller;


import com.minet.userservice.dto.request.AuthenticationRequest;
import com.minet.userservice.dto.request.UserRequest;
import com.minet.userservice.dto.response.ApiErrorResponse;
import com.minet.userservice.dto.TokenDTO;
import com.minet.userservice.dto.response.UserResponse;
import com.minet.userservice.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class UserControllerTest {

    @Mock
    private UserService userService;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private UserController userController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void givenAuthenticationRequest_whenUserIsValid_thenLoginUser() {
        // Set up test case
        AuthenticationRequest authenticationRequest = new AuthenticationRequest();
        TokenDTO token = new TokenDTO("dummyToken");
        when(userService.loginUser(authenticationRequest)).thenReturn(token);

        // Perform the login operation
        ResponseEntity<TokenDTO> response = userController.loginUser(authenticationRequest);

        // Verify that the response contains the expected token and HTTP status
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(token, response.getBody());
        verify(userService).loginUser(authenticationRequest);
    }

    @Test
    void givenUserRequest_whenUserNotExist_thenCreateUser() {
        // Set up test case
        UserRequest userRequest = new UserRequest();
        UserResponse userResponse = new UserResponse();
        when(userService.saveUser(userRequest)).thenReturn(userResponse);

        // Perform the save user operation
        ResponseEntity<UserResponse> response = userController.saveUser(userRequest);

        // Verify that the response matches the expected user response
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(userResponse, response.getBody());
        verify(userService).saveUser(userRequest);
    }

    @Test
    void givenUserId_whenUserIdIsValid_thenGetUserById() {
        // Set up test case
        Integer userId = 1;
        UserResponse userResponse = new UserResponse();
        when(userService.getUserById(userId)).thenReturn(userResponse);

        // Perform the get user by ID operation
        UserResponse response = userController.getUserById(userId);

        // Verify that the response matches the expected user response
        assertEquals(userResponse, response);
        verify(userService).getUserById(userId);
    }

    @Test
    void givenUserEmail_whenUserEmailExists_thenGetUserByEmail() {
        // Set up test case
        String email = "test@example.com";
        UserResponse userResponse = new UserResponse();
        when(userService.getUserByEmail(email)).thenReturn(userResponse);

        // Perform the get user by email operation
        UserResponse response = userController.getUserByEmail(email);

        // Verify that the response matches the expected user response
        assertEquals(userResponse, response);
        verify(userService).getUserByEmail(email);
    }

    @Test
    void givenUserRequest_whenUserIsValid_thenUpdateUser() {
        // Set up test case
        UserRequest userRequest = new UserRequest();
        UserResponse userResponse = new UserResponse();
        when(userService.updateUser(userRequest)).thenReturn(userResponse);

        // Perform the update user operation
        UserResponse response = userController.updateUser(userRequest);

        // Verify that the response matches the expected user response
        assertEquals(userResponse, response);
        verify(userService).updateUser(userRequest);
    }

    @Test
    void givenTokenRequest_whenTokenRequestValid_thenValidateToken() {
        // Set up test case
        TokenDTO tokenRequest = new TokenDTO("dummyToken");
        ApiErrorResponse apiResponse = new ApiErrorResponse(HttpStatus.OK.value(), HttpStatus.OK.name(),"Token is valid");
        doNothing().when(userService).validateToken(tokenRequest);

        // Perform the validate token operation
        ResponseEntity<ApiErrorResponse> response = userController.validateToken(tokenRequest);

        // Verify that the response contains the expected API response and HTTP status
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(apiResponse.getMessage(), response.getBody().getMessage());
        assertEquals(apiResponse.getStatus(), response.getBody().getStatus());
        assertEquals(apiResponse.getTitle(), response.getBody().getTitle());
        verify(userService).validateToken(tokenRequest);
    }
}
