import React from 'react';
import { } from '../styles/Book.css'

function Book(props) {
    const { book } = props
    let image = ""
    if (book.volumeInfo.imageLinks) {
        image = book.volumeInfo.imageLinks.thumbnail
    }
    return(
        <>
        {
            image !== "" &&
            (<li>
                <img className="book-image" src={image} alt=""/><br />
                <p className="book-title">{book.volumeInfo.title}</p>
            </li>) 
        }
        </>
    )
}

export default Book