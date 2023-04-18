import { useState } from "react";

import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import Button from "../button/button.component";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
//initial values of formFields...
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  //now setting values to formFields using usestate...
  const [formFields, setFormFields] = useState(defaultFormFields);

  //destructuring formFields... as value use hoga ye...
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const SignInwithGoogle = async () => {
    await signInWithGooglePopup();
    //response me access token  milega...
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorect password for email");
          break;
        case "auth/user-not-found":
          alert("no user assosiated with this email");
          break;
        default:
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      {/* name is the key from actual object and value is its value comes from destructuring above */}
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={SignInwithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
