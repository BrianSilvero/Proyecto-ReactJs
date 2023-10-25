
import { Link } from 'react-router-dom'
const Item = ({producto}) => {
    return(
        <div>
            <p>{producto.title}</p>
            <p>${producto.price}</p>
            <Link to ={`/item/${producto.id}`}>Ver mas</Link>
        </div>
    )
}


export default Item
                        