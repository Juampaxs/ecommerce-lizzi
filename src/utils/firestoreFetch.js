import { collection, getDocs, query, where } from "@firebase/firestore";
import db from "./firebaseConfig";

export const firestoreFetch = async (categoryId) => {
    let q;
    if (categoryId) {
        q = query(collection(db, "products"), where('categoryId', '==', categoryId));
    } else {
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map( document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}