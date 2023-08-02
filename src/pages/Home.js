import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import brand2 from "../images/brand2.webp";
import brand1 from "../images/brand1.jpeg";
import brand4 from "../images/brand4.webp";
import brand11 from "../images/brand11.jpg";
import { NavLink, Link } from "react-router-dom";
import { db } from "../Firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import { Grid, Avatar } from "@mui/material";
import NYX_1 from "../images/NYX_1.jpeg"
import Carousel from "react-material-ui-carousel";
import "./Home.css";
import Lipsticks from "./Lipsticks";


const Home = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {

    const q = query(collection(db, 'brand'));

    const unsub = onSnapshot(q, (querySnapshot) => {
      let productList = [];
      querySnapshot.forEach((doc) => {
        productList.push({ ...doc.data(), id: doc.id });
      });
      setProduct(productList);
    });
    return () => unsub();

  }, []);

  return (
    <div>
      <Grid
        style={{ display: "flex", flexDirection: "row", gridGap: 50 }}
        container
        sx={{ marginTop: 8 }}>
        {product.map((p) => (
          <div style={{ marginLeft: 10 }}>
              <Avatar style={{ width: 100, height: 100 }}
                src={p.product}></Avatar>
              <Typography>{p.name}</Typography>
          </div>
        ))}
      </Grid >
      <Grid>
        <Carousel >
          <div style={{ marginTop: 30 }}>
            <img
              className="img"
              style={{ marginTop: 50, width: "70%", height: 350 }}
              src={brand4}
              alt="lakme"></img>
          </div>
          <div style={{ marginTop: 30 }}>
            <Link to={{ pathname: "/maybelline" }}>
              <img
                className="img"
                style={{ marginTop: 50, width: "70%", height: 350 }}
                src={brand1}
                alt="maybelline">
              </img>
            </Link>
          </div>
          <div style={{ marginTop: 30 }}>
            <img
              className="img"
              style={{ marginTop: 50, width: "70%", height: 350 }}
              src={brand11}
              alt="loreal">
            </img>
          </div>
          <div style={{ marginTop: 30 }}>
            <Link to={{ pathname: "/cover" }}>
              <img
                className="img"
                style={{ marginTop: 50, width: "70%", height: 350, borderBottom: "solid" }}
                src={brand2}
                alt="cover girl">
              </img>
            </Link>
          </div>
        </Carousel>
      </Grid>
      <Lipsticks></Lipsticks>
    </div>
  )
}
export default Home;