import styled, { keyframes } from "styled-components";

export interface SkeletonProps {
    height?: string;
    width?: string;
    borderRadius?: string;
  }

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const Skeleton = styled.div<SkeletonProps>`
  display: inline-block;
  height: ${({ height }) => height || "16px"};
  width: ${({ width }) => width || "100%"};
  background: linear-gradient(90deg, #f3f3f3 25%, #ecebeb 50%, #f3f3f3 75%);
  background-size: 200px 100%;
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
  animation: ${shimmer} 1.5s infinite linear;
`;

export default Skeleton;
