import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.init";
import { useState } from "react";



const Login = () => {
    const [user , setUser] = useState(null); 

    const provider = new GoogleAuthProvider

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => {
                console.log('ERROR', error)
                setUser(null)
            })
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('Sign Out Done');
            setUser(null)
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            {/* <button onClick={handleGoogleSignIn}>Loging with google</button>
            <br />
            <br />
            <button onClick={handleGoogleSignOut}>Log Out</button> */}

            

            {/* jodi User thake toh Log out out dekhao ar jodi user na thake tahole sign in dekhao */}

            {
                user ? <button onClick={handleGoogleSignOut}>Log Out</button> : <button onClick={handleGoogleSignIn}>Loging with google</button>
            }



            {
                user && <div>
                    <h2>Name : {user.displayName}</h2>
                    <h3>Email : {user.email}</h3>
                    <img src= {user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;