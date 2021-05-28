import React from "react";
import { MyContext } from "../../common-components/context-provider/dashboard.context";

export const IsValidLogin = () => {
  const { setIsLogin, setUsername, setId } = React.useContext(MyContext);
  const [userLogin, setUserLogin] = React.useState(false);

  const loadUser = (user: any) => {
    const data = new FormData();
    data.append("email", user.email);
    data.append("password", user.password);

    fetch(`http://localhost:8080/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, password: user.password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw "Error en la llamada Ajax";
        }
      })

      .then((json) => [
        setIsLogin(true),
        setId(json.id),
        setUsername(`${json.lastName}  ${json.lastName}`),
      ])
      .catch(function (err) {
        setIsLogin(false);
        console.log(err);
      });
  };

  return { loadUser, userLogin };
};