import useFetch from "../../hooks/useFetch";
import Cupcake from "../cards/Cupcake";

const Cupcakes = ({ peticion, title}) => {
  const [data, error]= useFetch(peticion)    //recibimos un array con la data y el error y useFetch recibimos el endpoint

  if (error) {
    return <span>Hubo un error</span>        ///validacion de error
  }

  return (
    
    <div className="ed-grid">
    
      { title && <h1 className="s-main-center">Deliciosos cupcakes</h1>}
      {data ? (
        <section className="ed-grid s-grid-2 m-grid-3 lg-grid-4 gap-2 l-block row-gap">  
          {
            data.map(({
              id,
              descripcion, 
              sabor, 
              color, 
              precio,
              image
          

            }) => (
              <Cupcake 
              key= {id}
              image={ image }
              descripcion= { descripcion }
              sabor= {sabor}
              color= {color}
              precio= {precio}
              />
            )) //foreach trabaja en array original map permite trabajar en un muevo array
           // console.log(cupcakes)
          }
        </section>
      ) : (
        <span>Cargando...</span>
      )}
    </div>
    
    
  );
};
export default Cupcakes;
