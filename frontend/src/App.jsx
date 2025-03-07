import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./components/pages/HomePage/HomePage.jsx";
import LoginPage from "./components/pages/LoginPage/LoginPage.jsx";
import SignupPage from "./components/pages/SignupPage/SignupPage.jsx";
import SettingsPage from "./components/pages/SettingsPage/SettingsPage.jsx";
import ProfilePage from "./components/pages/ProfilePage/ProfilePage.jsx";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { userThemeStore } from "./store/useThemeStore.js";

function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const { theme } = userThemeStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser) {
    return <div>Loading...</div>;
  }
  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignupPage /> : <Navigate to="/" />}
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
