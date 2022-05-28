import { AnimatePresence, motion } from "framer-motion";




export default function ProyectModal(props) {



    

    const close = () => {
        props.setIsOpen(false)
    }


    return (
        <AnimatePresence>
            {props.isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div onClick={close}  className="dark-background">
                        <div onClick={(e)=>e.stopPropagation()} className="modal-container">
                            <div className="in-modal modal-header">
                                <h2>{props.proyect.hoverText}</h2>
                            </div>
                            <div className="in-modal modal-body">
                                {props.proyect.modalImage.map((image, index) => (
                                    <div key={index} className='proyect-img'>
                                        <img src={image} alt={image} />    
                                    </div>
                                ))}
                            </div>
                            <div className="in-modal modal-footer">
                            <a href={props.proyect.link} target='_blank'><button className="visitar">visitar</button></a>
                                <button onClick={close} className="cerrar">cerrar</button>
                            </div>

                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
