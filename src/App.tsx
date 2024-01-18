// import { FormEvent, useState } from "react";
// import NormalForm from "./components/NormalForm/NormalForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/ReusableForm";

// import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
// import Modal from "./components/ui/Modal";

function App() {
  // const [modal, setModal] = useState(false);
  // const handleModalClose = () => {
  //   setModal((prev) => !prev);
  // };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log("Clicked");
  // };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTest>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  type TTest = z.infer<typeof TestSchema>;

  return (
    // <Container>
    //   <div className="h-screen w-full flex justify-center items-center">
    //     <Button onClick={() => setModal((prev) => !prev)}>Open Modal</Button>
    //     <Modal isOpen={modal} onClose={handleModalClose}>
    //       <Modal.Header>
    //         <h4>This is Modal Title</h4>
    //         <Modal.CloseButton />
    //       </Modal.Header>
    //       <form onSubmit={handleSubmit}>
    //         <button type="submit">Submit</button>
    //       </form>
    //     </Modal>
    //   </div>
    // </Container>

    <Container>
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <div className="w-full max-w-md">
            <label className="block " htmlFor="name">
              Name
            </label>
            <input type="text" id="name" {...register("name")} />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <Input
            type="email"
            register={register("email")}
            errors={errors}
            label="Email"
          />
          <Input
            type="checkbox"
            register={register("email")}
            errors={errors}
            label="Email"
          />
          <Input
            type="radio"
            register={register("email")}
            errors={errors}
            label="Email"
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  );
}

export default App;
