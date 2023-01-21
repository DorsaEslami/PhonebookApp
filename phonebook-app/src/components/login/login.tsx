/* #region  [- import -] */
import { Form, Row, Col, Input, Button } from "antd";
import { ChangeEvent, FC, useState } from "react"
import './login.css';
import { useNavigate } from "react-router";
/* #endregion */

const Login: FC = (): JSX.Element => {

  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("dorsa");
  const [password, setPassword] = useState<string>("dorsa");

  const login = () => {
    localStorage.setItem('token', 'dorsa');
    navigate("/dashboard");
  }

  return (
    <div className="login-container">
      <Row className="main-content-row">
        <Col md={0} lg={12} xl={10} xxl={9} className='login-image-col'>
          <img src="../img/login.png" alt="login image" className="login-image" />
        </Col>
        <Col md={0} lg={0} xl={1} xxl={3}></Col>
        <Col md={24} lg={12} xl={13} xxl={12} className='login-form-col'>
          <p className="welcome-title">Welcome to Phonebook app</p>
          <Form className='login-form' onFinish={login} >
            <Form.Item
              label="Username"
              name="username"
              initialValue={username}
              rules={[
                { required: true, message: 'Please input your username!' },
                () => ({
                  validator(_, value) {
                    if (value === 'dorsa') {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Username is "dorsa".'));
                  },
                }),
              ]}
              hasFeedback
            >
              <Input allowClear={true} name="username" value={username} onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)} />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              initialValue={password}
              rules={[
                { required: true, message: 'Please input your password!' },
                () => ({
                  validator(_, value) {
                    if (value === 'dorsa') {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Password is "dorsa".'));
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password name="password" value={password} allowClear={true} onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="login-submit-button">Submit</Button>
          </Form>
        </Col>
      </Row>
    </div>

  )
}

export default Login;