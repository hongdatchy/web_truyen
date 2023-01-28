package com.hongdatchy.web_truyen.repo;

import com.hongdatchy.web_truyen.entities.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

}