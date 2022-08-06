import { getDocs, query, collection } from "firebase/firestore";
import { db } from "../firebase/config";


const getCollection = async (colec) => {
    const q = query(collection(db, colec));
    const querySnapshot = await getDocs(q);
    const productos = []
    querySnapshot.forEach((doc) => {
        productos.push({id: doc.id, ...doc.data()});
    });
    return productos
}

export default getCollection