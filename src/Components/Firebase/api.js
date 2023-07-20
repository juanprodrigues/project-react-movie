import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "./fb";

const collectionName = "websites";

export const saveWebsite = (newLink) =>
  addDoc(collection(db, collectionName), newLink);

export const updateWebsite = (id, updatedFields) =>
  updateDoc(doc(db, collectionName, id), updatedFields);

export const onGetLinks = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName), callback);
  return unsub;
};

export const getWebsites = (collectionName1) => getDocs(collection(db, collectionName1));

export const deleteWebsite = (id) => deleteDoc(doc(db, collectionName, id));

export const getWebsite = (id) => getDoc(doc(db, collectionName, id));
