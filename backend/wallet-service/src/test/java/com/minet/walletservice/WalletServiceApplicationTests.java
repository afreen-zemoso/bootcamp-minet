package com.minet.walletservice;

import com.minet.walletservice.service.WalletService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
class WalletServiceApplicationTests {
    @Autowired
    private WalletService walletService;

    @Test
    void contextLoads() {
        String[] str = new String[]{};
        WalletServiceApplication.main(str);
        assertThat(walletService).isNotNull();
    }

}
