import { DatePicker, DatePickerProps } from "antd";
import FormItem from "antd/es/form/FormItem";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import "./styles.scss";

interface IProps extends DatePickerProps {
  name: string;
  control: Control;
  rules?: RegisterOptions;
  className?: string;
  label?: string;
}

export default function DatePickerComponent({
  control,
  name,
  rules,
  className,
  label,
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
          <DatePicker
            {...field}
            format="YYYY-MM-DD"
            allowClear
            placeholder="YYYY-MM-DD"
            className={className}
            {...props}
          />
        </FormItem>
      )}
    />
  );
}
