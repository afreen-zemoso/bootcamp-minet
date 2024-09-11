package com.minet.userservice.service.impl;

import com.minet.userservice.dto.TokenDTO;
import com.minet.userservice.dto.request.UserRequest;
import com.minet.userservice.dto.response.UserResponse;
import com.minet.userservice.exception.AccessDeniedException;
import com.minet.userservice.service.JwtService;
import com.minet.userservice.dto.request.AuthenticationRequest;
import com.minet.userservice.entity.User;
import com.minet.userservice.exception.UserNotFoundException;
import com.minet.userservice.repository.UserRepository;
import com.minet.userservice.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.util.Base64;


@Slf4j
@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public UserResponse saveUser(UserRequest userRequest) {
        byte[] decodedBytes = Base64.getDecoder().decode(userRequest.getPassword());
        String base64DecodedPassword = new String(decodedBytes, StandardCharsets.UTF_8);
        String bcryptEncodedPassword = passwordEncoder.encode(base64DecodedPassword);
        userRequest.setPassword(bcryptEncodedPassword);
        User user = modelMapper.map(userRequest, User.class);
        return modelMapper.map(userRepository.save(user), UserResponse.class);
    }

    @Override
    public UserResponse getUserById(Integer userId) {
        User user = userRepository.findById(userId).orElseThrow(() ->
                new UserNotFoundException("User not found with id: " + userId)
        );
        return modelMapper.map(user, UserResponse.class);
    }

    @Override
    public UserResponse getUserByEmail(String email) {
        User user = userRepository.findByEmail(email).orElseThrow(() ->
                new UserNotFoundException("User not found with email: " + email)
        );
        return modelMapper.map(user, UserResponse.class);
    }

    @Override
    public UserResponse updateUser(UserRequest user) {
        User updatedUser = userRepository.findById(user.getId())
                .orElseThrow(() -> new UserNotFoundException("User not found with id: " + user.getId()));
        if (user.getBalance() != 0.0)
            updatedUser.setBalance(user.getBalance());
        if (user.getPassword() != null) {

            byte[] decodedBytes = Base64.getDecoder().decode(user.getPassword());
            String base64DecodedPassword = new String(decodedBytes, StandardCharsets.UTF_8);
            updatedUser.setPassword(passwordEncoder.encode(base64DecodedPassword));
        }
        return modelMapper.map(userRepository.save(updatedUser), UserResponse.class);
    }

    @Override
    public TokenDTO loginUser(AuthenticationRequest authenticationRequest) {

        byte[] decodedBytes = Base64.getDecoder().decode(authenticationRequest.getPassword());
        String base64DecodedPassword = new String(decodedBytes, StandardCharsets.UTF_8);
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getEmail(),
                        base64DecodedPassword
                )
        );
        User user = userRepository.findByEmail(authenticationRequest.getEmail())
                .orElseThrow();
        if (!user.isEnabled()) {
            throw new AccessDeniedException("User is not enabled");
        }
        String jwtToken = jwtService.generateToken(user);
        return new TokenDTO(
                jwtToken
        );
    }

    @Override
    public void validateToken(TokenDTO tokenRequest) {
        jwtService.isTokenValid(tokenRequest.getToken());
    }
}
