import type { NextPage } from 'next';
import Link from 'next/link';
import styled from '@emotion/styled';

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Link href={'/default'}>
        <Anchor>Default Skeleton</Anchor>
      </Link>
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

const Anchor = styled.a`
  display: block;
  padding: 0 10px;
  border: 1px solid gray;
  border-radius: 8px;
  line-height: 30px;
  cursor: pointer;
`;
