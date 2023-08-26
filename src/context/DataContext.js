// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";
const DataContext = createContext();
export function DataContextProvider({ children }) {
  const [whatsAppNo, setWhatsAppNo] = useState("");
  const [displayNo, setDisplayNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");
  const timestamp = Timestamp.now();
  const clearErrorMsg = () => {
    setErrorMsg("");
    setMessage("");
  };

  const SetWhatsappNumber = (inputNo) => {
    addDoc(collection(db, "whatsappNumber"), {
      inputNo,
      timestamp,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setErrorMsg(err.code);
      });
  };

  const SetDisplayNumber = (inputNo) => {
    addDoc(collection(db, "displayNumber"), {
      inputNo,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setErrorMsg(err.code);
      });
  };

  const getLatestWhatsAppNumber = async () => {
    try {
      const q = query(
        collection(db, "whatsappNumber"),
        orderBy("timestamp", "desc"),
        limit(1)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const latestData = querySnapshot.docs[0].data();
        return latestData; // Return the latest data
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching latest WhatsApp Number data:", error);
      return null;
    }
  };

  useEffect(() => {
    getLatestWhatsAppNumber();
  }, []);
  return (
    <DataContext.Provider
      value={{
        loading,
        errorMsg,
        clearErrorMsg,
        message,
        SetWhatsappNumber,
        SetDisplayNumber,
        whatsAppNo,
        displayNo,
        getLatestWhatsAppNumber,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}