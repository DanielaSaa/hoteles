import styles from "./Alerta.module.css"
import nohayresultados from "../../images/no-hay-resultados.jpg"

function alerta() {
    return (
      <div className={styles.alerta} >
          <img className={styles.imagen} src={nohayresultados} alt="nohayresultados" />
      </div>
    );
  }
  
  export default alerta;
  