import ThumbMenu from "../components/thumb/ThumbMenu";

const Trabajos = () => {
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
  <div className="title"> Trabajos</div>
  <div className="thumb-menu">
    <ThumbMenu list={list} />
  </div>
  </>
  );
};

export default Trabajos;
