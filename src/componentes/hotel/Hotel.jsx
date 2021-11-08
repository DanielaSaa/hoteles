import style from "./Hotel.module.css";
import ubicacion from "../../images/ubicacion.png"
import habitacion from "../../images/habitacion.png"
function Tarjeta({ hotel }) {
  

  const setearFecha = (fecha) => {

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date( fecha ).toLocaleDateString("es-CO",options);

  };

  const reservado = () => {
    alert("Hotel reservado");
  };

  return (
    <div className={style.tarjeta}>
      <img className={style.imagen} src={hotel.photo} alt={hotel.name} />
      <h3 className={style.titulo}>{hotel.name}</h3>
      <p className={style.texto}>{hotel.description}</p>

      <div className={style.fechas}>
        <h5>
          Desde el {setearFecha(hotel.availabilityFrom)}
        </h5>
      </div>

      <div className={style.fechas}>
        <h5>
          Hasta el {setearFecha(hotel.availabilityTo)}
        </h5>
      </div>

      <div className={style.lugar}>
        <div className={style.icono}>
          <img className={style.icon} src={ubicacion} alt="ubicacion" />
        </div>
        <div className={style.ciudad}>
          {hotel.city}, {hotel.country}
        </div>
      </div>
      <div className={style.contenedor}>
        <div className={style.numero}>
          <div className={style.icono}>
            <img className={style.icon} src={habitacion} alt="habitacion" />            
          </div>
          <div className={style.habitacion}>{hotel.rooms} habitaciones</div>
        </div>

        <div className={style.precio}>
          <div className={style.preciosi}>
            <p>
              {Array.from({ length: hotel.price }).map((i) => {
                return <span> $ </span>;
              })}
            </p>
          </div>

          <div className={style.preciono}>
            <p>
              {Array.from({ length: 4 - hotel.price }).map((i) => {
                return <span> $ </span>;
              })}
            </p>
          </div>
        </div>
      </div>

      <button onClick={reservado} className={style.boton}>
        Reservar
      </button>
    </div>
  );
}

export default Tarjeta;
