import styled from "styled-components";
import Button from "./Button";
import { useProject } from "../contexts/ProjectProvider";

const StyledFooter = styled.div`
  background: linear-gradient(
      to right,
      rgba(77, 150, 169, 0.8),
      rgba(77, 150, 169, 0.8)
    ),
    url("./assets/desktop/image-footer.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: space-around;
  align-items: start;
  padding-block: 8rem 5rem;
  padding-inline: 10rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding-inline: 4rem;
    text-align: center;
    background: linear-gradient(
        to right,
        rgba(77, 150, 169, 0.8),
        rgba(77, 150, 169, 0.8)
      ),
      url("./assets/tablet/image-footer.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: 600px) {
    background: linear-gradient(
        to right,
        rgba(77, 150, 169, 0.8),
        rgba(77, 150, 169, 0.8)
      ),
      url("./assets/mobile/image-footer.jpg");
    background-position: center top;
    padding-inline: 8vw;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (max-width: 350px) {
    background-size: contain;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;

  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 2.5rem;
  color: var(--white);

  @media (max-width: 1200px) {
    margin-bottom: 0.75rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  max-width: 30ch;
  margin-inline: auto;
  color: var(--white);
  font-weight: 600;
  line-height: 1.4;

  @media (max-width: 1200px) {
    max-width: 48ch;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 600px) {
    max-width: none;
    margin-inline: auto;
  }
`;

function Footer() {
  const { isTablet } = useProject();

  return (
    <StyledFooter>
      {isTablet ? (
        <Title>Experience more together</Title>
      ) : (
        <Title>
          Experience more<br></br> together
        </Title>
      )}
      <Description>
        Stay connected with reliable HD meetings and unlimited one-on-one and
        group video sessions.
      </Description>
      <Button type="purple">
        Download <span>v1.3</span>
      </Button>
    </StyledFooter>
  );
}

export default Footer;
