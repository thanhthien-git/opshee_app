import { Col, Form, notification, Row } from "antd";
import InputComponent from "../../common/input";
import { useForm } from "react-hook-form";
import DatePickerComponent from "../../common/date-picker";
import StyledButton from "../../common/styled-button";
import { useCallback, useEffect, useState } from "react";
import { ERROR } from "@/constants/error-message";
import "./styles.scss";
import {
  FormOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  ReloadOutlined,
  RightOutlined,
  UserOutlined,
} from "@ant-design/icons";
import StyledSteps from "../../common/styled-steps";
import Title from "antd/es/typography/Title";

export default function RegisterTab() {
  const [loading, setLoading] = useState<boolean>(false);
  const { control, getValues, handleSubmit, reset } = useForm();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = useCallback(() => {
    setCurrentStep(currentStep + 1);
  }, [currentStep]);

  const handlePrevStep = useCallback(() => {
    setCurrentStep(currentStep - 1);
  }, [currentStep]);

  const onRegister = useCallback(async () => {
    const formData = getValues();
    console.log(formData);
  }, []);

  const resetForm = useCallback(() => {
    reset();
    setCurrentStep(0);
  }, []);

  const handleCheckInfo = useCallback(async () => {
    try {
      const phone = getValues("userPhone");
      const userName = getValues("userName");
      console.log(`${phone} ${userName}`);
    } catch (err) {
      notification.error({ message: (err as Error).message });
    }
  }, [getValues]);

  const onSubmit = useCallback(async () => {
    const data = getValues();
    console.log(data);
  }, [getValues]);

  useEffect(() => {
    switch (currentStep) {
      case 1:
        handleCheckInfo();
        break;
      case 3:
        onSubmit();
    }
  }, [currentStep]);

  const steps = [
    {
      step: 1,
      title: "Thông tin đăng nhập",
      content: (
        <Col>
          <Row>
            <InputComponent
              control={control}
              className="input-styled"
              name="userPhone"
              placeholder="Số điện thoại"
              prefix={<PhoneOutlined className="styled-icon" />}
              rules={{ required: ERROR.REQUIRED_FIELD }}
            />
          </Row>
          <Row>
            <InputComponent
              control={control}
              name="userName"
              className="input-styled"
              placeholder="Tên người dùng"
              prefix={<UserOutlined className="styled-icon" />}
              rules={{ required: ERROR.REQUIRED_FIELD }}
            />
          </Row>
        </Col>
      ),
    },
    {
      step: 2,
      title: "Mật khẩu",
      content: (
        <Col>
          <Row>
            <InputComponent
              control={control}
              name="userPassword"
              className="input-styled"
              type="password"
              placeholder="Mật khẩu"
              prefix={<LockOutlined className="styled-icon" />}
              rules={{ required: ERROR.REQUIRED_FIELD }}
            />
          </Row>
          <Row>
            <InputComponent
              control={control}
              name="userRetypePassword"
              className="input-styled"
              type="password"
              prefix={<LockOutlined className="styled-icon" />}
              placeholder="Nhập lại mật khẩu"
              rules={{
                required: ERROR.REQUIRED_FIELD,
                validate: (value, formValue) =>
                  value === formValue.userPassword || "Mật khẩu không khớp",
              }}
            />
          </Row>
        </Col>
      ),
    },
    {
      step: 3,
      title: "Thông tin cá nhân",
      content: (
        <Col>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <InputComponent
                className="input-styled"
                control={control}
                name="userFirstName"
                prefix={<FormOutlined className="styled-icon" />}
                placeholder="Họ"
                rules={{ required: ERROR.REQUIRED_FIELD }}
              />
            </Col>
            <Col span={12}>
              <InputComponent
                control={control}
                name="userLastName"
                prefix={<FormOutlined className="styled-icon" />}
                className="input-styled"
                placeholder="Tên"
                rules={{ required: ERROR.REQUIRED_FIELD }}
              />
            </Col>
          </Row>
          <Row justify={"space-between"}>
            <Col span={7}>
              <DatePickerComponent
                control={control}
                prefix={<FormOutlined className="styled-icon" />}
                name="dayOfBirth"
                className="input-styled"
                rules={{ required: ERROR.REQUIRED_FIELD }}
              />
            </Col>
            <Col span={16}>
              <InputComponent
                control={control}
                prefix={<MailOutlined className="styled-icon" />}
                name="userEmail"
                className="input-styled"
                placeholder="Example@gmail.com"
              />
            </Col>
          </Row>
        </Col>
      ),
    },
  ];

  return (
    <Form className="form-register">
      <StyledSteps current={currentStep} items={steps} />
      <div className="steps-content">{steps[currentStep].content}</div>
      <Row justify={"center"} className="steps-footer">
        {currentStep === 2 ? (
          <>
            <StyledButton
              onClick={handleSubmit(onSubmit)}
              disabled={loading}
              loading={loading}
              style={{
                width: "20%",
                borderColor: "#ff8300",
                marginRight: 20,
              }}
            >
              Đăng ký
            </StyledButton>
            <StyledButton icon={<ReloadOutlined />} onClick={resetForm} />
          </>
        ) : (
          <>
            {currentStep !== 0 && (
              <StyledButton
                icon={<LeftOutlined />}
                onClick={handlePrevStep}
                style={{ marginRight: 10 }}
              />
            )}
            <StyledButton icon={<RightOutlined />} onClick={handleNextStep} />
          </>
        )}
      </Row>
    </Form>
  );
}
