import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore/lite';
import { valorantApi } from '../../api';
import { FirebaseDB } from '../../firebase/config';
import { convertAgents } from '../../hooks';
import {
  onAddNewFavorite,
  onDeleteFavorite,
  onLoadAgents,
  onLoadFavorites,
  onSaving,
} from './agentSlice';

export const startLoadingFavorites = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const collectionRef = collection(FirebaseDB, `${uid}/agents/favorites`);
    const { docs } = await getDocs(collectionRef);
    const agents = docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    dispatch(onLoadFavorites(agents));
  };
};

export const startLoadingAgents = () => {
  return async (dispatch) => {
    try {
      const { data } = await valorantApi.get('/agents');
      const agents = convertAgents(data.data);
      dispatch(onLoadAgents(agents));
    } catch (error) {
      console.error('Error loading the agents', error);
    }
  };
};

export const startSavingFavorite = (agent) => {
  return async (dispatch, getState) => {
    dispatch(onSaving());

    const { uid } = getState().auth;

    const favoriteToFirebase = { ...agent };

    const newDoc = doc(collection(FirebaseDB, `${uid}/agents/favorites`));
    await setDoc(newDoc, agent);
    const newAgent = {
      ...agent,
      id: newDoc.id,
    };
    const docRef = doc(FirebaseDB, `${uid}/agents/favorites/${newAgent.id}`);

    await setDoc(docRef, favoriteToFirebase, { merge: true });

    dispatch(onAddNewFavorite(newAgent));
  };
};

export const startDeleteFavorite = (agent) => {
  return async (dispatch, getState) => {
    dispatch(onSaving());
    const { uid } = getState().auth;
    const { favorites } = getState().agent;
    const favAgent = favorites.filter((fav) => fav.name === agent.name);
    console.log(favAgent);

    const docRef = doc(FirebaseDB, `${uid}/agents/favorites/${favAgent[0].id}`);

    await deleteDoc(docRef);
    dispatch(onDeleteFavorite(favAgent.id));
  };
};
