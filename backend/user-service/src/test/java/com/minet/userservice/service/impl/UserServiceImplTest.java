package com.minet.userservice.service.impl;

import com.minet.userservice.dto.TokenDTO;
import com.minet.userservice.dto.request.UserRequest;
import com.minet.userservice.dto.response.UserResponse;
import com.minet.userservice.exception.AccessDeniedException;
import com.minet.userservice.exception.UserNotFoundException;
import com.minet.userservice.repository.UserRepository;
import com.minet.userservice.service.JwtService;
import com.minet.userservice.dto.request.AuthenticationRequest;
import com.minet.userservice.entity.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;
import java.util.Base64;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.*;

class UserServiceImplTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private JwtService jwtService;

    @Mock
    private AuthenticationManager authenticationManager;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private UserServiceImpl userService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void givenUserRequestBody_whenUserNotExists_thenCreateUser() {
        // Set up test case
        String password = "password";
        UserRequest userRequest = new UserRequest();
        userRequest.setPassword(new String(Base64.getEncoder().encode(password.getBytes())));
        User user = new User();
        UserResponse expectedResponse = new UserResponse();

        when(passwordEncoder.encode(anyString())).thenReturn("encodedPassword");
        when(modelMapper.map(userRequest, User.class)).thenReturn(user);
        when(userRepository.save(user)).thenReturn(user);
        when(modelMapper.map(user, UserResponse.class)).thenReturn(expectedResponse);

        // Perform the save user operation
        UserResponse response = userService.saveUser(userRequest);

        // Verify that the response matches the expected user response
        assertEquals(expectedResponse, response);
        verify(passwordEncoder).encode(password);
        verify(modelMapper).map(userRequest, User.class);
        verify(userRepository).save(user);
        verify(modelMapper).map(user, UserResponse.class);
    }

    @Test
    void givenUserId_whenUserIdExists_theReturnUserById() {
        // Set up test case
        Integer userId = 1;
        User user = new User();
        UserResponse expectedResponse = new UserResponse();

        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        when(modelMapper.map(user, UserResponse.class)).thenReturn(expectedResponse);

        // Perform the get user by ID operation
        UserResponse response = userService.getUserById(userId);

        // Verify that the response matches the expected user response
        assertEquals(expectedResponse, response);
        verify(userRepository).findById(userId);
        verify(modelMapper).map(user, UserResponse.class);
    }

    @Test
    void testGetUserById_whenUserIdNotFound_thenThrowsUserNotFoundException() {
        // Set up test case
        Integer userId = 1;
        when(userRepository.findById(userId)).thenReturn(Optional.empty());
        assertThrows(UserNotFoundException.class, () -> userService.getUserById(userId));
        verify(userRepository).findById(userId);
        verifyNoMoreInteractions(modelMapper);
    }

    @Test
    void givenUserEmail_whenUserEmailExists_thenGetUserByEmail() {
        // Set up test case
        String email = "test@example.com";
        User user = new User();
        UserResponse expectedResponse = new UserResponse();

        when(userRepository.findByEmail(email)).thenReturn(Optional.of(user));
        when(modelMapper.map(user, UserResponse.class)).thenReturn(expectedResponse);

        // Perform the get user by email operation
        UserResponse response = userService.getUserByEmail(email);

        // Verify that the response matches the expected user response
        assertEquals(expectedResponse, response);
        verify(userRepository).findByEmail(email);
        verify(modelMapper).map(user, UserResponse.class);
    }

    @Test
    void testGetUserByEmail_whenUserEmailNotExists_ShouldThrowUserNotFoundException() {
        // Set up test case
        String email = "test@example.com";
        when(userRepository.findByEmail(email)).thenReturn(Optional.empty());
        assertThrows(UserNotFoundException.class, () -> userService.getUserByEmail(email));
        verify(userRepository).findByEmail(email);
        verifyNoMoreInteractions(modelMapper);
    }

    @Test
    void givenUserRequestBody_whenUserExists_thenUpdateUser() {

        Integer userId = 1;

        // Set up test case
        UserRequest userRequest = new UserRequest();
        userRequest.setId(userId);
        userRequest.setBalance(100.0);
        userRequest.setPassword("newPassword");

        User existingUser = new User();
        existingUser.setId(userId);
        existingUser.setBalance(50.0);
        existingUser.setPassword("oldPassword");

        User updatedUser = new User();
        updatedUser.setId(userId);
        updatedUser.setBalance(100.0);
        updatedUser.setPassword("newPassword");

        UserResponse expectedResponse = new UserResponse();
        expectedResponse.setId(userId);
        expectedResponse.setBalance(100.0);

        when(userRepository.findById(userRequest.getId())).thenReturn(Optional.of(existingUser));
        when(userRepository.save(existingUser)).thenReturn(updatedUser);
        when(passwordEncoder.encode("newPassword")).thenReturn("encodePassword");
        when(modelMapper.map(updatedUser, UserResponse.class)).thenReturn(expectedResponse);

        // Perform the update user operation
        UserResponse response = userService.updateUser(userRequest);

        // Verify that the response matches the expected user response
        assertEquals(expectedResponse, response);
        verify(userRepository).findById(userRequest.getId());
        verify(userRepository).save(existingUser);
        verify(modelMapper).map(updatedUser, UserResponse.class);
    }

    @Test
    void testUpdateUser_WithNonExistingUser_ShouldThrowUserNotFoundException() {

        Integer userId = 1;

        // Set up test case
        UserRequest userRequest = new UserRequest();
        userRequest.setId(userId);
        userRequest.setBalance(100.0);
        userRequest.setPassword("newPassword");

        when(userRepository.findById(userRequest.getId())).thenReturn(Optional.empty());

        // Perform the update user operation and verify the exception
        assertThrows(UserNotFoundException.class, () -> userService.updateUser(userRequest));

        verify(userRepository).findById(userRequest.getId());
        verifyNoMoreInteractions(userRepository);
        verifyNoMoreInteractions(modelMapper);
    }

    @Test
    void testUpdateUser_WithDisabledUser_ShouldThrowUserNotFoundException() {

        String password = "password";
        // Set up test case
        AuthenticationRequest userRequest = new AuthenticationRequest();
        userRequest.setPassword(Base64.getEncoder().encodeToString(password.getBytes()));
        User user = mock(User.class);
        when(userRepository.findByEmail(userRequest.getEmail())).thenReturn(Optional.of(user));
        when(user.isEnabled()).thenReturn(false);

        // Perform the update user operation and verify the exception
        assertThrows(AccessDeniedException.class, () -> userService.loginUser(userRequest));
        verify(userRepository).findByEmail(userRequest.getEmail());
        verifyNoMoreInteractions(userRepository);
        verifyNoMoreInteractions(modelMapper);
    }

    @Test
    void givenAuthenticationRequest_whenUserCredentialsValid_testLoginUser() {
        // Set up test case
        String password = "password";
        AuthenticationRequest authenticationRequest = new AuthenticationRequest();
        authenticationRequest.setEmail("test@example.com");
        authenticationRequest.setPassword(Base64.getEncoder().encodeToString(password.getBytes()));

        User user = new User();
        String jwtToken = "dummyToken";
        TokenDTO expectedToken = new TokenDTO(jwtToken);

        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class))).thenReturn(null);
        when(userRepository.findByEmail(authenticationRequest.getEmail())).thenReturn(Optional.of(user));
        when(jwtService.generateToken(user)).thenReturn(jwtToken);

        // Perform the login user operation
        TokenDTO token = userService.loginUser(authenticationRequest);

        // Verify that the token matches the expected token
        assertEquals(expectedToken.getToken(), token.getToken());
        verify(authenticationManager).authenticate(any(UsernamePasswordAuthenticationToken.class));
        verify(userRepository).findByEmail(authenticationRequest.getEmail());
        verify(jwtService).generateToken(user);
    }

    @Test
    void testLoginUser_WithInvalidCredentials_ShouldThrowUserNotFoundException() {
        // Set up test case
        AuthenticationRequest authenticationRequest = new AuthenticationRequest();
        authenticationRequest.setEmail("test@example.com");
        authenticationRequest.setPassword("password");

        when(authenticationManager.authenticate(any(UsernamePasswordAuthenticationToken.class))).thenThrow(AccessDeniedException.class);

        // Perform the login user operation and verify the exception
        assertThrows(AccessDeniedException.class, () -> userService.loginUser(authenticationRequest));

        verify(authenticationManager).authenticate(any(UsernamePasswordAuthenticationToken.class));
        verifyNoMoreInteractions(userRepository);
        verifyNoMoreInteractions(jwtService);
    }

    @Test
    void givenTokenRequest_whenTokenValid_thenPositiveResponse() {
        // Set up test case
        TokenDTO tokenRequest = new TokenDTO("dummyToken");

        when(jwtService.isTokenValid(tokenRequest.getToken())).thenReturn(true);

        // Perform the validate token operation
        userService.validateToken(tokenRequest);

        // Verify that the token validation is performed by the jwtService
        verify(jwtService).isTokenValid(tokenRequest.getToken());
    }

    @Test
    void testValidateToken_WithInvalidToken_ShouldThrowAccessDeniedException() {
        // Set up test case
        TokenDTO tokenRequest = new TokenDTO("invalidToken");

        when(jwtService.isTokenValid(tokenRequest.getToken())).thenThrow(new AccessDeniedException("Invalid token"));

        // Perform the validate token operation and verify the exception
        assertThrows(AccessDeniedException.class, () -> userService.validateToken(tokenRequest));

        verify(jwtService).isTokenValid(tokenRequest.getToken());
    }
}
