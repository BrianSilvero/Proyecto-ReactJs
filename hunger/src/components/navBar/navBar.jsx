import CartWidget from '../cartWidget/cartWidget';
import style from './styles.module.css'
import { NavLink} from 'react-router-dom'

const NavBar = () => {

  const arrayDeCategoria = [
    "Remera",
    "Gorra",
    "Botella",
    "Taza"
  ]

  return(
    <div className={style.navbar}>
      <h1>Hunger</h1>
      {arrayDeCategoria.map((cat,index) => <p key={index}>{cat}</p>)}
      <CartWidget/>
    </div>
  )
}

export default NavBar