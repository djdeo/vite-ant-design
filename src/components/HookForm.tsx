import React from "react";
import { useForm } from "react-hook-form";

export interface HookFormProps {}

type Inputs = {
  example: string;
  exampleRequired: string;
};

const HookForm: React.SFC<HookFormProps> = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data:any) => console.log('==>',data);
  console.log(watch('example'))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="example" defaultValue="test" ref={register} />
      <br />
      <br />
      <input name="exampleRequired" ref={register({ required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      <br />

      <input type="submit" />
    </form>
  );
};

export default HookForm;
