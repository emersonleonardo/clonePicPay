import styled from 'styled-components/native'

export const Container = styled.ScrollView`
    background: #000;
    flex: 1;
`

export const Header = styled.View`
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
`
export const SearchContainer = styled.View`
    background: #fff;
    border: 1px solid #eee
    border-radius: 25px
    width: 87%;
    padding: 5px 15px;
    flex-direction: row;
    align-items: center;
`

export const SearchInput = styled.TextInput`
    text-align: center;
    width: 90%;
    height: 30px
    padding: 0px;
    margin: 0;
`

export const TitleSuggestions = styled.TextInput`
    color: #fff;
    padding: 15px 16px 0;
    font-size: 16px;
    background: #1e222b;
`