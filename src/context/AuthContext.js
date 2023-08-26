// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");

  // register a new user
  const Register = async (signInData) => {
    const { firstName, lastName, email, password } = signInData;
    // Perform login logic and set the authenticated user
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setAuthUser(res.user);
        setMessage("User Created Successfully");
      })
      .catch((err) => {
        setErrorMsg(err.code);
      });

    addDoc(collection(db, "users"), {
      firstName,
      lastName,
      email,
      addedBy: authUser?.email,
      addedOn: Timestamp.now(),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setErrorMsg(err.code);
      });
  };

  // login with credentials
  const login = (user) => {
    const { email, password } = user;
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setAuthUser(res.user);
        setMessage("Welcome");
      })
      .catch((err) => {
        setErrorMsg(err.code);
      });
  };

  // user Logout
  const logout = () => {
    setAuthUser(null);
    signOut(auth);
  };

  // reset password
  const Resetpassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        console.log(res);
        setMessage("Email sent. Please check Your email ");
      })
      .catch((err) => {
        setErrorMsg(err.code);
      });
  };

  // get add users
  const getUsers = async () => {
    try {
      const usersCollection = collection(db, "users");
      const querySnapshot = await getDocs(usersCollection);

      const usersData = [];
      querySnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });

      setUserList(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  };

  const clearErrorMsg = () => {
    setErrorMsg("");
    setMessage("");
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        login,
        logout,
        Resetpassword,
        Register,
        userList,
        getUsers,
        loading,
        errorMsg,
        clearErrorMsg,
        message,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
