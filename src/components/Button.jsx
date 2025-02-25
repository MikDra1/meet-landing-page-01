/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 3rem;
  color: var(--white);
  font-weight: 800;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  @media (max-width: 600px) {
    width: fit-content;
    margin-inline: auto;
  }
`;

const GreenButton = styled(StyledButton)`
  background-color: var(--cyan-600);

  & span {
    color: var(--cyan-300);
    margin-left: 0.1rem;
  }

  &:hover {
    background-color: rgb(113,192,212);
  }
`;

const PurpleButton = styled(StyledButton)`
  background-color: var(--purple-600);

  & span {
    color: var(--purple-300);
    margin-left: 0.1rem;
  }

  &:hover {
    background-color: rgb(177,139,221);
  }
`;

function Button({ type, children }) {
  return type === "green" ? (
    <GreenButton>{children}</GreenButton>
  ) : (
    <PurpleButton>{children}</PurpleButton>
  );
}

export default Button;
