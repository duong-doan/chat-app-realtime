import React from "react";
import { db } from "../firebase/configFirebase";

const useFirebase = (collection, condition) => {
  const [rooms, setRooms] = React.useState([]);

  React.useEffect(() => {
    const collectionRef = db.collection(collection).orderBy("createdAt");
    // condition format
    // {
    //  fieldCompare: "createdAt",
    //  operator: "==",
    //  valueCompare: "today"
    // }
    //
    if (condition) {
      collectionRef.where(
        condition.fieldCompare,
        condition.operator,
        condition.valueCompare
      );
    } else {
      return;
    }
    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setRooms(documents);
    });
    return unsubscribe;
  }, [collection, condition]);
  return rooms;
};

export default useFirebase;
