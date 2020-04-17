import React from 'react'
import { useLocation } from 'react-router-dom'

export const NotFoundPage: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <div>
      <h3> 404 buddy </h3>
      <code>{pathname}</code>
    </div>
  )
}
