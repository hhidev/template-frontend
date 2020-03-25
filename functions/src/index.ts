import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp(functions.config().firebase);

// 新規登録したユーザを無効にする
export const afterLogin = functions.auth.user().onCreate(user => {
  admin
    .auth()
    .updateUser(user.uid, {
      disabled: true
    })
    .then(value => console.log(value))
    .catch(error => console.log(error));
});
