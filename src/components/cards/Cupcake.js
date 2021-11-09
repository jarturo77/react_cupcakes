import {number,string} from "prop-types"
import { useState,useRef } from "react";
import "../../styles/Cupcake.css"

const Cupcake = ({ descripcion, sabor, color, precio, image }) => {
  const [vendido, setVendido] = useState(false); //declaramos una constante con dos valores una varable que contine un estado y una funcion que permite actualizar el valor de la variable-- por convencion se debe colocar set"nombrefuncion"
  const [reservado, setReservado] = useState(false);

  const fotoCupcake = useRef()

  const vender = () =>{
    setVendido(true); ///cambiar estado del hook
    setReservado(true);
    const elemento = fotoCupcake.current
    elemento.classList.add("vendido")

  }
  const reservar = () => setReservado(true);

  // useEffect(() => {
  //   ///recibe dos parametros una funcion y un array---useEffect se carga cada vez que el componete se renderiza
  //   console.log("bienvenidos",Date.now());
    
    

  // }, []);    ///los array es importante para evitar un mal comportamiento del hook useEffect-- si quieres observar un valor que cambia lo colocas dentro del array



  return (
    <div className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img ref={fotoCupcake} src={image} alt={sabor}></img>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="t5 s-mb-2 s-center">Descripción: {descripcion}</h3>
        <div className="s-main-center">
          <span>Sabor: {sabor}</span>
        </div>
        <div className="s-main-center">
          <span>Precio: {precio}</span>
        </div>
        <br/>
        <div className="s-center s-border">
        <p>
        <b>Estado:</b>
        {
          vendido ? " Vendido" : " A la venta" ///validacion ternaria
        }
      </p>

      {
        !vendido && <button className="button first-color" onClick={vender}>Vender</button> /// renderizado condicional --si no esta vendido mostrar boton
      }

      <p>
        <b>Reservar:</b>
        {
          reservado ? " Reservado" : " Libre" ///validacion ternaria
        }
      </p>

      {
        !reservado && <button className="button accent-color" onClick={reservar}>Reservar</button> /// renderizado condicional --si no esta vendido mostrar boton
      }
        </div>
      </div>
    </div>
  )
}
Cupcake.propTypes = {
  precio: number,
  sabor: string.isRequired,
  color: string.isRequired,
  descripcion: string.isRequired,
  image: string
}

Cupcake.defaultProps = {
  image : "https://w7.pngwing.com/pngs/681/637/png-transparent-cupcake-art-cupcake-muffin-knightsbridge-pme-ltd-bakery-cupcakes-miscellaneous-white-food.png",
  precio: 0

}

export default Cupcake;
