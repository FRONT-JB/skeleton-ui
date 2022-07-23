import styled from '@emotion/styled';

import { PostTypes } from '@/types/post';

import PostSkeleton from '../skeleton/PostSkeleton';

import useSkeleton from 'hooks/useSkeleton';

interface PostListProps {
  post: PostTypes[];
  isLoading: boolean;
}

const PostList = ({ post, isLoading }: PostListProps) => {
  const SkeletonUI = useSkeleton(PostSkeleton, 5);

  return (
    <PostListWrapper>
      {isLoading && SkeletonUI}
      {!isLoading &&
        post.map(({ id, userId, title, body }) => {
          return (
            <PostItemWrapper key={id}>
              <PostItemAuthor>
                <PostItemThumbnail />
                {id} {userId}
              </PostItemAuthor>
              <PostItemTitle>{title}</PostItemTitle>
              <PostItemContent>
                <PostItemBody>{body}</PostItemBody>
              </PostItemContent>
            </PostItemWrapper>
          );
        })}
    </PostListWrapper>
  );
};

export default PostList;

const PostListWrapper = styled.ul`
  flex: 0 0 500px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 820px;
`;

const PostItemWrapper = styled.li`
  padding: 16px;
  border: 1px solid gray;
  border-radius: 8px;
  background: #fff;
`;

const PostItemAuthor = styled.b`
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 30px;
`;

const PostItemThumbnail = styled.span`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
`;

const PostItemTitle = styled.p`
  margin-top: 24px;
  font-size: 24px;
  line-height: 38px;
  font-weight: 500;
`;

const PostItemContent = styled.div`
  margin-top: 16px;
`;

const PostItemBody = styled.p`
  font-size: 14px;
  line-height: 23px;
`;
