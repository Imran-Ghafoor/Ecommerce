import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context/ProductContext.jsx";
import { FilterContextProvider } from "./context/FilterContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH_DOMAIN;
const clientid = import.meta.env.VITE_CLIENT_ID;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientid}
      authorizationParams={{
        redirectUri: window.location.origin,
      }}
    >
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </Auth0Provider>
  </StrictMode>
);
