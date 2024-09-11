package com.minet.transactionservice;

import com.minet.transactionservice.service.TransactionService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class TransactionServiceApplicationTests {

    @Autowired
    private TransactionService transactionService;

    @Test
    void contextLoads() {
        String[] str=new String[]{};
        TransactionServiceApplication.main(str);
        assertThat(transactionService).isNotNull();
    }

}