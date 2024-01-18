import { createContext } from "react";
import { TForm } from "../../types";
import cn from "../../utils/cn";

export const FormElementContext = createContext<{ double: boolean } | null>(
  null
);

export const Form = ({ children, onSubmit, double = false }: TForm) => {
  return (
    <FormElementContext.Provider value={{ double }}>
      <form
        onSubmit={onSubmit}
        className={cn(
          "border border-gray-300 rounded-lg w-full shadow-sm p-5 mx-auto",
          {
            "max-w-4xl": double,
            "max-w-md": !double,
          }
        )}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};

export default Form;