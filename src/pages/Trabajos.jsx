import ProyectModal from "../components/thumb/ProyectModal";
import ThumbMenu from "../components/thumb/ThumbMenu";
import works from "../images/sections/worksShadow.png"
import { useState } from "react";
import { campaing, cryptolanding, game, interfaces, landing, portfolio, oppenCoffe } from "../components/images";
import { useNavigate } from "react-router-dom";
import { FaHome } from 'react-icons/fa'

const Trabajos = () => {
  const list = [
    {
      title: "",
      image: "",
      background: "thumb-proyect-1",
      hoverText: "Campaña Univeristaria",
      modalImage: campaing,
      link: 'https://vota2-ericymariaelena.firebaseapp.com/'
    },
    {
      title: "",
      image: "",
      background: "thumb-proyect-2",
      hoverText: "Plataforma Defi",
      modalImage: oppenCoffe,
      link: 'https://www.opencoffee.io/app/'
    },
    {
      title: "",
      image: "",
      background: "thumb-proyect-3",
      hoverText: "Portafolio",
      modalImage: portfolio,
      link: 'https://panditakuma.firebaseapp.com/'
    },
    {
      title: "",
      image: "",
      background: "thumb-proyect-4",
      hoverText: "Juego Blockchain",
      modalImage: game,
      link: 'https://www.rgamesnft.app/'
    },
    {
      title: "",
      image: "",
      background: "thumb-proyect-5",
      hoverText: "Landing NFT",
      modalImage: cryptolanding,
      link: 'https://cryptomc.site/'
    },
    {
      title: "",
      image: "",
      background: "thumb-proyect-6",
      hoverText: "Interfaz",
      modalImage: interfaces,
      link: 'https://cryptomcgame.netlify.app/#/delivery'
    }
  ]

  const [isOpen, setIsOpen] = useState(false);
  const [proyect, setProyect] = useState(list[0]);

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  }
  return (
    <>
    <ProyectModal isOpen={isOpen} setIsOpen={setIsOpen} proyect={proyect}/>
      <div className="first-container-menu">
      <div onClick={goHome} className="movil-home"><FaHome/></div>
        <div className="title">
          <div className="title-img-background"><img src={works} alt={works} /></div>
          <div className="description">
            <h1>Trabajos</h1>
            <h4>Proyecots realizados en los que e trabajado
              al 100%  </h4>
          </div>
        </div>
        <div className="thumb-menu">
          <ThumbMenu list={list} setIsOpen={setIsOpen} setProyect={setProyect}/>
        </div>
      </div>
    </>
  );
};

export default Trabajos;
