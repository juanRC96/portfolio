import firebase from "../config/firebase"

export async function getSkills(){
    const querySnapshot = await firebase.firestore().collection("skills").get()
    return querySnapshot.docs
};

export async function getStudies(){
    const querySnapshot = await firebase.firestore().collection("studies").get()
    return querySnapshot.docs
};

export async function getAbout(){
    const querySnapshot = await firebase.firestore().collection("about").get();
    return querySnapshot.docs;
};

export async function updateAbout(id,data){
    return await firebase.firestore().doc("about/"+id).set(data)
}

export async function updateSkills(id,data){
    return await firebase.firestore().doc("skills/"+id).set(data)
}

export async function addSkills(data){
    return await firebase.firestore().collection("skills").add(data)
}

export async function deleteSkills(id){
    return await firebase.firestore().doc("skills/"+id).delete()
    
}
