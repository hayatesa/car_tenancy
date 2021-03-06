package com.dev.main.shiro.controller;

import com.dev.main.common.controller.exception.GlobalExceptionResolver;
import com.dev.main.common.util.ResultMap;
import com.dev.main.shiro.util.ShiroUtils;
import com.dev.main.tenancy.domain.TncCustomer;
import org.apache.shiro.authz.annotation.RequiresUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/shiro")
@GlobalExceptionResolver
public class TokenController {

    /**
     * 获取登录的用户
     */
    @GetMapping("/token")
    public ResultMap token() {
        TncCustomer token = ShiroUtils.getUserEntity();
        if (token!=null) {
            // 密码安全，设置密码和盐值为空串
            token.setPassword("");
            token.setSalt("");
        }
        return ResultMap.success().put("token", token);
    }

}
