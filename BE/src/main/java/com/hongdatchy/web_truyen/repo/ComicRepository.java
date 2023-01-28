package com.hongdatchy.web_truyen.repo;

import com.hongdatchy.web_truyen.entities.model.Comic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ComicRepository extends JpaRepository<Comic, Integer>, JpaSpecificationExecutor<Comic> {

}