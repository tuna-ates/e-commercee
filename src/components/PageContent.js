

import { Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { Route } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import ProductPage from "../pages/ProductPage";


const PageContent=()=>{
    return <>
   <Switch>
    <Route path="/" exact>
        <HomePage/>
    </Route>
    <Route path="/homePage" exact> 
        <HomePage/>
    </Route>
    <Route path="/productList" exact>
        <ProductListPage/>
    </Route>
    <Route path="/productList/:productId" exact>
        <ProductPage/>
    </Route>
    <Route path="*" exact>
        <h1>404 Sayfa Bulunamdı</h1>
    </Route>
   </Switch>
     
    </>
     
    
      
    
      
           
    
    
    }
    export default PageContent;