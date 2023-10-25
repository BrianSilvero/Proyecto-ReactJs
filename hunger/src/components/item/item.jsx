
import { Link } from 'react-router-dom'
const Item = ({producto}) => {
    return(
        <div>
            <p>{producto.name}</p>
            <p>${producto.precio}</p>
            <Link to ={`/item/${producto.id}`}>Ver mas</Link>
        </div>
    )
}


export default Item
                        