import styled from "styled-components";

const DashboardWrapper = styled.div`
  display: grid;
  gap: 1.75rem; /* 7 */
  margin-top: 1rem;
  max-width: 680px;
  
  @media (max-width: 440px) {
    max-width: 320px;
  }

  @media (min-width: 768px) {
    gap: 1.5rem; /* 6 */
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1536px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

const SummaryCard = styled.div`
  grid-column: span 12;
  background: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  
  @media (min-width: 768px) {
    padding: 1.75rem;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  position: relative;
  margin-top: 0.25rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  background: #fff;
  
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1.5rem;
    height: 1.75rem;
    width: 0.25rem;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    background: #ff4d4f;
    
    @media (min-width: 768px) {
      top: -0.125rem;
      left: -1.75rem;
      height: 2rem;
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
  justify-items: center;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { DashboardWrapper, SummaryCard, Header, Title, ContentGrid };
