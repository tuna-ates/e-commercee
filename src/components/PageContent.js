

import { Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { Route } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";


const PageContent=()=>{
    return <>
   <Switch>
    <Route path="/" exact>
        <HomePage/>
    </Route>
    <Route path="/homePage"> 
        <HomePage/>
    </Route>
    <Route path="/productList" exact>
        <ProductListPage/>
    </Route>

   </Switch>
     
    </>
     
    
      
    
      
           
    
    
    }
    export default PageContent;