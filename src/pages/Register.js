import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";

const authUser = (email, password) => {
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
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

const Register = () => {
  return (
    <div>
      <button onClick={() => authUser('user@user.com', 'password')}>Register</button>
    </div>
  );
}

export default Register;