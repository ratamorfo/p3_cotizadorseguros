import React from "react";
import styled from "@emotion/styled";

import PropTypes from "prop-types";

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #ffffff;
  margin-top: 1rem;
`;

const FormatoUpper = styled.span`
  text-transform: capitalize;
`;

const Resumen = ({ datos: { marca, year, plan } }) => {
  if (marca === "" || year === "" || plan === "") return null;

  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>
          Marca: <FormatoUpper>{marca}</FormatoUpper>
        </li>
        <li>Año: {year}</li>
        <li>
          Plan: <FormatoUpper>{plan}</FormatoUpper>
        </li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
};

export default Resumen;
