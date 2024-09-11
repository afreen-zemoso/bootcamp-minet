package com.minet.cryptoservice;

import com.minet.cryptoservice.service.CryptoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class CryptoServiceApplicationTests {

	@Autowired
	private CryptoService cryptoService;

	@Test
	void contextLoads() {
		String[] str=new String[]{};
		CryptoServiceApplication.main(str);
		assertThat(cryptoService).isNotNull();
	}

}
