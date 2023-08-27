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
    setLoading(true);
    addDoc(collection(db, "whatsappNumber"), {
      inputNo,
      timestamp,
    })
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err.code);
        setLoading(false);
      });
  };

  const SetDisplayNumber = (inputNo) => {
    setLoading(true);
    addDoc(collection(db, "displayNumber"), {
      inputNo,
      timestamp,
    })
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
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
        setWhatsAppNo(latestData);
        // return latestData; // Return the latest data
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error fetching latest WhatsApp Number data:", error);
      return null;
    }
  };

  const getLatestDisplay = async () => {
    try {
      const q = query(
        collection(db, "displayNumber"),
        orderBy("timestamp", "desc"),
        limit(1)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const latestData = querySnapshot.docs[0].data();
        setDisplayNo(latestData);
        // return latestData; // Return the latest data
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
    getLatestDisplay();
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
        getLatestDisplay,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
