import ThumbMenu from "../components/thumb/ThumbMenu";

const Tecnologias = () => {
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
      <div className="title"> Tecnologias</div>
      <div className="thumb-menu">
       <ThumbMenu list={list} /> 
      </div>
    </>
  );
};

export default Tecnologias;
