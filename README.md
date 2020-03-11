## template-frontend
- react(typescript)
- storybook
- eslint/prettier
- firebase Authentication
- antD

### 必要なライブラリ群をインストール
```sh
yarn install
```

### firebaseAuthenticationを設定する

### firebase APIkey等を.envファイルに記載

### ローカルサーバ起動
```sh
yarn run start
```
起動すると下記にて接続可能です    
http://localhost:9090/

### コーディングルール
```sh
yarn lint
```
コーディングルールはes-lintとprettierで自動調整されます。  
webpack-dev-server起動中にはhotloadされますが、typecheckはオフにしています（ロードが遅くなるため）。  
git commit時に自動的にスタイルを調整してコミットされるようにしています。  

### APIドキュメント
APIサーバ起動後に、下記でアクセスできます。
http://localhost:9090/api_doc


# 構成
react、react-reduxにて実装していますが、必ずしもredux構成で実装する必要はありません。  
User情報などアプリ全体で共通のものは、Storeに格納するためredux構成としました。  

APIとの通信については、redux内のmiddleware層にて実行するものと、任意の場所で使用できる２種類を用意しています。    
redux時のapi通信：src/store/middleware/api-executor  
それ以外のapi通信：src/utils/api-utils
