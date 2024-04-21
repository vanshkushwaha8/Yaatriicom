package com.springboot.yatrii.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.yatrii.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long>{

}
