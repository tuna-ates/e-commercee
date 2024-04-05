

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
import PrivateRoute from "./PrivateRoute";


const PageContent = () => {
    return <>
        <Switch>
            <PrivateRoute path="/" exact>
                <HomePage />
            </PrivateRoute>
            <PrivateRoute path="/homePage" exact>
                <HomePage />
            </PrivateRoute>
            <PrivateRoute path="/productList" exact>
                <ProductListPage />
            </PrivateRoute>
            <PrivateRoute path="/productList/:productId" exact>
                <ProductPage />
            </PrivateRoute>
            <PrivateRoute path="/about" exact>
                <AboutPage />
            </PrivateRoute>
            <PrivateRoute path="/team" exact>
                <Team />
            </PrivateRoute>
            <PrivateRoute path="/contact" exact>
                <ContactPage />
            </PrivateRoute>
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