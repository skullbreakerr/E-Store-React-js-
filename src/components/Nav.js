import React, { useEffect, useState } from 'react';
import '../style.css';
import Category from './Category.js';
import Product from './Product.js';
import { Fetcher } from './Fetcher.js';
function Nav() {
  const [categories, setCategories] = useState({ errorMessage: '', data: [] });
  const [products, setProducts] = useState({ errorMessage: '', data: [] });
  useEffect(() => {
    const FetchData = async () => {
      const responseObject = await Fetcher('/categories');
      setCategories(responseObject);
    };

    FetchData();
  }, []);

  const handleCategoryClick = (id) => {
    const FetchData = async () => {
      const responseObject = await Fetcher('/products?catd='+id);
      setProducts(responseObject);
    };

    FetchData();
  };

  // Rendering Products
  const renderProducts = () => {
    return products.data.map((p) => <div>{p.title}</div>);
  };
  // Renderng Cateegories
  const renderCategories = () => {
    return categories.data.map((c) => (
      <Category
        key={c.id}
        id={c.id}
        title={c.title}
        onCategoryClick={() => handleCategoryClick(c.id)}
      />
    ));
  };

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
                {categories.errorMessage && (
                  <div> Error:{categories.errorMessage}</div>
                )}
                {categories.data && renderCategories()}
                {/* I will not close if you click outside of me. */}
              </div>
            </div>
          </div>
        </div>
        <div id="title">
          <span class="material-symbols-outlined">store</span>

          <h1>e-Store</h1>
        </div>
        <div id="auth">
          <a class="btn gap" href="#" role="button">
            Sign in
          </a>
          <div id="bar"></div>
          <a class="btn " href="#" role="button">
            Sign up
          </a>
        </div>
      </div>

      <div id="productPage">
        <h4>
          {products.errorMessage && <div> Error:{products.errorMessage}</div>}
          {products && renderProducts()}
        </h4>
      </div>
    </>
  );
}

export default Nav;
