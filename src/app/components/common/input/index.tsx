import { Input, InputProps } from "antd";
import FormItem from "antd/es/form/FormItem";
import {
  Control,
  Controller,
  FieldError,
  RegisterOptions,
} from "react-hook-form";
import './styles.scss'

interface IProps extends InputProps {
  label?: string;
  name: string;
  placeholder: string;
  rules?: RegisterOptions;
  className?: string;
  error?: FieldError;
  control: Control;
  style?: React.CSSProperties;
}

export default function InputComponent({
  label,
  name,
  placeholder,
  rules,
  control,
  className,
  error,
  ...props
}: Readonly<IProps>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <FormItem
          label={label}
          className="input-custom"
          help={fieldState.error?.message}
          validateStatus={fieldState.invalid ? "error" : "success"}
        >
          <Input
            {...field}
            allowClear
            placeholder={placeholder}
            className={className}
            {...props}
          />
        </FormItem>
      )}
    />
  );
}
