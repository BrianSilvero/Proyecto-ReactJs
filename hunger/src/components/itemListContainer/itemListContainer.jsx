import { useEffect, useState } from "react"
import { Spin } from 'antd';
import Item from "../item/item";

const ItemListContainer = ({greeting}) => {

    const [products, setProduct] = useState([])

    const promesa = new Promise((resolve,reject) =>{
        const productosArray = [
            {name: "Remera", precio: 7000, id: 1},
            {name: "Gorra", precio: 4500, id: 2},
            {name: "Botella", precio: 4000, id: 3},
            {name: "Agenda", precio: 3500, id: 4}
        ]
        setTimeout(() =>{
            productosArray.length > 0 ? resolve(productosArray) : reject({data: [], message: "No hay productos"})
        },5000)
    })

    useEffect(() => {
        promesa
        .then(res => {
            console.log(res)
            setProduct(res)})
        .catch(error => console.log(error.message))
    }, [])
    return(
        <>
            <h2>{greeting}</h2>
            {products.length > 0 ? (
                <>
                {products.map((prod,index) => <Item key={prod.id} producto={prod}/>)}
                </>
            ) :(
                <Spin />
            )
        
        }
        </>
    )
}
export default ItemListContainer