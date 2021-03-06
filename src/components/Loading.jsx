import React from 'react';
import { } from '../styles/Book.css'
import { Load } from '../styles/styled'

function Loading() {
    return (
        <Load>
            <div className="load-title"></div>
            <div className="load-shelf">
                <div className="load-book"></div>
                <div className="load-book"></div>
                <div className="load-book"></div>
            </div>
        </Load>
    )
}

export default Loading