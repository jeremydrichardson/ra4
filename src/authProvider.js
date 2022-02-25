const authProvider = {
  checkError: (error) => {
    console.log("authProvider.checkError: ", error);
    Promise.resolve();
  },
  checkAuth: (params) => {
    console.log("authProvider.checkAuth", params);
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn) {
      return Promise.resolve();
    }

    return Promise.reject("User is not authorized.");
  },
  login: ({ username, password }) => {
    console.log("authProvider.login");
    if (username === "demo" && password === "demo") {
      localStorage.setItem("loggedIn", true);
      return Promise.resolve();
    }
    return Promise.reject("That user doesn't exist");
  },
  logout: () => {
    console.log("authProvider.logout");
    localStorage.removeItem("loggedIn");
    return Promise.resolve();
  },
  getIdentity: () => {
    return Promise.resolve({ user: "demo" });
  },
  getPermissions: () => {
    return Promise.resolve({});
  },
};

export default authProvider;
