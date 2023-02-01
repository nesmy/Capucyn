import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";


const Navbar = () => {

    const [open,setOpen] = useState(false)
    const products = useSelector(state=>state.cart.products)

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="item" >
                    <Link className="link" to="/">About</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/projects">Projects</Link>
                </div>
                <div className="item">
                    <Link className="link" to="/contact">Contact</Link>
                </div>
                
                <div className="icons">
                            
                            
                            <div className="cartIcon" onClick={()=>setOpen(!open)}>
                                <ShoppingCartOutlinedIcon/>
                                <span>{products.length}</span>
                            </div>
                        </div>
            </div>
            {open && <Cart/>}
        </div>
    );
};


export default Navbar;