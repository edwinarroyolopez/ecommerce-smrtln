import styled, { keyframes } from "styled-components";

interface BackdropProps {
  visible: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const StyledBackdrop = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
  animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
`;

export const Backdrop: React.FC<BackdropProps> = ({ visible, onClick, children }) => {
  return <StyledBackdrop visible={visible} onClick={onClick}>{children}</StyledBackdrop>;
};

export default Backdrop;
