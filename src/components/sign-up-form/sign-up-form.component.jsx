import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss';
import Button from "../button/button.component";
//initial values of formFields...
const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm=()=>{
    //now setting values to formFields using usestate...
    const [formFields,setFormFields]=useState(defaultFormFields);

    //destructuring formFields... as value use hoga ye...
    const{displayName,email,password,confirmPassword}=formFields;

    const handleSubmit=async(event)=>{
        event.preventDefault();
        if(password!==confirmPassword){
            alert("Password do not match");
            return;
        }
        try{
            const {user}=await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user,{displayName});
           
            
        }
        catch(error){
            if(error.code==='auth/email-already-in-use'){
                alert('Email already in use');
            }
            else{
                console.log('error ',error);
            }
        }
    }
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value});
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign Up with your email and password</span>
            {/* name is the key from actual object and value is its value comes from destructuring above */}
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName}/> 

               
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

                <Button type="submit">Sign up</Button>
                
            </form>
        </div>
    )
};

export default SignUpForm;