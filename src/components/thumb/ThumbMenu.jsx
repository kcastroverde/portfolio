



export default function ThumbMenu(props) {

    const open = (item) => {
        props.setProyect(item);
        props.setIsOpen(true);
    }

    return (
        <>

            {props.list.map((item, index) => (
                <div className={`thumb-item ${item.background}`} key={index}>

                    <div className="item-icon">
                        {item.image}
                    </div>
                    <div className="thumb-item-title">
                        {item.title}
                        {item.hoverText ?
                            <div onClick={() => open(item)} className="hover-text">
                                {item.hoverText}
                                <div>mostrar más...</div>
                            </div>
                            : null}
                    </div>
                    {item.footer? <div className="thumb-item-footer">{item.footer}</div>: null}
                </div>
            ))}
        </>
    )
}
