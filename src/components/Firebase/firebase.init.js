import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* steps for authentication
----------------------------

Step-1: Initial Setup 
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method
---------------------------

Step-2:
1. Create login Component
2. Create Register Component
3. Create Route for Login and Registration
------------------------------------------

Step-3:
1. set up signIn method
2. set up logIn method
3. user state
4. special observer
5. return necessary methods and states from use firebase
-------------------------------------------

Step-4:
1. create a auth context
2. create context Provider
3. set Context Provider Context value
4. use auth Provider
5. create useAuth Hook
--------------------------------------------

Stet-5:
1. create a private route
2. set private route
3. 

*/