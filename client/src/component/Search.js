import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {skillsUpdate} from '../redux/slices/asyncAction'

export const Search = () => {
  const [currentInput, setCurrentInput] = useState('')
  const info = useSelector(state => state.skills)
  const dispatch = useDispatch()

  console.log(info.status)

  const changeHandle = (e) => {
    console.log(e.target.value)
    setCurrentInput(e.target.value)
    dispatch(skillsUpdate(e.target.value))
  }
  
  return (
    <input value={currentInput} onChange={changeHandle}></input>
  )
}
