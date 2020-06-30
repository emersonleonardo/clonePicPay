import styled from 'styled-components/native'

export const Container = styled.ScrollView`
    flex: 1;
    background: #1e222b;
    padding: 0 16px;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 16px 0;
`
export const ContainerCashBack = styled.View`
    background: #000;
    border-radius: 8px;
    padding: 16px 24px 32px 24px;
`

export const CashBackInfo = styled.View`
    align-items: flex-end;
`

export const CashBackDescription = styled.View`
    flex-direction: row;
    align-items: center;
`

export const ImgCashBack = styled.Image`
    width: 100px;
    height: 130px;
`

export const Description = styled.View`
    flex: 1;
    padding-left: 16px;
`

export const TitleCashBack = styled.Text`
    color: #fff;
    font-size: 32px;
    font-weight: bold;
`

export const DescriptionCashBack = styled.Text`
    color: #fff;
`
