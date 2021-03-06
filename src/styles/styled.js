import styled from 'styled-components'

export const ButtonBlue = styled.button`
    background-color: ${props => props.bgcolor};
    color: ${props => props.txtcolor};
    padding: 5px 20px;
    font-weight: bold;
    border:none;
    font-size: 1rem;
    display: ${props => props.display};
    align-items: center;
    border-radius: 15px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    z-index: 0;
    margin: 15px;

    svg{
        color: #000;
        margin: 0 5px;
    }

`

export const Bookshelf = styled.div`
    padding-top: 20px;
    background-color: ${props => props.data.bg};
    color: ${props => props.data.txtColor};
    &:hover{
        background-color: ${props => props.data.bgHover};
    }
    h1{
        padding-left: 20px;
        font-size: 1.3rem;
    }
`
export const Load = styled.div`
    padding-top: 20px;
    margin: 20px 0;
    .load-title{
        height: 30px;
        width: 400px;
        background-color: #F3F6FD;
    }
    .load-shelf{
        display: flex;

    }
    .load-book{
        margin: 20px 5px;
        height: 190px;
        width: 130px;
        background-color: #F3F6FD;
    }
`

export const PagesBoxes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F5F5F5;
    border: 1px solid #E5E5E5;
    color: #555555;
    padding: 2px;
    width: 35px;
    height: 35px;
    text-align: center;
    margin: 0 7px;
    font-size: 1rem;
    &:hover{
        background-color: #167ABC;
        border: 1px solid #167ABC;
        color: #fff;
    }
`