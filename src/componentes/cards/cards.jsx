import styles from "./Cards.module.css";
import Tarjeta from "../hotel/Hotel.jsx";

function Tarjetas({ listaFiltrada }) {
  return (
    <div className={styles.tarjetas}>
      {listaFiltrada.map((hotel) => {
        return <Tarjeta key={hotel.slug} hotel={hotel} />;
      })}
    </div>
  );
}

export default Tarjetas;
