import React from "react";
import styles from "./Filters.module.css";

function Filtros({
  fechaDesde,
  fechaHasta,
  pais,
  tamanio,
  precios,
  setFechaDesde,
  setFechaHasta,
  setPais,
  setTamanio,
  setPrecios,
}) {
  let filtrarFechaDesde = (evento) => {
    setFechaDesde(evento.target.value);
  };

  let filtrarFechaHasta = (evento) => {
    setFechaHasta(evento.target.value);
  };

  let filtrarTamanio = (evento) => {
    setTamanio(evento.target.value);
  };

  let filtrarPais = (evento) => {
    setPais(evento.target.value);
  };

  let filtrarPrecio = (evento) => {
    setPrecios(evento.target.value);
  };

  //Limpiar filtros
  let limpiar = (evento) => {
    setPrecios("todos");
    setTamanio("todos");
    setPais("todos");
    setFechaHasta("");
    setFechaDesde("");
  };

  return (
    <div className={styles.filtro}>

      <div>
        <label htmlFor="desde"></label>        
        <input
          className={styles.formulario}
          type="date"
          id="desde"
          onChange={filtrarFechaDesde}
          value={fechaDesde}
        />
      </div>

      <div>
        <label htmlFor="hasta"></label>
        {/*Aqui va el icono del calendario */}
        <input
          className={styles.formulario}
          type="date"
          id="hasta"
          onChange={filtrarFechaHasta}
          value={fechaHasta}
        />
      </div>

      <select
        value={tamanio}
        onChange={filtrarTamanio}
        className={styles.formulario}
      >
        <option value="todos">Cualquier tamaño</option>
        <option value="pequenio">Pequeño</option>
        <option value="mediano">Mediano</option>
        <option value="grande">Grande</option>
      </select>

      <select value={pais} onChange={filtrarPais} className={styles.formulario}>
        <option value="todos">Todos los países</option>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
      </select>

      <select
        value={precios}
        onChange={filtrarPrecio}
        className={styles.formulario}
      >
        <option value="todos">Cualquier precio</option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
      </select>

      <button className={styles.boton} onClick={limpiar}>
        Limpiar
      </button>
    </div>
  );
}
export default Filtros;
