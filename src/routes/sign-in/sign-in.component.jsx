
import { signInWithGooglePopup,auth } from "../../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'


const SignIn=()=>{
    
    const logGoogleUser= async()=>{
        const response=await signInWithGooglePopup();
        //response me access token  milega...
        const userDocRef=await createUserDocumentFromAuth(response.user);
    }
   

    return(
        <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with goole popup</button>
        <SignUpForm/>
        </div>
    )
}

export default SignIn;