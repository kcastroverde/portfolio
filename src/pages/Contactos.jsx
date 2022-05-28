import ThumbMenu from "../components/thumb/ThumbMenu";
import contact from "../images/sections/contact.png";
import {FaLinkedin, FaDiscord, FaInstagram , FaWhatsapp , FaTelegramPlane} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import { FaHome } from 'react-icons/fa'
const Contactos = () => {
  const list = [
    {
      title: "LinkedIn",
      image: <FaLinkedin/>,
      footer: 'kevin-castroverde',
      link: 'https://www.linkedin.com/in/kevin-castroverde/'
    },
    {
      title: "Discord",
      image: <FaDiscord/>,
      footer: 'Pixbae#6579',
      link: 'https://discord.com/user/Pixbae#6579'
    },
    {
      title: "Instagram",
      image: <FaInstagram/>,
      footer: '@kef_webdev',
      link: 'https://www.instagram.com/kef_webdev/'
    },
    {
      title: "Whatsapp",
      image: <FaWhatsapp/>,
      footer: '+50760983115',
      link: 'https://wa.me/507660983115'
    },
    {
      title: "Telegram",
      image: <FaTelegramPlane/>,
      footer: '@kcastroverde',
      link: 'https://t.me/kcastroverde'
    },
    {
      title: "correo",
      image: <FiMail/>,
      footer: 'castroverde.kevin@gmail.com',
      link: 'mailto:castroverde.kevin@gmail.com'
    }
  ]
  return (
    <>
      <div className="first-container-menu">
        <div className="movil-home"><FaHome/></div>
        <div className="title">
          <div className="title-img-background"><img src={contact} alt={contact} /></div>
          <div className="description">
            <h1>Contactos</h1>
            <h4>Redes de contacto para comunicarnos en cualquier consulta que quiera realizar </h4>
          </div>
        </div>
        <div className="thumb-menu">
          <ThumbMenu list={list} />
        </div>
      </div>
    </>
  );
};

export default Contactos;
