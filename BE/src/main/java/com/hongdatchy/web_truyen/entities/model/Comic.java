package com.hongdatchy.web_truyen.entities.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "comic")
public class Comic implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "category_id", nullable = false)
    private Integer categoryId;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "author", nullable = false)
    private String author;

    @Column(name = "artist", nullable = false)
    private String artist;

    @Column(name = "rating")
    private Integer rating;

    @Column(name = "alternative", nullable = false)
    private String alternative;

}
