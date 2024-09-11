package com.minet.userservice;

import com.minet.userservice.service.UserService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
class UserServiceApplicationTests {
	@Autowired
	private UserService userService;
	@Test
	void contextLoads() {
		String[] str=new String[]{};
		UserServiceApplication.main(str);
		assertThat(userService).isNotNull();
	}

}
