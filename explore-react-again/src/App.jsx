import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
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

function Student() {

  return (
    <>
      <h3>This is a Student</h3>
      <p>Name: </p>
      <p>age: </p>
    </>
  )
}

export default App
