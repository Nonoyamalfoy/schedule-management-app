import React from "react";
import { Route, Switch } from "react-router";
import { Home, SignIn, SignUp, PasswordReset, Calendar, Diaries, ToDoList } from "./templates";
import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin/reset"} component={PasswordReset} />
      <Auth>
        <Route exact path={"/calendar"} component={Calendar} />
        <Route exact path={"/diaries"} component={Diaries} />
        <Route exact path={"/todoList"} component={ToDoList} />
        <Route exact path={"(/)?"} component={Home} />
      </Auth>
    </Switch>
  );
};

export default Router;
