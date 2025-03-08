import styled, { css } from "styled-components";

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
  animation: fadeIn 0.3s ease-in-out;

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

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
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
