import { useEffect, useState } from 'react';
import Product from './Product'
import { json } from 'react-router-dom';

function ProductList(){
const api_url="https://fakestoreapi.com/products";
const [products,setProducts]=useState([]);
const [categories,setCategories]=useState([]);
useEffect(()=>{
fetch(api_url)
.then((res)=>res.json)
.then((data)=>setProducts(data));



},[]);
const getProducts=()=>{
  fetch(api_url).then((res)=>res.json).then((data)=>setProducts(data))
}
const getCategories=()=>{
  fetch(`${api_url}/categories`).then((res)=>res.json).then((data)=>setCategories(data))
}
const getProductInCategory=(catName)=>{
console.log(catName);
  fetch(`${api_url}/category/${catName}`).then((res)=>res.json()).then((data)=>setProducts(data))

}


useEffect(()=>{
getProducts();
getCategories();


});



  return (
<>

<h1 className="text-center p-3">Our Product</h1>
<div className="container">
<button  onClick={()=>{
  getProducts()
}} className='btn btn-info' >All</button>
{categories.map((cat)=>{
  return (<button key={cat} onClick={()=>{
    getProductInCategory(cat)
  }} className='btn btn-info' >{cat}</button>);
  


})}

<div className='row'>
{products.map((product)=>{
  return(
<div className="col-3" key={product.id}>
<Product product={product}  showButton={true}/>
</div>



  )



})}
</div>
</div>



</>




);






}
export default ProductList;