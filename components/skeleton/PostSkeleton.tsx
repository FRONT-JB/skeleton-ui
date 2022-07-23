import styled from '@emotion/styled';

import { createSkeletonStyle } from '@/styles/utils';

const PostSkeleton = () => {
  return (
    <PostItemWrapper>
      <PostItemAuthor>
        <PostItemThumbnail />
      </PostItemAuthor>
      <PostItemTitle />
      <PostItemTitle />
      <PostItemContent>
        <PostItemBody />
        <PostItemBody />
        <PostItemBody />
      </PostItemContent>
    </PostItemWrapper>
  );
};

export default PostSkeleton;

const PostItemWrapper = styled.li`
  padding: 16px;
  border: 1px solid gray;
  border-radius: 8px;
  background: #fff;
`;

const PostItemAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const PostItemThumbnail = styled.div`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  ${createSkeletonStyle(60, 60)}
`;

const PostItemTitle = styled.div`
  height: 38px;
  ${createSkeletonStyle('100%', 38, 8)}
`;

const PostItemContent = styled.div`
  margin-top: 16px;
  width: 100%;
`;

const PostItemBody = styled.div`
  height: 23px;
  ${createSkeletonStyle('100%', 23, 8)}
`;
