import { getFirestore } from "firebase/firestore";
import { app } from "../firebase";
import { collection, getDocs, doc, setDoc, updateDoc, getDoc } from "firebase/firestore";

const db = getFirestore(app);

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "123123123"));
  const arr = [];

  querySnapshot.forEach((doc) => arr.push(doc.data()));

  return arr;
}

export const getOrders = async () => {
  const querySnapshot = await getDocs(collection(db, "orders"));
  const arr = [];

  querySnapshot.forEach((doc) => arr.push(doc.data()));

  return arr;
}

export const getRequests = async () => {
  const querySnapshot = await getDocs(collection(db, "requests"));
  const arr = [];

  querySnapshot.forEach((doc) => arr.push(doc.data()));

  return arr;
}

export const getUserProducts = async (ids) => {
  const querySnapshot = await getDocs(collection(db, "123123123"));
  const arr = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    if (ids.includes(data.id)) arr.push(data);
  });

  return arr;
}

export const addDoc = () => {
  const newId = new Date().valueOf().toString();

  setDoc(doc(db, "123123123", newId), {
    id: newId,
    city: "Таганрог",
    description: "Была произведена замена крюка запирания двери.",
    images: ["https://43.img.avito.st/640x480/13730141443.jpg"],
    name: "Микроволновая печь Samsung",
    price: "2600",
    type: "microwave",
    inStock: true,
  })
  .then(res => console.log(res))
  .catch(err => console.log(err));
}

export const addOrder = (data) => {
  const newId = new Date().valueOf().toString();
  const order = {...data};
  console.log("cik-", order)

  setDoc(doc(db, "orders", newId), order)
  .then(res => console.log(res))
  .catch(err => console.log(err));
}

export const addRequest = (data) => {
  const newId = new Date().valueOf().toString();
  const request = {...data, id: newId};

  setDoc(doc(db, "requests", newId), request)
  .then(res => console.log(res))
  .catch(err => console.log(err));
}

const updateStatus = (status) => {
  let newStatus = '';

  switch (status) {
    case 'Новый':
      newStatus = 'В процессе';
      break;
    
    case 'В процессе':
      newStatus = 'Завершено';
      break;
    
    case 'Завершено':
      newStatus = 'Новый';
      break;
    
    default:
      return 'Новый'
      break;
  }

  return newStatus;
}

export const updateRequest = async (id, status) => {
  const querySnapshot = await getDocs(collection(db, "requests"));
  let docId = '';
  const newStatus = updateStatus(status);

  querySnapshot.forEach((doc) => {
    if (doc.data().id === id) docId = doc.id;
  });

  const docRef = await doc(db, "requests", docId);

  await updateDoc(docRef, {
    status: newStatus
  });
}