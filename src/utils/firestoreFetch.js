import { collection, getDocs, orderBy, query, where } from "@firebase/firestore";
import db from "./firebaseConfig";

export const firestoreFetch = async (categoryId) => {
    let q;
    if (categoryId) {
        q = query(collection(db, "products"), where('categoryId', '==', categoryId));
    } else {
        q = query(collection(db, "products"), orderBy('title'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map( document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}