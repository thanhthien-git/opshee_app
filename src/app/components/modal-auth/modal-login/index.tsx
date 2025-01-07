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
import StyledButton from "../../common/styled-button";

interface IModalProps {
  setClose: () => void;
}

export default function LoginTab({ setClose }: Readonly<IModalProps>) {
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
      StorageService.saveLogin(String(res), remember);
      notification.success({ message: "Đăng nhập thành công!" });
      setClose();
    } catch (err) {
      notification.error({ message: (err as Error).message });
    } finally {
      setLoading(false);
    }
  }, [notification, remember, setClose]);

  return (
    <div className="opshee-login-form">
      <div className="opshee-login-form-wrapper">
        <Form className="login-form-content" onFinish={handleSubmit}>
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
              className="input-styled"
              name="password"
              placeholder="Mật khẩu"
              type="password"
            />
          </Row>
          <Row className="login-row">
            <Checkbox onChange={handleSetRemember}>Lưu đăng nhập</Checkbox>
          </Row>
          <Row className="login-row">
            <StyledButton
              htmlType="submit"
              disabled={loading}
              loading={loading}
            >
              Đăng nhập
            </StyledButton>
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
            >
              Google
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  );
}
