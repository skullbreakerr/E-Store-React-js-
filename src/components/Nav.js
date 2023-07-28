import React,{useEffect,useState} from 'react';
import '../style.css';
import Category from'./Category.js';
import Product from'./Product.js';
function Nav() {
  const [categories, setCategories] = useState([]);
  const [products,setProducts] = useState([]);
  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/skullbreakerr/e-storeAPI/categories'
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);


  const handleCategoryClick = id=>{
    fetch(
      'https://my-json-server.typicode.com/skullbreakerr/e-storeAPI/categories?catId='+id
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
  }

// Rendering Products
  const renderProducts = () =>{
    return products.map( p=>
       <div>{p.title}</div> 
    )
  }
// Renderng Cateegories
  const renderCategories = ()=>{
    return categories.map( c=>
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={()=> handleCategoryClick(c.id)}/>
    )}

  return (
    <>
    <div id="nav">
      <div id="menu">
        <button
          class="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#staticBackdrop"
          aria-controls="staticBackdrop"
        >
          <span class="material-symbols-outlined">menu_open</span>
        </button>

        <div
          class="offcanvas offcanvas-start"
          data-bs-backdrop="static"
          tabindex="-1"
          id="staticBackdrop"
          aria-labelledby="staticBackdropLabel"
        >
          <div class="offcanvas-header">
            <span
              class=" offcanvas-title custom-gap material-symbols-outlined"
              id="staticBackdropLabel"
            >
              person
            </span>
            <h5 class="offcanvas-title" id="staticBackdropLabel">
              Hello,sign in
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <div>
              { categories && renderCategories() }
              {/* I will not close if you click outside of me. */}
            </div>
          </div>
        </div>
      </div>
       <div id="title">
        <span class="material-symbols-outlined">
        store
        </span>
      
      <h1>e-Store</h1>
      </div>
      <div id="auth">
      <a class="btn gap" href="#" role="button">Sign in</a>
      <div id="bar"></div>
      <a class="btn " href="#" role="button">Sign up</a>
      </div>
    </div>

    <div id="productPage">
         {products && renderProducts()} 
    </div>
  </>
  );
}

export default Nav;
