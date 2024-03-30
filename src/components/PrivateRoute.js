import { useSelector } from "react-redux";
import { Route } from "react-router-dom/";
import { Redirect } from "react-router-dom/";

function PrivateRoute({ children, ...rest }) {
    const token = localStorage.getItem("token")
    //const user = useSelector(store => store.user)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                token ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;