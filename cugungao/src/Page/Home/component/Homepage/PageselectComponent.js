import styled from 'styled-components'
import Select from 'react-select'
import {Link} from 'react-router-dom'

export const Topic = styled.div`
    background: #D4B588;
    height: 600px;
`
export const Contain = styled.div`

    text-align: center;
    width: 100%;
    padding: ${(props) => (props.inside === 'choose' ? '3% 3% 0 3%': props.inside === 'select'? '3% 3% 1% 3%':'1% 3% 3% 3%')};
    height:${(props) => (props.inside === 'choose' ? 'calc(100%-500px)':null)};
`
export const Select_Contain = styled.div`
    height :inherit;
    padding : 5%;
`
export const Selectt = styled(Select)`
    margin: 0 auto;
    width: 500px;
`

export const Btn = styled.div`
    display:flex;
    align-items:center;
    margin: 0 auto;

`
export const Text = styled.p`
    font-weight: bold;
    font-size: 48px;
    margin-bottom: 0;
    font-family: 'Mali', cursive;

`
export const BtnLink = styled(Link)`
    border-radius : 4px;
    background : #A96B1E;
    color: #fff;
    padding: 10px 22px;
    border: none;
    outline: none;
    text-decoration: none;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Mali', cursive;

    &:hover{
        background: #fff;
        color : #A96B1E;
    }
`