import * as React from "react";
import { Form, Input, Row, Col, message, Button } from "antd";
import styled from "styled-components";
import { ApiUtils } from "../utils/api-utils";
import { baseUri, authorization } from "../store/middleware/api-executor";

interface State {
  email: string;
  firstPassword: string | null;
  errorMessage: string | null;
}

export default class SignUp extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      firstPassword: null,
      errorMessage: null
    };
  }

  render() {
    return (
      <>
        <h1>アカウント登録</h1>
        <Form>
          <Form.Item>
            <Row>
              <Col span={8}>
                <Input
                  placeholder="登録するメールアドレスを入力してください"
                  onChange={e =>
                    this.setState({
                      email: e.target.value
                    })
                  }
                />
              </Col>
              <Col span={4}>
                <Button type={"primary"} onClick={() => this.createAccount()}>
                  登録する
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
        <section>
          {this.state.firstPassword && (
            <AccountBlock>
              <h2>ログイン情報</h2>
              <p>
                メールアドレス:
                {this.state.email}
              </p>
              <p>
                初期パスワード：
                {this.state.firstPassword}
              </p>
            </AccountBlock>
          )}
        </section>
      </>
    );
  }

  private async createAccount() {
    const json = await ApiUtils.post(
      `${baseUri()}/users`,
      {
        user: {
          email: this.state.email
        }
      },
      {
        headers: authorization()
      }
    );
    if (json.isOK()) {
      this.setState({
        firstPassword: json.data.password,
        errorMessage: null
      });
    } else {
      message.warn(json.error.message);
      this.setState({
        errorMessage: json.error.message
      });
    }
  }
}

const AccountBlock = styled.div`
  margin: 3em 0;
  box-sizing: border-box;
  padding: 40px;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  font-size: 16px;
  color: #999;
`;
