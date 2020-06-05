package com.sn.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component("post")//generic stereotype for any spring managed component
@Scope("prototype")
@Entity
@Table(name="POST")
public class Post {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="postSequence")
	@SequenceGenerator(allocationSize=1, name="postSequence", sequenceName="SQ_POST_PK")
	@Column(name="POST_ID")
	private int post_id;
	
	@Column(name="TEXT")
	private String text;
	
	@Column(name="PICTURE")
	private String picture;
	
	@Column(name="LINK")
	private String link;
	public Post() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Post(int post_id, String text, String picture, String link) {
		super();
		this.post_id = post_id;
		this.text = text;
		this.picture = picture;
		this.link = link;
	}
	public int getPost_id() {
		return post_id;
	}
	public void setPost_id(int post_id) {
		this.post_id = post_id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getPicture() {
		return picture;
	}
	public void setPicture(String picture) {
		this.picture = picture;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	@Override
	public String toString() {
		return "Post [post_id=" + post_id + ", text=" + text + ", picture=" + picture + ", link=" + link + "]";
	}
	
	
}