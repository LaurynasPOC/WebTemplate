import styled from "styled-components/macro";
import { tablet } from "../../styles/breakpoints";

interface ContainerStyles {

}

export const Container = styled.div<ContainerStyles>`
  margin: "0 auto";
  padding: "0 1 rem";
  max-width: "72rem";
  @media ${tablet} {
    max-width: 100%;
  }
`;