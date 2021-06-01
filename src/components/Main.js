import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [apple, setApple] = useState(null);

  const URL = "https://appleap.herokuapp.com/apple";

  const getApple = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setApple(data);
  };

  const createApple = async (apples) => {
    // make post request to create people
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apples),
    });
    // update list of people
    getApple();
  };

  const updateApple = async (apples, id) => {
    // make post request to create people
    await fetch(URL + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apples),
    })
    // update list of people
    getApple()
  }

  const deleteApple = async id => {
    // make post request to create people
    await fetch(URL + id, {
      method: "delete",
    })
    // update list of people
    getApple()
  }

  useEffect(() => getApple(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index apple={apple} createApple={createApple} />
        </Route>
        <Route
          path="/apple/:id"
          render={(rp) => (
            <Show
            apple={apple}
              updateApple={updateApple}
              deleteApple={deleteApple}
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  );
}

export default Main;