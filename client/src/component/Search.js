import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {skillsUpdate} from '../redux/slices/asyncAction'

export const Search = () => {
  const [currentInput, setCurrentInput] = useState('')
  const dispatch = useDispatch()

  const changeHandle = (e) => {
    setCurrentInput(e.target.value)
    dispatch(skillsUpdate(e.target.value))
  }
  
  return (
    <input value={currentInput} onChange={changeHandle}></input>
  )
}
