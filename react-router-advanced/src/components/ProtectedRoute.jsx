import { Route, Redirect } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();  

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" /> 
        )
      }
    />
  );
};

export default ProtectedRoute;