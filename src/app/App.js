import React from 'react'
import Link from 'next/link';

const App = (props) => {
    return (
      <>
        <div className=" font-bold text-xl">Hello {props.name[2]}</div>
        <div className=" font-bold text-xl">Your Birthdate is: {props.date}</div>
      </>
    );
}

export default App