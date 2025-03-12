import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useFormFields from "@/hooks/useFormFields";

describe("useFormFields Hook", () => {
  const fieldsConfig = {
    name: { type: "text", required: true },
    email: { type: "email", required: true },
    age: { type: "number", required: false, defaultValue: "25" },
  };

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useFormFields(fieldsConfig));
    expect(result.current.values).toEqual({ name: "", email: "", age: "25" });
    expect(result.current.errors).toEqual({});
  });

  it("should update value on change", () => {
    const { result } = renderHook(() => useFormFields(fieldsConfig));
    
    act(() => {
      result.current.onChange({ target: { name: "name", value: "John" } } as any);
    });
    
    expect(result.current.values.name).toBe("John");
  });

  it("should set error when required field is empty", () => {
    const { result } = renderHook(() => useFormFields(fieldsConfig));
    
    act(() => {
      result.current.onChange({ target: { name: "name", value: "" } } as any);
    });
    
    expect(result.current.errors.name).toBe("Este campo es obligatorio");
  });

  it("should validate correctly and return false if required fields are empty", () => {
    const { result } = renderHook(() => useFormFields(fieldsConfig));
    
    act(() => {
      result.current.validate();
    });
    
    expect(result.current.errors.name).toBe("Este campo es obligatorio");
    expect(result.current.errors.email).toBe("Este campo es obligatorio");
  });

  it("should set all values correctly", () => {
    const { result } = renderHook(() => useFormFields(fieldsConfig));
    
    act(() => {
      result.current.setValues({ name: "Alice", email: "alice@example.com", age: "30" });
    });
    
    expect(result.current.values).toEqual({ name: "Alice", email: "alice@example.com", age: "30" });
  });
});
