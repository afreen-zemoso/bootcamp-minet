package com.minet.userservice.controller;

import com.minet.userservice.dto.request.AuthenticationRequest;
import com.minet.userservice.dto.request.UserRequest;
import com.minet.userservice.dto.response.ApiErrorResponse;
import com.minet.userservice.dto.TokenDTO;
import com.minet.userservice.dto.response.UserResponse;
import com.minet.userservice.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private ModelMapper modelMapper;


    @PostMapping("/login")
    public ResponseEntity<TokenDTO> loginUser(@RequestBody AuthenticationRequest authenticationRequest) {

        return new ResponseEntity<>(userService.loginUser(authenticationRequest), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<UserResponse> saveUser(@RequestBody UserRequest userRequest) {
        return new ResponseEntity<>(userService.saveUser(userRequest), HttpStatus.CREATED);
    }

    @GetMapping("/{userId}")
    public UserResponse getUserById(@PathVariable Integer userId) {
        return userService.getUserById(userId);
    }

    @GetMapping(params = "email")
    public UserResponse getUserByEmail(@RequestParam String email) {
        return userService.getUserByEmail(email);
    }

    @PatchMapping
    public UserResponse updateUser(@RequestBody UserRequest userRequest) {
        return userService.updateUser(userRequest);
    }

    @PostMapping("/validateToken")
    public ResponseEntity<ApiErrorResponse> validateToken(@RequestBody TokenDTO tokenRequest) {
        userService.validateToken(tokenRequest);
        return ResponseEntity.ok().body(new ApiErrorResponse(HttpStatus.OK.value(),HttpStatus.OK.name(), "Token is valid"));
    }
}
