package com.dev.main.tenancy.dao;

import com.dev.main.tenancy.domain.TncCustomer;
import com.dev.main.tenancy.vo.TncCustomerVo;

public interface TncCustomerMapper {
    int deleteByPrimaryKey(Long id);

    int insert(TncCustomer record);

    int insertSelective(TncCustomer record);

    TncCustomer selectByPrimaryKey(Long id);

    TncCustomer selectByPhone(String phone);

    int updateByPrimaryKeySelective(TncCustomer record);

    int updateByPrimaryKey(TncCustomer record);

    TncCustomerVo findVo(Long id);
}
