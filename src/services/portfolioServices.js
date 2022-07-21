import firebase from "../config/firebase"

export async function getAllSkills(){
    const querySnapshot = await firebase.firestore().collection("skills").get()
    return querySnapshot.docs
};

export async function getAllStudies(){
    const querySnapshot = await firebase.firestore().collection("studies").get()
    return querySnapshot.docs
};