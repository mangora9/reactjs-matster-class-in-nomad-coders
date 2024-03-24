import React from "react";
import {useForm} from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}

const ToDoList = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<IForm>({
    defaultValues: {email: '@naver.com'}
  });
  const onValid = (data: any) => {
    console.log(`-> data`, data);
  }
  return (
    <div>
      <form style={{display: "flex", flexDirection: 'column'}} onSubmit={handleSubmit(onValid)}>
        <input
          {...register('email', {
            required: 'Email is required.',
            pattern: {value: /^[A-Za-z0-9._%+-]+@naver\.com$/, message: 'Only naver.com'}
          })}
          placeholder="Email"
        />
        <span>
          {errors?.email?.message}
        </span>
        <input {...register('firstName', {required: 'write here!'})} placeholder="First Name"/>
        <span>
          {errors?.firstName?.message}
        </span>
        <input {...register('lastName', {required: 'write here!'})} placeholder="Last Name"/>
        <span>
          {errors?.lastName?.message}
        </span>
        <input {...register('userName', {required: 'write here!', minLength: 10})} placeholder="User Name"/>
        <span>
          {errors?.userName?.message}
        </span>
        <input
          {...register('password', {
            required: "Password is Required",
            minLength: {
              value: 5,
              message: 'Your password is too Short!!'
            }
          })} placeholder="Password"/>
        <span>
          {errors?.password?.message}
        </span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
