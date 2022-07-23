import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import styled from '@emotion/styled';

import PostList from '@/components/posts/PostList';
import { PostTypes } from '@/types/post';

import axios from 'axios';

const getPosts = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const { data: posts } = await axios.get(url);
  return posts;
};

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<PostTypes[]>([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
      setPost(posts);
    });
  }, []);

  return (
    <HomeContainer>
      <PostList post={post} isLoading={loading} />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
`;
