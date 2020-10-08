import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { Button, LikedColor } from "./styles";
import PropTypes from "prop-types"

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? LikedColor : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size="32px" />
      {likes} likes
    </Button>
  );
};

FavButton.propTypes ={
  liked: PropTypes.bool.isRequired,
  likes:PropTypes.number.isRequired,
  onClick:PropTypes.func.isRequired
}
