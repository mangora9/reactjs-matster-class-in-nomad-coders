import React, {useState} from "react";
import {useForm} from "react-hook-form";

// const ToDoList = () => {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState('');
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: {value},
//     } = event;
//     setToDo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError('Todo가 너무 짧습니다.')
//     }
//     console.log(toDo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do"/>
//         <button>Add</button>
//         {toDoError !== '' ? toDoError : null}
//       </form>
//     </div>
//   );
// }

const ToDoList = () => {
  const {register, watch, handleSubmit, formState} = useForm();
  const onValid = (data: any) => {
    console.log(`-> data`, data);
  }
  console.log(`-> formState.errors`, formState.errors);
  return (
    <div>
      <form style={{display: "flex", flexDirection: 'column'}} onSubmit={handleSubmit(onValid)}>
        <input {...register('email', {required: true})} placeholder="Email"/>
        <input {...register('firstName', {required: true})} placeholder="First Name"/>
        <input {...register('lastName', {required: true})} placeholder="Last Name"/>
        <input {...register('userName', {required: true, minLength: 10})} placeholder="User Name"/>
        <input {...register('password', {
          required: "Password is Required",
          minLength: {
            value: 5,
            message: 'Your password is too Short!!'
          }
        })} placeholder="Password"/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
