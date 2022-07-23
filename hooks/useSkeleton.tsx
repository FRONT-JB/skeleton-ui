import { ReactElement } from 'react';

const useSkeleton = (SkeletonComponent: () => ReactElement, limit: number) => {
  if (limit <= 1) {
    return <SkeletonComponent />;
  }
  return new Array(limit)
    .fill(1)
    .map((_, index) => <SkeletonComponent key={index} />);
};

export default useSkeleton;
