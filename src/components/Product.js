import React from'react';

const Product = ({title,image,description,price,stock})=>{

  return(
    <>
    <article>
      <div>
        {title}
      </div>
      <figure>
        <div>
          <img src={image} alt={title}/>
        </div>
      </figure>
    <aside>
      <div>
        <h3>Description</h3>
        <label>
          {description}
        </label>
      </div>
    </aside>
    <aside>
      <div>
        <h3>Price</h3>
        <label>
          {price}
        </label>
      </div>
      <div>
        <label>Unit left:
          {stock}
        </label>
        <label>Free Delivery</label>
      </div>
      <div>
        <button>Buy</button>
        <button>Add to cart</button>
      </div>
    </aside>
    </article>
    </>
  )
}
export default Product;