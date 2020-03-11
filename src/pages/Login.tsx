import * as React from "react";
import { Button, Layout, Row, Col } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { RouteComponentProps } from "react-router";
import { auth, GoogleAuthProvider } from "../firebase/index";
import { Colors } from "../components/colors";
import BrandLogo from "components/BrandLogo";
import Spinner from "../components/Spinner";

type Props = RouteComponentProps;

const Login: React.FunctionComponent<Props> = props => {
  React.useEffect(() => {
    if (sessionStorage.getItem("signIn")) {
      auth
        .getRedirectResult()
        .then(res => {
          if (res.credential) {
            props.history.push("/");
            sessionStorage.removeItem("signIn");
          } else {
            sessionStorage.removeItem("signIn");
            location.reload();
          }
        })
        .catch(error => {
          console.log(error);
          sessionStorage.removeItem("signIn");
          location.reload();
        });
    }
  }, []);

  const login = () => {
    // firebaseからのリダイレクト時処理実行までに時間がかかり、loading判定するための設定
    sessionStorage.setItem("signIn", "start");
    const provider = GoogleAuthProvider.setCustomParameters({
      hd: `${process.env.REACT_APP_ACCESSIBLE_DOMAIN}`
    });
    auth.signInWithRedirect(provider);
  };

  if (sessionStorage.getItem("signIn") === "start") {
    return <Spinner />;
  }

  return (
    <Layout>
      <Layout.Content>
        <Row align={"middle"} style={{ height: "100vh" }}>
          <Col span={8} offset={8}>
            <BrandLogo
              style={{
                fontSize: "150px",
                display: "block",
                marginBottom: "2rem"
              }}
            />
            <Button
              loading={false}
              shape={"round"}
              size={"large"}
              onClick={() => login()}
              style={{ width: "100%" }}
              icon={<GoogleOutlined style={{ color: Colors.GoogleRed }} />}
            >
              ログイン
            </Button>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default Login;
