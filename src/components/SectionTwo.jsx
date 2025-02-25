import styled from "styled-components";

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-top: 0.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--slate-900);

  @media (max-width: 600px) {
      font-size: 1.5rem;
      max-width: 80%;
      margin-inline: auto;
      scale: 1.2;
    }
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  margin-top: 4rem;

  text-transform: uppercase;
  color: var(--cyan-600);
  font-weight: 800;
  text-align: center;
  letter-spacing: 3px;

  @media (max-width: 600px) {
      font-size: 0.8rem;
      max-width: 80%;
      margin-inline: auto;
    }
`;

const Description = styled.p`
  text-align: center;
  max-width: 45ch;
  margin-inline: auto;
  margin-top: 1rem;
  color: var(--slate-600);
  font-weight: 600;
  font-size: 1.1rem;

    @media (max-width: 600px) {
      font-size: 1rem;
      max-width: 80%;
      margin-inline: auto;
    }

`;

function SectionTwo() {
  return (
    <div>
      <Subtitle>Built for modern use</Subtitle>
      <Title>Smarter meetings, all<br></br> in one place</Title>
      <Description>
        Send messages, share files, show your screen, and record your meetings -
        all in one workspace. Control who can join with invite-only tema access,
        data encryption and data export.
      </Description>
    </div>
  );
}

export default SectionTwo;
