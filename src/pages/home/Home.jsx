import React, { useEffect } from 'react';
import Layout from '../../componenets/layout/Layout';
import HeroSection from '../../componenets/heroSection/HeroSection';
import BlogPostCard from '../../componenets/blogPostCard/BlogPostCard';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Layout>
        <HeroSection />
        <BlogPostCard />
      </Layout>
    </div>
  );
};

export default Home;
