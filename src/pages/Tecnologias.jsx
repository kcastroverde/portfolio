import ThumbMenu from "../components/thumb/ThumbMenu";
import tec from "../images/sections/tecShadow.png"
import {FaVuejs} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaRust} from 'react-icons/fa'
import {SiSolidity} from 'react-icons/si'

const Tecnologias = () => {
  const list = [
    {
      title: "React",
      image: <FaReact/>,
    },
    {
      title: "NodeJS",
      image: <FaNodeJs/>,
    },
    {
      title: "GitHub",
      image: <FaGithub/>,
    },
    {
      title: "Rust",
      image: <FaRust/>,
    },
    {
      title: "Solidity",
      image: <SiSolidity/>,
    },
    {
      title: "Vue.js",
      image: <FaVuejs/>,
    }
  ]
  return (
    <>
      <div className="first-container-menu">
        <div className="title">
          <div className="title-img-background"><img src={tec} alt={tec} /></div>
          <div className="description">
            <h1>Tecnologias</h1>
            <h4>Tecnologias aprendidas y aplicadas
              en diferentes proyectos realizados
              a lo largo de mi carrera profesional </h4>
          </div>

        </div>
        <div className="thumb-menu">
          <ThumbMenu list={list} />
        </div>
      </div>
    </>
  );
};

export default Tecnologias;
