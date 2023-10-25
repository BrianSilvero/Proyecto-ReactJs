import { useEffect, useState } from "react";
import { Spin } from "antd";
import Item from "../item/item";
import style from "../itemListContainer/styles.module.css";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { nombreCategoria } = useParams();

  useEffect(() => {
    const url = nombreCategoria
      ? `https://fakestoreapi.com/products/category/${nombreCategoria}`
      : `https://fakestoreapi.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error); // Fix the error handling here
      });
    console.log(nombreCategoria);
  }, []);

  if (loading) return <Spin />;
  return (
    <div className={style.container}>
      {products.map((pr, index) => (
        <Item producto={pr} key={index} />
      ))}
    </div>
  );
};

export default ItemListContainer;
