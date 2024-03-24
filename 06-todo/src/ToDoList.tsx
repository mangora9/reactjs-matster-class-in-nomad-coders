import React from "react";
import {useForm} from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  passwordConfirm: string;
  extraError?: string;
}

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    setError
  } = useForm<IForm>({
    defaultValues: {email: '@naver.com'}
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.passwordConfirm) {
      setError(
        'passwordConfirm',
        {message: 'Password are not same.'},
        {shouldFocus: true}
      );
    }
    // setError('extraError', {message: 'Server offline.'});
  };
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
        <input
          {...register('firstName', {
            required: 'write here!',
            validate: {
              noMango: (value) => value.includes('mango') ? 'no mango allowed' : true,
              noIn9: (value) => value.includes('in9') ? 'no in9 allowed' : true,
            },
          })}
          placeholder="First Name"
        />
        <span>
          {errors?.firstName?.message}
        </span>
        <input {...register('lastName', {required: 'write here!'})} placeholder="Last Name"/>
        <span>
          {errors?.lastName?.message}
        </span>
        <input {...register('userName', {required: 'write here!', minLength: 5})} placeholder="User Name"/>
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
        <input
          {...register('passwordConfirm', {
            required: "Password Confirm is Required",
            minLength: {
              value: 5,
              message: 'Your password is too Short!!'
            }
          })} placeholder="Password Confirm"/>
        <span>
          {errors?.passwordConfirm?.message}
        </span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
};

export default ToDoList;
