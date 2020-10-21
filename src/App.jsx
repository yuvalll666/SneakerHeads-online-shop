import React, { useState, useEffect, createContext } from "react";
import { Switch, Route } from "react-router-dom";
import { getCurrentUser } from "./services/userService";
import "./App.css";

//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Result from "./components/Result";
import Signin from "./components/Signin";
import Logout from "./components/Logout";
import Footer from "./components/Footer";
import UserPage from "./components/UserPage";
import ProductPage from "./components/ProductPage";
import UploadProduct from "./components/UploadProduct";
import ProductsLandingPage from "./components/ProductsLandingPage";
import Cart from "./components/Cart";
import ThankYou from "./components/utils/ThankYou";
import HistoryPage from "./components/HistoryPage";

export const UserContext = createContext(null);

function App() {
  const [user, SetUser] = useState({});

  useEffect(() => {
    const user = getCurrentUser();
    SetUser(user);
  }, []);

  return (
    <React.Fragment>
      <header>
        <Navbar user={user} />
      </header>
      <main className=" flex-fill">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/step1" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/result" component={Result} />
          <Route path="/Signin" component={Signin} />
          <Route path="/logout" component={Logout} />
          <Route path="/products/:productId" component={ProductPage} />
          <Route exact path="/products" component={ProductsLandingPage} />
          <Route exact path="/thank-you" component={ThankYou} />
          <Route exact path="/history" component={HistoryPage} />

          <UserContext.Provider value={user}>
            <Route path="/cart" component={Cart} />
            <Route path="/user-page" component={UserPage} />
            <Route path="/upload-product" component={UploadProduct} />
          </UserContext.Provider>
        </Switch>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </React.Fragment>
  );
}

export default App;
