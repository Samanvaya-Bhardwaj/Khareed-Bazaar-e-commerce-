import React , {useState, useEffect}from 'react'
import { useParams } from 'react-router'
// import axios from 'axios' 
import { NavLink } from 'react-router-dom';


// export default function Productinfo() {

    const Productinfo= ()=>{
        const {id} = useParams();
        const [product, setProduct] = useState([]);
        const [loading, setLoading] = useState(false);


       useEffect(()=>{
        const getProduct = async () =>{
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
       },[]); 

       const Loading = () =>{
        return(
            <>
            Loading...
            </>
        )
       }

       const ShowProduct= () =>{
        return(
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width="400px"/>
            </div>
            <div className="col-md-6">
                <h4 className='text-uppercse text-black-50' >
                    {product.category}
                </h4>
                <h1 className='display-5'>
                    {product.title}
                </h1>
                <p className="lead">
                    Rating {product.rating && product.rating.rate}
                </p>
                <h3 className="dispaly-6 fw-bold my-4">$ {product.price}</h3>
                <p className="lead">
                    {product.description}
                </p>
                <button className="btn btn-outline-dark mx-4"
                >
                    Add to Cart
                </button>
                <NavLink  to="/cart" className="btn btn-dark mx-4">
                    Go to Cart
                </NavLink>
            </div>
            </>
        )
       }

       return (
        <div>
          <div className="container py-5">
            <div className="row py-4">
{loading ? <Loading/> : <ShowProduct/>}
            </div>
          </div>
        </div>
       );
    }
    export default Productinfo;
