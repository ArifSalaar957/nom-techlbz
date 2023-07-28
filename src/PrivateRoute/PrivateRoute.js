import React from "react";
import { Route, Navigate  } from "react-router-dom";
import { useState } from "react";

const PrivateRoute = ({ element: Element, ...rest }) => {
    const [authenticated, setAuthenticated] = useState(false);
    return (
      <Route
        {...rest}
        element={authenticated ? <Element /> : <Navigate to="/login" />}
      />
    );
  };

export default PrivateRoute;
