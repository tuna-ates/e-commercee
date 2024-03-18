

import { Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { Route } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import ProductPage from "../pages/ProductPage";
import AboutPage from "../pages/AboutPage";
import Team from "../pages/Team";
import ContactPage from "../pages/ContactPage";
import SignUp from "../pages/SignUp";
import LoginPage from "../pages/LoginPage";


const PageContent = () => {
    return <>
        <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/homePage" exact>
                <HomePage />
            </Route>
            <Route path="/productList" exact>
                <ProductListPage />
            </Route>
            <Route path="/productList/:productId" exact>
                <ProductPage />
            </Route>
            <Route path="/about" exact>
                <AboutPage />
            </Route>
            <Route path="/team" exact>
                <Team />
            </Route>
            <Route path="/contact" exact>
                <ContactPage />
            </Route>
            <Route path="/signup" exact>
                <SignUp />
            </Route>
            <Route path="/login" exact>
                <LoginPage />
            </Route>
            <Route path="*" exact>
                <h1>404 Sayfa Bulunamdı</h1>
            </Route>
        </Switch>

    </>








}
export default PageContent;