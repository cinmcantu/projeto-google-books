import React from 'react'
import * as HIIcons from "react-icons/hi";
import * as BSIcons from "react-icons/bs";
import { } from '../styles/Book.css'
import { ButtonBlue } from '../styles/styled'

export default function SearchFilterBtn(props) {
    const {
        cleanFilter,
        showFilterBar,
        isFiltered
    } = props

    return (
        <div className="btn">
            <ButtonBlue display="flex"
                bgcolor="#56C8FF"
                txtcolor="#FFF"
                onClick={showFilterBar}>
                <HIIcons.HiOutlineFilter />  Filtrar
            </ButtonBlue>
            <ButtonBlue display={isFiltered ? "flex" : "none"}
                bgcolor="#EFFAFF"
                txtcolor="#595A5C"
                onClick={cleanFilter}>
                Limpar <BSIcons.BsX />
            </ButtonBlue>

        </div>
    )
}