import './App.css'
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import NotFound from './components/notFound/notFound'
import Bienvenida from './components/bienvenido/bienvenido'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element= {<ItemListContainer/>}/>
        <Route exact path="/bienvenida" element={<Bienvenida/>}/>
        <Route exact path='/category/:id' element= {<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
