


export default function ThumbMenu(props) {
    

    
    return (
        <>
 
        {props.list.map((item, index) => (            
        <div className="thumb-item" key={index}>
                
                <div className="thumb-item-image">
                    <img src={item.image} alt="" />
                </div>
                <div className="thumb-item-title">
                    {item.title}
       
                </div>
            </div>
        ))}
        </>
    )
}
