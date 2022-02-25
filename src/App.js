// in src/App.js
import * as React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  CustomRoutes,
  useLogout,
  useAuthenticated,
} from "react-admin";
import { Route } from "react-router-dom";
import jsonServerProvider from "ra-data-json-server";
import authProvider from "./authProvider";

const LoggedOutPage = () => {
  console.log("logged out page");
  return <p>You have been logged out.</p>;
};

const Page = () => {
  useAuthenticated();
  const logout = useLogout();
  const handleClick = () => {
    logout({}, "/loggedout");
  };

  return (
    <>
      This is a page <button onClick={handleClick}>Logout</button>
    </>
  );
};

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    dashboard={Page}
  >
    <Resource name="users" list={ListGuesser} />
    <CustomRoutes noLayout>
      <Route path="/loggedout" element={<LoggedOutPage />} />
      <Route path="/page" element={<Page />} />
    </CustomRoutes>
  </Admin>
);

export default App;
