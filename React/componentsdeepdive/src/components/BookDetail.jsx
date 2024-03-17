import React from 'react'

function BookDetail({title,author,year}) {
  return (
     <>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>{year}</p>
     </>
  )
}

export default BookDetail