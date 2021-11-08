import "./styles.css";
import React, { useState } from "react";
import Head from "./componentes/head/head.jsx";
import Filtros from "./componentes/filters/filters.jsx";
import Tarjetas from "./componentes/cards/cards.jsx";
import { hotelsData } from "./statics/data.js";
import Alerta  from "./componentes/alerta/alerta.jsx"; 

export default function App() {
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [pais, setPais] = useState("todos");
  const [tamanio, setTamanio] = useState("todos");
  const [precios, setPrecios] = useState("todos");

  //Filtros
  const nuevaListaHotel = () => {
    let nuevaLista = hotelsData
      .filter((hotel) => {
        if (!fechaDesde || !fechaHasta) {
          return hotel;
        }
        return (
          hotel.availabilityFrom < new Date(fechaDesde).getTime() &&
          hotel.availabilityTo > new Date(fechaHasta).getTime()
        );
      })

      .filter((hotel) => {
        if (tamanio === "pequenio") {
          return hotel.rooms <= 10;
        } else if (tamanio === "mediano") {
          return hotel.rooms > 10 && hotel.rooms <= 20;
        } else if (tamanio === "grande") {
          return hotel.rooms > 20;
        }
        return hotel;
      })

      .filter((hotel) => {
        if (pais !== "todos") {
          return hotel.country === pais;
        }
        return hotel;
      })

      .filter((hotel) => {
        if (precios !== "todos") {
          return hotel.price === Number(precios);
        }
        return hotel;
      });

    return nuevaLista;
  };

  const listaFiltrada = nuevaListaHotel();

  return (
    <div>
      <Head fechaDesde={fechaDesde} fechaHasta={fechaHasta} pais={pais} />
      <Filtros
        fechaDesde={fechaDesde}
        fechaHasta={fechaHasta}
        pais={pais}
        tamanio={tamanio}
        precios={precios}
        setFechaDesde={setFechaDesde}
        setFechaHasta={setFechaHasta}
        setPais={setPais}
        setTamanio={setTamanio}
        setPrecios={setPrecios}
      />
      {listaFiltrada.length !== 0 ? (
        <Tarjetas listaFiltrada={listaFiltrada} />
      ) : (
        <Alerta  />
      )}
    </div>
  );
}
