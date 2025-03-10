import styled from "styled-components";
import IosArrowDown from "./icons/ios-arrow-down";
import IosArrowUp from "./icons/ios-arrow-up";
import { ReactNode } from "react";

interface StickerCardProps {
  titleTransKey: string;
  subtitleTransKey?: string;
  icon: ReactNode;
  color?: string;
  price: number;
  indicator?: "up" | "down";
  indicatorText?: string;
  note?: string;
  link?: string;
  linkText?: string;
}

interface IndicatorProps {
  up?: boolean;
}

const CardContainer = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e7eb;
  border-bottom: 4px solid ${(props) => props.color || "#000"};
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  max-width: 300px;
  min-width: 250px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: auto;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 8px;
  background: rgba(243, 244, 246, 0.8);
  margin-right: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  width: 100%;
`;

const Title = styled.span`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 4px;
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #1f2937;
`;

const Indicator = styled.span<IndicatorProps>`
  margin-top: 12px;
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.up ? "#03D3B5" : "#FC6687")};
`;

const Note = styled.span`
  font-size: 14px;
  font-weight: normal;
  color: #6b7280;
`;

const Link = styled.a`
  font-size: 12px;
  font-weight: bold;
  color: #7c3aed;
  text-decoration: none;
  margin-top: 8px;
`;

const StickerCard = ({
  titleTransKey,
  icon,
  color,
  price,
  indicator,
  indicatorText,
  note,
  link,
  linkText,
}: StickerCardProps) => {
  return (
    <CardContainer color={color}>
      <Header>
        <IconWrapper>{icon}</IconWrapper>
        <TextContainer>
          <Title>{titleTransKey}</Title>
          <Price>{price}</Price>
        </TextContainer>
      </Header>
      {indicator === "up" && (
        <Indicator up>
          <IosArrowUp width="9px" height="11px" /> {indicatorText}
          <Note> {note}</Note>
        </Indicator>
      )}
      {indicator === "down" && (
        <Indicator>
          <IosArrowDown width="9px" height="11px" /> {indicatorText}
          <Note> {note}</Note>
        </Indicator>
      )}
      {link && (
        <Link href={link} target="_blank" rel="noreferrer">
          {linkText}
        </Link>
      )}
    </CardContainer>
  );
};

export default StickerCard;
