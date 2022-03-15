import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/functions'

let config = {}
if (location.hostname === 'localhost') {
  console.log('🐸 ローカル開発環境')
  config = {
    apiKey: "AIzaSyCBaoMy5QmgMHJSp9EswYGCKrdYu_pTxZ0",
  authDomain: "game-matching-5a80b.firebaseapp.com",
  projectId: "game-matching-5a80b",
  storageBucket: "game-matching-5a80b.appspot.com",
  messagingSenderId: "246763864263",
  appId: "1:246763864263:web:9e209eded9c13dc7447ee2",
  measurementId: "G-H2VJQ6EZPV"
  }
} else {
  console.log('🔥 Firebase ホスティング環境')
  config = JSON.parse(loadTextFileAjaxSync('/__/firebase/init.json', 'application/json'))
}
firebase.initializeApp(config)

export default firebase

// 認証方法
export const authProviders = {
  Email: firebase.auth.EmailAuthProvider.PROVIDER_ID,
}

export const auth = firebase.auth()
export const storage = firebase.storage()
export const functions = firebase.app().functions('asia-northeast1')
export const db = firebase.firestore()
export const firestore = firebase.firestore

function loadTextFileAjaxSync(filePath, mimeType) {
  const xmlhttp = new XMLHttpRequest()
  xmlhttp.open('GET', filePath, false)
  if (mimeType != null) {
    if (xmlhttp.overrideMimeType) {
      xmlhttp.overrideMimeType(mimeType)
    }
  }
  xmlhttp.send()
  if (xmlhttp.status === 200) {
    return xmlhttp.responseText
  } else {
    throw new Error('loadTextFileAjaxSync() response error', xmlhttp.status)
  }
}
