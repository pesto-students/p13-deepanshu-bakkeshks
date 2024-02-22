import React from 'react'

function Book({title,author,year}) {
  return (
     <>
     <div>
        <h3>Title: {title}</h3>
        <p>Author: {author}</p>
        <p>Year: {year}</p>
    </div>
     </>
  )
}

export default Book