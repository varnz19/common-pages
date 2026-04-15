import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Forgot from "../pages/auth/Forgot";
import Reset from "../pages/auth/Reset";
import Profile from "../pages/user/Profile";

const AppRoutes = () => {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/login" />} />

      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />

      <Route
        path="/signup"
        element={
          <AuthLayout>
            <Signup />
          </AuthLayout>
        }
      />

      <Route
        path="/forgot"
        element={
          <AuthLayout>
            <Forgot />
          </AuthLayout>
        }
      />

      <Route
        path="/reset"
        element={
          <AuthLayout>
            <Reset />
          </AuthLayout>
        }
      />

    </Routes>
  );
};

export default AppRoutes;