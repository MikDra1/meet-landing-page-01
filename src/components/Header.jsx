import styled from "styled-components";
import Button from "./Button";
import { useProject } from "../contexts/ProjectProvider";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  width: 100%;
  overflow-x: hidden;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;

  @media (max-width: 1200px) {
    justify-content: center;
    margin-top: 4rem;
  }
`;

const HeroLeftImage = styled.img`
  transform: translateX(-1.5rem);
`;

const HeroRightImage = styled.img`
  transform: translateX(1.5rem);
`;

const MeetLogo = styled.img`
  margin-bottom: 4rem;
`;

const Content = styled.div`
  text-align: center;

`;

const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1.2;
  font-weight: 900;
  color: var(--slate-900);
  margin-bottom: 1rem;

  @media (max-width: 1200px) {
    font-size: 3rem;
    max-width: 10ch;
    margin-inline: auto;
  }

  @media (max-width: 600px) {
    font-size: 2.5rem;
    max-width: 80%;
    margin-inline: auto;
  }
`;

const Description = styled.p`
  color: var(--slate-600);
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  line-height: 1.5;
  max-width: 35ch;
  margin-inline: auto;

  @media (max-width: 600px) {
    font-size: 1rem;
    max-width: 80%;
    margin-inline: auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    max-width: 80%;
    margin-inline: auto;
  }
`;

const TabletHeroImage = styled.img`
  scale: 1.1;

`

function Header() {
  const { isTablet } = useProject();

  return (
    <StyledHeader>
      <MeetLogo src="./assets/logo.svg" alt="logo" />
      {isTablet ? (
        <>
        <TabletHeroImage src="./assets/tablet/image-hero.png" alt="hero" />
          <FlexContainer>
            <Content>
              <Title>Group Chat for Everyone</Title>
              <Description>
                Meet makes it easy to connect with others face-to-face virtually
                and collaborate across any device.
              </Description>
              <ButtonContainer>
                <Button type="green">
                  Download<span> v1.3</span>
                </Button>
                <Button type="purple">What is it?</Button>
              </ButtonContainer>
            </Content>
          </FlexContainer>
        </>
      ) : (
        <FlexContainer>
          <HeroLeftImage
            src="./assets/desktop/image-hero-left.png"
            alt="hero-left"
          />
          <Content>
            <Title>Group Chat for Everyone</Title>
            <Description>
              Meet makes it easy to connect with others face-to-face virtually
              and collaborate across any device.
            </Description>
            <ButtonContainer>
              <Button type="green">
                Download<span> v1.3</span>
              </Button>
              <Button type="purple">What is it?</Button>
            </ButtonContainer>
          </Content>
          <HeroRightImage
            src="./assets/desktop/image-hero-right.png"
            alt="hero-right"
          />
        </FlexContainer>
      )}
    </StyledHeader>
  );
}

export default Header;
