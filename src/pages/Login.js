import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";

const authUser = (email, password) => {
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user=", user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("errorMessage=", errorMessage)
      // ..
    });

};

const Login = () => {
  return (
    <div>
      <button onClick={() => authUser('user@user.com', 'password')}>Login</button>
    </div>
  );
}

export default Login;