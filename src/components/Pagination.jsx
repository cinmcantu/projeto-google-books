import React from 'react';
import { } from '../styles/Book.css'
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';
import PageBox from './PageBox';
import { Link } from "react-router-dom";


export default function Pagination(props) {
    const { search, currentPagNum } = props

    return (
        <section className="pagination">
            {
                currentPagNum !== "1" &&
                (<>
                    <Link to={`/busca/${search}/${1}`}>
                        <CgIcons.CgChevronDoubleLeft />
                    </Link>
                    <Link to={`/busca/${search}/${parseInt(currentPagNum) - 1}`}>
                        <MdIcons.MdKeyboardArrowLeft />
                    </Link>
                </>)
            }
            <PageBox pageNum={currentPagNum} />
            <Link to={`/busca/${search}/${parseInt(currentPagNum) + 1}`}>
                <MdIcons.MdKeyboardArrowRight />
            </Link>
        </section>
    )
}