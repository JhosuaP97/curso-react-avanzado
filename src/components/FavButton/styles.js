import styled from "styled-components";
import { MdFavorite } from "react-icons/md";

import { fadeIn } from "../../styles/animation";

export const Button = styled.button`
display: flex;
align-items: center;
padding-top: 8px;
background-color: transparent;
border: none;
outline:none;
& svg {
  margin-right: 4px;
}
`;

export const LikedColor= styled(MdFavorite)`
  color:#ff277a;
  ${fadeIn()};
`;