/* CSS */
import "../../animation/Animations.css";
/* Dependencias */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
/* Componentes */
import Spinner from "../partials/Spinner";
import axios from "axios";

function ModalEditBrand({ handleCloseModalBrand, brand }) {
  const handleGoOut = () => {
    handleCloseModalBrand();
  };

  return (
    <>
      <div>
        <h2>{brand.name}</h2>
        <button onClick={handleGoOut}>Salir</button>
      </div>
    </>
  );
}

export default ModalEditBrand;
