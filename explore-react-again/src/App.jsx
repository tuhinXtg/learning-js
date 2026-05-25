import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Device></Device>
      <Device></Device>
      <Device></Device>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}

function Device(){
  return <h2>This Device: Laptop</h2>
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
    <div className='student'>
      <h3>This is a Student</h3>
      <p>Name: </p>
      <p>age: </p>
    </div>
  )
}

function Developer(){
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
