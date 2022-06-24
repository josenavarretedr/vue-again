const functions = require('firebase-functions');
const admin = require('firebase-admin')

admin.initializeApp()

const db = admin.firestore()
const auth = admin.auth()


exports.AddUserRole = functions.auth.user().onCreate(async (authUser) => {
  if (authUser.email) {
    const customClaims = {
      student: true,
    }
    try {
      
      var_ = await admin.auth().setCustomUserClaims(authUser.uid, customClaims)
      return db.collection('users').doc(authUser.uid).set({
        email: authUser.email,
        role: customClaims,
        profile: {
          name: '',
          lastName: '',
          birthDate: '',
          dni: '',
          email: authUser.email,
          cellphone: '',
          wsp: false,
          adress: ''
        },
        courses: [],
        coursesRequests: []
      })
    } catch (error) {
      console.log(error)
    }
  }
})