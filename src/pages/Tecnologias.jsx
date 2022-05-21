import ThumbMenu from "../components/thumb/ThumbMenu";
import react from "../images/tecnologies/react.png";
import node from "../images/tecnologies/node.png";
import mongodb from "../images/tecnologies/mongodb.png";
import express from "../images/tecnologies/express.png";
import solidity from "../images/tecnologies/solidity.png";
import vue from "../images/tecnologies/vue.png";
import tec from "../images/sections/tecShadow.png"

const Tecnologias = () => {
  const list = [
    {
      title: "React",
      image: react,
    },
    {
      title: "NodeJS",
      image: node,
    },
    {
      title: "MongoDB",
      image: mongodb,
    },
    {
      title: "Express",
      image: express,
    },
    {
      title: "Solidity",
      image: solidity,
    },
    {
      title: "Vue.js",
      image: vue,
    }
  ]
  return (
    <>
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
    </>
  );
};

export default Tecnologias;
