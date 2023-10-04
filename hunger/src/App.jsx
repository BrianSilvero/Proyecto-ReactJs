import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a la tienda de Hunger"/>
    </>
  )
}

export default App
