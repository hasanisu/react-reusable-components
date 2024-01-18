import { useContext } from "react";
import cn from "../../utils/cn";
import Button from "../ui/Button";
import { FormElementContext } from "./Form";

export const FormSubmit = () => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn(" grid grid-cols-1 justify-items-center gap-5 p-5 py-8", {
        "md:grid-cols-2": double,
      })}
    >
      <div className="w-full max-w-md col-start-1 md:col-start-2 md:flex justify-end">
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default FormSubmit;
