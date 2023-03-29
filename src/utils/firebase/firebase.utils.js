import {initializeApp} from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'; //for authentication

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'; //to use firestore database


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBADPqwpx3Hw8s85Efkb8vL5cLqWnoj_fA",
    authDomain: "styles-clothing-db-b70ab.firebaseapp.com",
    projectId: "styles-clothing-db-b70ab",
    storageBucket: "styles-clothing-db-b70ab.appspot.com",
    messagingSenderId: "945900231555",
    appId: "1:945900231555:web:eba87ece1eb4017bf0b4b6"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);


  const provider=new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth=getAuth();
  
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);


  //create db
  export const db=getFirestore();

  export const createUserDocumentFromAuth=async(userAuth)=>{
    const userDocRef=doc(db,'users', userAuth.uid);

    const userSnapshot=await getDoc(userDocRef);

    if(!userSnapshot.exists()){
      const {displayName,email}=userAuth;
      const createdAt=new Date();

      try{
        await setDoc(userDocRef,{
          displayName,email,createdAt
        });
      }
      catch(error){
        console.log('error');
      }
    }
    return userDocRef;

  }