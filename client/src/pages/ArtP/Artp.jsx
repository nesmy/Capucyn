import React from "react";
import { useState } from "react";
import "./ArtP.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const ArtP = () => {

    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("image");
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const { data, loading, error } = useFetch(
    `/arts/${id}?populate=*`
  );
        console.log(data);
    return (

        <><div className="space">

        </div><div className="product">
                {loading ? "loading" : (<><div className="left">
                    <div className="images">
                        <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data[0]?.attributes?.url} alt="" onClick={e => setSelectedImg("img")} />
                        <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.image2?.data?.attributes?.url} alt="" onClick={e => setSelectedImg("image2")} />
                    </div>
                    <div className="mainImg">
                        <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg]?.data[0]?.attributes?.url} alt="" />
                    </div>
                </div>
                    <div className="right">
                        <h1>{data?.attributes?.title}</h1>
                        <span className="price">${data?.attributes?.price}</span>
                        <p>{data?.attributes?.desc}</p>
                        <div className="quantity">
                            <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
                            {quantity}
                            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                        </div>
                        <button className="add" onClick={() => dispatch(addToCart({
                            id: data.id,
                            title: data.attributes.title,
                            desc: data.attributes.desc,
                            price: data.attributes.price,
                            img: data.attributes.img.data[0].attributes.url,
                            quantity,
                        }))}>
                            <AddShoppingCartIcon /> ADD TO CART
                        </button>
                        
                        
                        <div className="space"></div>
                        
                    </div></>)}
            </div></>
    );
};
export default ArtP;