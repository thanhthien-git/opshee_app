"use client";
import {
  Button,
  Checkbox,
  Divider,
  Form,
  Image,
  notification,
  Row,
} from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import "./styles.scss";
import Link from "next/link";
import InputComponent from "@/app/components/common/input";
import logo from "../../../../../public/google.png";
import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { IUserLogin } from "@/interfaces/user.interface";
import { ROLE } from "@/enums/role.enum";
import { AuthService } from "@/services/authService";
import { StorageService } from "@/services/storageService";

export default function OpsheeLoginForm() {
  const { control, getValues } = useForm();
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSetRemember = useCallback(() => {
    setRemember((prev) => !prev);
  }, []);

  const handleSubmit = useCallback(async () => {
    const formData: IUserLogin = {
      username: getValues("username"),
      password: getValues("password"),
      role: ROLE.USER,
    };
    try {
      setLoading(true);
      const res = await AuthService.login(formData);
      console.log(res);
      StorageService.saveLogin(String(res), remember);
      notification.success({ message: "Đăng nhập thành công!" });
    } catch (err) {
      notification.error({ message: (err as Error).message });
    } finally {
      setLoading(false);
    }
  }, [notification, remember]);

  return (
    <div className="opshee-login-form">
      <div className="opshee-login-form-wrapper">
        <Row justify={"end"} className="login-form">
          <Form className="login-form-content" onFinish={handleSubmit}>
            <Row className="login-row">
              <Title level={3} style={{ margin: 0 }}>
                Đăng nhập
              </Title>
            </Row>
            <Row className="login-row">
              <InputComponent
                name="username"
                control={control}
                className="input-styled"
                placeholder="Số điện thoại/Tên đăng nhập"
              />
            </Row>
            <Row className="login-row">
              <InputComponent
                control={control}
                type="password"
                className="input-styled"
                name="password"
                placeholder="Mật khẩu"
              />
            </Row>
            <Row className="login-row">
              <Checkbox onChange={handleSetRemember}>Lưu đăng nhập</Checkbox>
            </Row>
            <Row className="login-row">
              <Button
                className="button-styled"
                htmlType="submit"
                disabled={loading}
                loading={loading}
              >
                Đăng nhập
              </Button>
            </Row>
            <Row className="login-row">
              <Link href={"#"}>Quên mật khẩu</Link>
            </Row>
            <Divider
              orientation="center"
              style={{
                borderColor: "#dbdbdb",
                color: "#dbdbdb",
                marginBottom: 20,
              }}
            >
              Hoặc
            </Divider>
            <Row className="login-row">
              <Button
                disabled={loading}
                icon={<Image src={logo.src} preview={false} height={30} />}
                className="button-styled-white"
                htmlType="submit"
              >
                Google
              </Button>
            </Row>
            <Row className="login-row">
              <Text style={{ width: "100%", textAlign: "center" }}>
                Bạn mới biết đến Opshee? <Link href={"#"}>Đăng ký ngay</Link>
              </Text>
            </Row>
          </Form>
        </Row>
      </div>
    </div>
  );
}
