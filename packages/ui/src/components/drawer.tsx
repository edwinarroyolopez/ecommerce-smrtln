import styled from "styled-components";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const DrawerContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 320px;
  height: 100vh;
  background: var(--primary-text-color);
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.15);
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid var(--secondary-border-color);
  background: var(--primary-color);
  color: var(--primary-text-color);
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: var(--primary-text-color);
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 15px;
  overflow-y: auto;
  background: var(--background-color);
  color: var(--text-color);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <>
      <DrawerContainer isOpen={isOpen}>
        <Header>
          {title && <Title>{title}</Title>}
          <CloseButton onClick={onClose}>✖</CloseButton>
        </Header>
        <Content>{children}</Content>
      </DrawerContainer>
      {isOpen && <Overlay onClick={onClose} />}
    </>
  );
};

export default Drawer;
