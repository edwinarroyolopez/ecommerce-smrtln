import styled, { css, keyframes } from "styled-components";

// Animación más fluida
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

export const ToastContainer = styled.div<{ type: string }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: white;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 380px;
  min-width: 300px; /* Para evitar que sea más angosto inicialmente */
  animation: ${fadeIn} 0.3s ease-in-out;
  
  ${({ type }) =>
    type === "success" &&
    css`
      background: #28a745;
    `}

  ${({ type }) =>
    type === "error" &&
    css`
      background: #dc3545;
    `}

  ${({ type }) =>
    type === "warning" &&
    css`
      background: #ffc107;
      color: #333;
    `}
`;

export const Message = styled.span`
  flex-grow: 1;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  font-size: 18px;
  cursor: pointer;
`;
