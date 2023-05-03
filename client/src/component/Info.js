import React from 'react'
import { useSelector } from 'react-redux'

export const Info = () => {
  const info = useSelector(state => state.skills)

  console.log(info.value)
  return (
    <>
    <h3>{info.status}</h3>
    <ul>
      {
        (info.status === 'succeeded' && info.value?.length > 0) ? (
          info.value.map(el => (
            <li key={el.id}>{el.name}</li>
          ))
        ) : (
          <p>null</p>
        )
        }
    </ul>
    </>
  )
}
