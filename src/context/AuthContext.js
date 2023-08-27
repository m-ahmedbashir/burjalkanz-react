// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  sendEmailVerification,
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
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setAuthUser(res.user);
        setMessage("User Created Successfully");
        setLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err.code);
        setLoading(false);
      });

    addDoc(collection(db, "users"), {
      firstName,
      lastName,
      email,
      addedBy: authUser?.email,
      addedOn: Timestamp.now(),
    }).catch((err) => {
      setErrorMsg(err.code);
    });
  };

  // login with credentials
  const login = (user) => {
    const { email, password } = user;
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setAuthUser(res.user);
        setMessage("Welcome");
        setLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err.code);
        setLoading(false);
      });
  };

  // user Logout
  const logout = () => {
    setAuthUser(null);
    setLoading(true);
    signOut(auth);
    setLoading(false);
  };

  // reset password
  const Resetpassword = (email) => {
    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        setLoading(false);
        setMessage("Email sent. Please check Your email ");
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.code);
      });
  };

  // get add users
  const getUsers = async () => {
    try {
      const usersCollection = collection(db, "users");
      setLoading(true);
      const querySnapshot = await getDocs(usersCollection);

      const usersData = [];
      querySnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });

      setLoading(false);
      setUserList(usersData);
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
      return [];
    }
  };

  const verifyEmail = () => {
    setLoading(true);
    sendEmailVerification(auth.currentUser)
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.code);
      });
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
        verifyEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
