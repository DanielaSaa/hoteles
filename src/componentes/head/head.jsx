import styles from "./Head.module.css";

function Header({ fechaDesde, fechaHasta, pais }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const setearFecha = (fecha) => {
    return new Date(`${fecha}T00:00:00`).toLocaleDateString("es-CO", options);
  };
  return (
    <div className={styles.header}>
      <h1 className={styles.titulo} >HOTELES.COM</h1>



      {pais !== "todos" ? (
        <h3 className={styles.texto}>El pais seleccionado es: {pais}</h3>
      ) : (
        <h3 className={styles.texto}>Selecciona un pais</h3>
      )}

      {fechaDesde ? (
        <h3 className={styles.texto}>La fecha es desde {setearFecha(fechaDesde)}</h3>
      ) : (
        <h3 className={styles.texto}>Selecciona fecha inicial</h3>
      )}

      {fechaHasta ? (
        <h3 className={styles.texto}>La fecha es hasta {setearFecha(fechaHasta)}</h3>
      ) : (
        <h3 className={styles.texto}>Selecciona fecha final</h3>
      )}
    </div>
  );
}
export default Header;
