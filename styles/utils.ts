import { css, keyframes } from '@emotion/react';

const skeleton = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(100%);
  }
`;

export const createSkeletonStyle = (
  width: number | string,
  height: number | string,
  gap?: number
) => {
  return css`
    position: relative;
    background: #f2f2f2;
    overflow: hidden;
    &:not(:first-child) {
      margin-top: ${`${gap}px`};
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: ${typeof width === 'string' ? width : `${width}px`};
      height: ${typeof height === 'string' ? height : `${height}px`};
      background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
      animation: ${skeleton} 2s infinite linear;
    }
  `;
};
