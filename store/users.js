import { firestoreAction } from 'vuexfire'
import { merge } from 'lodash'

import { UserModel } from '@/store/models/UserModel'

import { db } from '~/plugins/firebase'

const getCollections = () => {
  return db.collection('users')
}

export const state = () => ({
  list: []
})

export const getters = {
  list: (state) => state.list
}

export const actions = {
  setListRef: firestoreAction(({ bindFirestoreRef }) => {
    const collection = getCollections()
    bindFirestoreRef('list', collection)
  }),
  get: firestoreAction(async (context, { userID }) => {

    const collection = getCollections()

    const res = await collection.doc(userID).get()
    if (!res.exists) return UserModel.getInitData()

    const data = merge(UserModel.getInitData(), res.data())
    data.id = res.id

    return data
  }),
  update: firestoreAction(async (context, { userID, doc }) => {
    const collection = getCollections()
    await collection.doc(userID).set(doc)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }),
  follow: firestoreAction(async (context, { userID, doc }) => {
    const collection = getCollections()
    await collection.doc(userID).update(doc)
      .catch((err) => {
        console.log(err)
      })
  }),
}
