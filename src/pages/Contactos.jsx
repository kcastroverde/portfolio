import ThumbMenu from "../components/thumb/ThumbMenu";
import contact from "../images/sections/contact.png"
const Contactos = () => {
  const list = [
    {
      title: "React",
      image: "",
    },
    {
      title: "NodeJS",
      image: "",
    },
    {
      title: "MongoDB",
      image: "",
    },
    {
      title: "Express",
      image: "",
    },
    {
      title: "Solidity",
      image: "",
    },
    {
      title: "Javascript",
      image: "",
    }
    ]
  return (
  <>
  <div className="title"> 
  <div className="title-img-background"><img src={contact} alt={contact} /></div>
        <div className="description">
          <h1>Contactos</h1>
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

export default Contactos;
