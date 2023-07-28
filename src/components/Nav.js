import React,{useEffect,useState} from 'react';
import '../style.css';

function Nav() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/skullbreakerr/e-storeAPI/categories'
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data);
        valueData = results.map((data) => <div>{d.title}</div>);
      });
  }, []);
  return (
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
              {results.map((data) => (
                <div key={data.id}>{data.title}</div>
              ))}
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
  );
}

export default Nav;
