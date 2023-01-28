/**
 * Copyright(C) 2022 Phạm Hồng Đạt
 * 25/01/2023
 */
package com.hongdatchy.web_truyen.entities.request;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 *
 *
 * @author hongdatchy
 */
@AllArgsConstructor
@Data
public class Register {
    String username;
    String password;
}
