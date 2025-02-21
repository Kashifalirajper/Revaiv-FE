import React, { useState } from 'react';
import { Row, Col } from 'antd';
import BlogPost from './BlogPost';
import blog1 from "../../assets/images/blogs/blog1.png"
import blog2 from "../../assets/images/blogs/blog2.png"
import blog3 from "../../assets/images/blogs/blog3.png"

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='flex list-reset bg-transparent rounded justify-center space-x-1'>
        {pageNumbers.map(number => (
          <li key={number} className={`px-3 py-2 rounded cursor-pointer ${number === currentPage ? 'bg-[#27696D] text-white' : 'bg-[rgba(39,105,109,0.10)] text-[#27696D]'}`}>
            <span onClick={() => paginate(number)}>
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const posts = [
    { id: 1,topics:"PCOS | Holistic Health | Mental Health", title: "PCOS And Mental Health: Unveiling the connection", date: "September 16", readTime: 5, imageUrl: blog1, summary: "Who will tell the world about those silent battles, the hours of depression and anxiety when you were suffering alone, crying into a pillow lying on the bed?...", author:"Team RevAiv" },
    { id: 2,topics:"PCOS | Holistic Health | Mental Health", title: "Hypothyroidism Uncovered: Symptoms, Causes, and Effective Management", date: "September 16", readTime: 5, imageUrl: blog2, summary: "We might have seen various people with swollen necks. However, we rarely pay attention to conditions like these until we fall prey to them...", author:"Team RevAiv" },
    { id: 3,topics:"PCOS | Holistic Health | Mental Health", title: "5 Best Weight-loss Exercises for PCOS", date: "September 16", readTime: 5, imageUrl: blog3, summary: "Tired of letting PCOS drain your energy and vitality? Well, you don’t have to suffer anymore. The right exercises can help you overcome...", author:"Team RevAiv" },
    { id: 4,topics:"PCOS | Holistic Health | Mental Health", title: "PCOS And Mental Health: Unveiling the connection", date: "September 16", readTime: 5, imageUrl: blog1, summary: "Who will tell the world about those silent battles, the hours of depression and anxiety when you were suffering alone, crying into a pillow lying on the bed?...", author:"Team RevAiv" },
    { id: 5,topics:"PCOS | Holistic Health | Mental Health", title: "Hypothyroidism Uncovered: Symptoms, Causes, and Effective Management", date: "September 16", readTime: 5, imageUrl: blog2, summary: "We might have seen various people with swollen necks. However, we rarely pay attention to conditions like these until we fall prey to them...", author:"Team RevAiv" },
    { id: 6,topics:"PCOS | Holistic Health | Mental Health", title: "5 Best Weight-loss Exercises for PCOS", date: "September 16", readTime: 5, imageUrl: blog3, summary: "Tired of letting PCOS drain your energy and vitality? Well, you don’t have to suffer anymore. The right exercises can help you overcome...", author:"Team RevAiv" },
    { id: 7,topics:"PCOS | Holistic Health | Mental Health", title: "PCOS And Mental Health: Unveiling the connection", date: "September 16", readTime: 5, imageUrl: blog1, summary: "Who will tell the world about those silent battles, the hours of depression and anxiety when you were suffering alone, crying into a pillow lying on the bed?...", author:"Team RevAiv" },
    { id: 8,topics:"PCOS | Holistic Health | Mental Health", title: "Hypothyroidism Uncovered: Symptoms, Causes, and Effective Management", date: "September 16", readTime: 5, imageUrl: blog2, summary: "We might have seen various people with swollen necks. However, we rarely pay attention to conditions like these until we fall prey to them...", author:"Team RevAiv" },
    { id: 9,topics:"PCOS | Holistic Health | Mental Health", title: "5 Best Weight-loss Exercises for PCOS", date: "September 16", readTime: 5, imageUrl: blog3, summary: "Tired of letting PCOS drain your energy and vitality? Well, you don’t have to suffer anymore. The right exercises can help you overcome...", author:"Team RevAiv" },
    { id: 10,topics:"PCOS | Holistic Health | Mental Health", title: "PCOS And Mental Health: Unveiling the connection", date: "September 16", readTime: 5, imageUrl: blog1, summary: "Who will tell the world about those silent battles, the hours of depression and anxiety when you were suffering alone, crying into a pillow lying on the bed?...", author:"Team RevAiv" },
    { id: 11,topics:"PCOS | Holistic Health | Mental Health", title: "Hypothyroidism Uncovered: Symptoms, Causes, and Effective Management", date: "September 16", readTime: 5, imageUrl: blog2, summary: "We might have seen various people with swollen necks. However, we rarely pay attention to conditions like these until we fall prey to them...", author:"Team RevAiv" },
    { id: 12,topics:"PCOS | Holistic Health | Mental Health", title: "5 Best Weight-loss Exercises for PCOS", date: "September 16", readTime: 5, imageUrl: blog3, summary: "Tired of letting PCOS drain your energy and vitality? Well, you don’t have to suffer anymore. The right exercises can help you overcome...", author:"Team RevAiv" },
  ];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='mt-10 max-screen mx-auto'>
    <Row gutter={[32,32]} justify="center">
    {currentPosts.map(post => (
        <Col xs={24} md={12} lg={8} key={post.id}>
          <BlogPost {...post} />
        </Col>
      ))}
      <Pagination currentPage={currentPage} postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />

    </Row>
    </div>
  );
};

export default BlogPage;
