import { Record } from "immutable";

export interface IUser {
  id: number | null;
  name: string | null;
  email: string | null;
  signInCount: number | null;
}

const UserRecord = Record<IUser>({
  id: null,
  name: null,
  email: null,
  signInCount: null
});

class User extends UserRecord {
  /**
   * ログインAPIで取得したユーザ情報で新しいrecordを作る
   *
   * @param user - apiで取得したuser情報json
   */
  static fromJS(user) {
    return new this().withMutations(record => {
      record
        .set("id", user.id)
        .set("name", user.name)
        .set("email", user.email)
        .set("signInCount", user.sign_in_count);
    });
  }
}

export default User;
