
import { collection, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from './config'

export async function save(data) {
  try {
    const dbCollection = collection(db, "contacts")
    const docRef = await addDoc(dbCollection, data);
    return docRef.id;
  } catch (e) {
    return null;
  }
}

export async function update(id) {
  const docRef = doc(db, "contacts", id);
  await updateDoc(docRef, {
    favorite: !favorite
  });

}

export async function remove(id) {
  const docRef = doc(db, "contacts", id)
  await deleteDoc(docRef);
}