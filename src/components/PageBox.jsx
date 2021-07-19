import React from 'react';
import { PagesBoxes } from '../styles/styled'

export default function PageBox(props) {
    const { pageNum } = props
    return (
        <PagesBoxes>
            <p>{pageNum}</p>
        </PagesBoxes>
    )
}