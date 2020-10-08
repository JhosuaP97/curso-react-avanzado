import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../container/ListOfPhotoCards";
import { Helmet } from "react-helmet";
const HomePage = ({ categoryId }) => {
  return (
    <>
    <Helmet>   
      <title>Petgram | Tu app de fotos de máscotas</title>
      <meta name="description" content="Con Petgram puedes encontrar fotos de animales domésticos"/>
    </Helmet>
    
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  );
};

export default React.memo(HomePage,(prevProps,props)=>{
  return prevProps.categoryId == props.categoryId
});
