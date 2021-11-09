import { NavLink } from "react-router-dom";
const Banner = () => (
  <div className="main-banner img-container dark-color">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img
          className="main-banner__img"
          src="https://images.pexels.com/photos/7525120/pexels-photo-7525120.jpeg"
          alt="banner"
        ></img>
        <div className="main-banner__data s-center">
          <p className="s-mb-0 t2">Bienvenidos a BakerCupcake</p>
          <p>El mejor sitio web para poder disfrutar de ricos cupcakes.</p>
          <NavLink to="/cupcakes" className="button">
            Ver Cupcakes
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);
export default Banner;
