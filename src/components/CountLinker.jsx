import styled from "styled-components";

const StyledCountLinker = styled.div`
  border: 1px solid var(--slate-300);
  width: fit-content;
  margin-inline: auto;
  padding: 0.75rem 1rem;
  border-radius: 100vw;
  color: var(--slate-600);
  font-weight: 800;
  position: relative;

  margin-top: 12rem;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 1.5px;
    height: 5rem;
    background-color: var(--slate-300);
  }

  @media (max-width: 600px) {
    margin-top: 9rem;
  }
`;

const TransformedStyledCountLinker = styled(StyledCountLinker)`
  transform: translateY(50%);
  background-color: var(--white);
  z-index: 100;
  margin-top: 9rem;
  
  @media (max-width: 600px) {
    margin-top: 8rem;
  }
`;

// eslint-disable-next-line react/prop-types
function CountLinker({ transform, children }) {
  return transform ? (
    <TransformedStyledCountLinker>{children}</TransformedStyledCountLinker>
  ) : (
    <StyledCountLinker>{children}</StyledCountLinker>
  );
}

export default CountLinker;
