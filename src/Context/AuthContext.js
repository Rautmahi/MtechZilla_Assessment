import React, { useState } from "react";
export const AppContext = React.createContext();
const { Provider } = AppContext;

export default function AppContextProviderComponent(props) {
  const [auth, setAuth] = useState(false);

  const HandleAuth = () => {
    setAuth(true);
  };

  return <Provider value={{ auth, HandleAuth }}>{props.children}</Provider>;
}
