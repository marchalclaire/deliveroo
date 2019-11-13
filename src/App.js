import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header.js";
import "./App.css";
import logo from "./logo.svg";
import MenuContainer from "./components/MenuContainer.js";

const App = () => {
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Indicateur de chargement

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
              <div className="valider-mon-panier">Valider mon panier</div>
              <div className="text-4">Votre panier est vide</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
