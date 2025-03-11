import { useState, ChangeEvent } from "react";

interface FieldConfig {
  type: string;
  required?: boolean;
  defaultValue?: string;
}

const useFormFields = (fieldsConfig: Record<string, FieldConfig>) => {
  const initialState = Object.keys(fieldsConfig).reduce(
    (acc, field) => {
      acc[field] = fieldsConfig[field].defaultValue ?? "";
      return acc;
    },
    {} as Record<string, string>
  );

  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (fieldsConfig[name]?.required && !value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: "Este campo es obligatorio" }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const setAllValues = (newValues: Record<string, string>) => {
    setValues((prev) => ({ ...prev, ...newValues }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors: Record<string, string> = {};

    Object.keys(fieldsConfig).forEach((field) => {
      if (fieldsConfig[field].required && !values[field].trim()) {
        newErrors[field] = "Este campo es obligatorio";
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  return { values, errors, onChange, validate, setValues: setAllValues };
};

export default useFormFields;
