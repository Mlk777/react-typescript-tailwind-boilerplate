import * as React from 'react';

export interface HelloWorldProps {
  userName: string;
  language: string
}

export const App = (props: HelloWorldProps) => (
  
  <div className='w-full h-full flex flex-col justify-center items-center'>
    <h1 className='text-5xl text-blue-600 leading-relaxed text-center'>Hi beautiful {props.userName}! Enjoy this React Tailwind {props.language} boilerplate </h1>
  </div>
);
