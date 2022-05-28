import me from '../images/team-avatar-2.png'
import {MdOutlineContactMail} from 'react-icons/md'
import {MdOutlineWeb} from 'react-icons/md'
import {SiSemanticuireact} from 'react-icons/si'

const Dashboard = () => {
  return (
    <>
      <div className="main-side">
        <div className="title dasboard-title">
          <img src={me} alt='me' />
          <div>
            <h1>Kevin Castroverde</h1>
            <h3>Front End Developer</h3>
          </div>
        </div>
        <div className="dashboard-menu">
          <div className="menu-item item-1">
            <h3>tecnologias</h3>
            <SiSemanticuireact className='item-icon' />
          </div>
          <div className="menu-item item-2">
            <h3>proyectos</h3>
            <MdOutlineWeb className='item-icon'/>
          </div>
          <div className="menu-item item-3">
            <h3>contacto</h3>
            <MdOutlineContactMail className='item-icon'/>
          </div>
        </div>
      </div>
    </>
  )
};

export default Dashboard;
