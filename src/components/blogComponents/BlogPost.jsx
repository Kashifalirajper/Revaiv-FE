import React from "react";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const BlogPost = ({ topics,title,date, readTime, imageUrl, summary,author }) => {
  const navigate = useNavigate();

  return (
    <div className="blogCards">
      <Card
        onClick={() => navigate("/blogs/post")}
        hoverable
        style={{background:'transparent',border:'none',padding:'5px' }}
        cover={<img alt="Blog Post" src={imageUrl} />}
      >
        <Meta description={topics}/>
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <Meta description={summary} />
        <p className="text-[#3B3B3B] text-base mb-3">{date} | {readTime} min read</p>
        <p className="text-[#296969] text-base mb-3">{author}</p>
      </Card>
    </div>
  );
};

export default BlogPost;
