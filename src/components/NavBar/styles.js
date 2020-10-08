import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import {fadeIn} from "../../styles/animation";
export const Nav = styled.nav`
  display: flex;
  height: 3.125rem;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  background: #fcfcfc;
  border-top: 1px solid #0e0e0e;
  bottom: 0;
  max-width: 500px;
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
`;

export const Link = styled(LinkRouter)`
  display: inline-flex;
  align-items: center;
  color: #888;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  -webkit-tap-highlight-color:transparent;

  &[aria-current]{
      color:#000;

      &:after{
        ${fadeIn({time:'0.5s'})};
        content:'·';
        position:absolute;
        bottom:0;
        font-size:2rem;
        line-height:1.25rem;
      }
  }
`;
