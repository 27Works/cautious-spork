export const firebaseConfig = {
	apiKey: `${process.env.FIREBASEAPIKEY}`,
	authDomain: `${process.env.FIREBASEPROJECTID}.firebaseapp.com`,
	projectId: process.env.FIREBASEPROJECTID,
	storageBucket: `${process.env.FIREBASEPROJECTID}.appspot.com`,
	messagingSenderId: process.env.FIREBASEMESSGGSENDERID,
	appId: process.env.FIREBASEAPPID,
	measurementId: process.env.FIREBASEMEASUREMENTID,
}
