import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/functions'

if (!firebase.apps.length) {
  let config = {}
  if (location.hostname === 'localhost') {
    console.log('🐸 ローカル開発環境')
    config = {
      apiKey: "AIzaSyAcm95EC2cYBcYHH45YTXJft8GaHr8ukzY",
      authDomain: "matting-game.firebaseapp.com",
      projectId: "matting-game",
      storageBucket: "matting-game.appspot.com",
      messagingSenderId: "136550576650",
      appId: "1:136550576650:web:22e43483d3ba3bacefe5f3",
      measurementId: "G-ZS326KCNC5"
    }
  } else {
    console.log('🔥 Firebase ホスティング環境')
    config = JSON.parse(loadTextFileAjaxSync('/__/firebase/init.json', 'application/json'))
  }
  firebase.initializeApp(config)
}

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
