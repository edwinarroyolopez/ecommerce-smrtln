import { useReducer, useEffect } from "react";

const initialState = {
  name: "",
  email: "",
  country: "",
  contact: "",
  shippingAddress: "",
  orderNote: "",
  deliveryTime: "Mañana",
};

const formReducer = (state: typeof initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.payload.field]: action.payload.value };
    case "RESET_FIELDS":
      return initialState;
    default:
      return state;
  }
};

export const useCheckoutForm = (customerData: any) => {
  const [formState, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    if (customerData && Object.keys(customerData).length > 0) {
      dispatch({ type: "UPDATE_FIELD", payload: { field: "name", value: customerData.name } });
      dispatch({ type: "UPDATE_FIELD", payload: { field: "email", value: customerData.email } });
      dispatch({ type: "UPDATE_FIELD", payload: { field: "country", value: customerData.country } });
      dispatch({ type: "UPDATE_FIELD", payload: { field: "contact", value: customerData.contact } });
      dispatch({
        type: "UPDATE_FIELD",
        payload: { field: "shippingAddress", value: customerData.shippingAddress },
      });
    }
  }, [customerData]);

  return { formState, dispatch };
};