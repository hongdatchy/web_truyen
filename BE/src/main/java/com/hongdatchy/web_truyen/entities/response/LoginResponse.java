/**
 * Copyright(C) 2022 Phạm Hồng Đạt
 * 27/01/2023
 */
package com.hongdatchy.web_truyen.entities.response;

import com.hongdatchy.web_truyen.entities.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;

/**
 *
 *
 * @author hongdatchy
 */
@AllArgsConstructor
@Data
public class LoginResponse {
    String token;
    User user;
}
