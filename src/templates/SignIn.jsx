import React, { useCallback, useState } from "react";
import {TextInput, PrimaryButton} from  "../components/Uikit";
import {signIn} from "../reducks/users/operations";
import { useDispatch } from "react-redux";
import {push} from "connected-react-router";


const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [setEmail]);
  const inputPassword = useCallback((event) => {
    setPassword(event.target.value)
  }, [setPassword]);

  return (
    <div className="form">
      <h2>Signin</h2>
      <TextInput 
        fullWidth={true}
        label={"email"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />
      <TextInput 
        fullWidth={true}
        label={"password"}
        multiline={false}
        required={true}
        rows={1}
        value={password}
        type={"password"}
        onChange={inputPassword}
      />
      <div className="module-spacer--small" />
      <div>
        <PrimaryButton 
          label={"SIGNIN"}
          onClick={() => dispatch(signIn(email, password))}
        />
      </div>
      <div className="module-spacer--small" />
      <p onClick={() => dispatch(push("/signup"))}>Click here for the first time users </p>
      <p onClick={() => dispatch(push("/signin/reset"))}>Forgot your password?</p>
    </div>
  )
}

export default SignIn;