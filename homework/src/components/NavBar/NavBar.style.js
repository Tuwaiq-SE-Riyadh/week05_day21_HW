import styled from "styled-components";
import { FlexRow, InnerSection } from "../../Global.style";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85px;
  background: #242424 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
`;
export const InnerNav = styled(InnerSection)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1400px) {
    padding: 0 50px;
  }
`;

export const NavBox = styled(FlexRow)`
  width: auto;
  margin: 330px;
`;
