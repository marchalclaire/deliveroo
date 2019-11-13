import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header.js";
import "./App.css";
import logo from "./logo.svg";
import MenuContainer from "./components/MenuContainer.js";
import Cart from "./components/Cart.js";
import { pathToFileURL } from "url";

const App = () => {
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Indicateur de chargement
  const [items, setItems] = useState([]);
  // pour tester le tab avec une valeur par défault ;
  // const [items, setItems] = useState([{ title: "brunch", price: 20.0 }]);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await axios.get("https://deliveroo-api.now.sh/menu");
    setRestaurant(response.data.restaurant);
    setMenu(response.data.menu);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <div>
          <div className="header">
            <img className="logo" src={logo} alt="logo"></img>
          </div>

          <div className="line-header"></div>
          <Header
            title={restaurant.name}
            text={restaurant.description}
            img={restaurant.picture}
          ></Header>

          <div className="container">
            <div className="container-1">
              {Object.keys(menu).map((key, index) => {
                for (let i = 0; i < menu[key].length; i++) {
                  let currentMenu = menu[key][i];

                  currentMenu.addToCart = () => {
                    const newItems = [...items];
                    // on pourra noter en plus simple : newItems.push(items);
                    // (ceci enverrai l'objet complet à l'enfant avec Image, description..afin de simplifier les elements envoyés on les cible comme ci-dessous.)

                    newItems.push({
                      id: currentMenu.id,
                      title: currentMenu.title,
                      price: currentMenu.price
                      // id: menu[key][i].id,
                      // title: menu[key][i].title,
                      // price: menu[key][i].price
                    });
                    setItems(newItems);
                  };
                }

                return (
                  <MenuContainer
                    key={"menuContainer" + index}
                    title={key}
                    menus={menu[key]}
                  ></MenuContainer>
                );
              })}
            </div>
            <div className="container-2">
              <Cart
                // on attend une liste à transmettre à l'enfant Cart.
                items={items}
              ></Cart>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
