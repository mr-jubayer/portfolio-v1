import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin: 5rem 0;
`;

export const Email = styled.div`
  span {
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: 576px) {
    span {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 992px) {
    span {
      font-size: 1.5rem;
    }
  }
`;
