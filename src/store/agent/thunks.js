import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { onLoadFavorites } from "./agentSlice";

export const startLoadingAgents = () => {
    return async (dispatch, getState) => {
      const { uid } = getState().auth;
  
      const collectionRef = collection(FirebaseDB, `${uid}/favorites/agent`);
      const { docs } = await getDocs(collectionRef);
      console.log(docs);
      // const agents = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
      // dispatch(onLoadFavorites(agents));
    };
  };