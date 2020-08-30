import React, { useCallback, useState } from "react";
import {TextInput, PrimaryButton} from  "../components/Uikit";
import { resetPassword} from "../reducks/users/operations";
import { useDispatch } from "react-redux";
import {push} from "connected-react-router";


const PasswordReset = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [setEmail]);

  return (
    <div className="form">
      <h2>Reset your password</h2>
      <TextInput 
        fullWidth={true}
        label={"Email"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />
      <div className="module-spacer--small" />
      <div>
        <PrimaryButton 
          label={"Reset your password"}
          onClick={() => dispatch(resetPassword(email))}
        />
      </div>
      <div className="module-spacer--small" />
      <p onClick={() => dispatch(push("/signin"))}>Return to login screen</p>
    </div>
  )
}

export default PasswordReset;