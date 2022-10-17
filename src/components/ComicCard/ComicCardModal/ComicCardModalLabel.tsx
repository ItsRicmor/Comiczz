import React from 'react'

type Props = {
    title: string;
    value: string;
}

export const ComicCardModalLabel = ({ title, value }: Props) => {
  return (
    <div className="d-flex">
        <p className='h6 fw-bold'>{title}</p>
        <p className='h6 fw-light'>{value}</p>
    </div>
  )
}
