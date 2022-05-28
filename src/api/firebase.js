import { getFirestore } from "firebase/firestore";
import { app } from "../firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

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
    city: "Таганрог",
    description: "Поменяли аккумулятор, состояние 99%",
    images: ["https://cdn.svyaznoy.ru/upload/iblock/073/0731c561dffdb0bd07be41d2218fb7a6.jpg/resize/483x483/hq/"],
    name: "Apple iPhone 12 Pro 256GB",
    price: "77990",
    type: "phone",
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
  const request = {...data};

  setDoc(doc(db, "requests", newId), request)
  .then(res => console.log(res))
  .catch(err => console.log(err));
}