package com.hongdatchy.web_truyen.repo;

import com.hongdatchy.web_truyen.entities.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

    User getFirstUserByUsername(String username);

}