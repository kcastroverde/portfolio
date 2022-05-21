import ThumbMenu from "../components/thumb/ThumbMenu";
import works from "../images/sections/worksShadow.png"
const Trabajos = () => {
  const list = [
    {
      title: "Campaña Univeristaria",
      image: "",
    },
    {
      title: "Landing Page",
      image: "",
    },
    {
      title: "Portafolio",
      image: "",
    },
    {
      title: "Juego Blcokchain",
      image: "",
    },
    {
      title: "Landing NFT",
      image: "",
    },
    {
      title: "App red social",
      image: "",
    }
    ]
  return (
  <>
  <div className="title"> 
  <div className="title-img-background"><img src={works} alt={works} /></div>
        <div className="description">
          <h1>Trabajos</h1>
          <h4>Proyecots realizados en los que e trabajado 
al 100% o realizado colaboracion  </h4>
        </div>
  </div>
  <div className="thumb-menu">
    <ThumbMenu list={list} />
  </div>
  </>
  );
};

export default Trabajos;
