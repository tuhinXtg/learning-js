import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Todo from './todo'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Todo task="Learn react" isdone={true}></Todo>
      <Todo task="Explore core react" isdone={false}></Todo>
      <Todo task="Try JSX" isdone={true}></Todo>
      {/* <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student grade="7" score="95"></Student>
      <Student grade="5" score="90"></Student>
      <Student grade="11" score="80"></Student>
      <Developer></Developer> */}
    </>
  )
}


function Person() {

  const age = 25;
  const money = 20;
  const person = { name: 'Tuhin', age: 23 }

  return (
    <h3>I am {person.name}  with age: {age}</h3>
  )
}


// const {grade, score} = {grade: '7', score: '95'};
function Student({ grade = 1, score = 0 }) {

  return (
    <div className='student'>
      <h3>This is a Student</h3>
      <p>Name: {grade}</p>
      <p>Score: {score}</p>
    </div>
  )
}

function Developer() {
  const developerstyle = {
    margin: '20px',
    padding: '20px',
    border: '3px solid purple',
    borderRadius: '10px'
  }
  return (
    <div style={developerstyle}>
      <h5>Devs Deps</h5>
      <p>Coding: </p>
    </div>
  )
}

export default App
