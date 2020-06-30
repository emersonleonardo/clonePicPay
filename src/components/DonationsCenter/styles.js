import styled from 'styled-components/native'

export const Container = styled.ScrollView`
    margin-top: 32px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-center;
`

export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`

export const ListAll = styled.Text`
    color: #0db060
`

export const ListDonations = styled.View`
    margin: 16px 0;
`

export const Donation = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 24px;
`

export const Img = styled.Image`
    width: 65px;
    height: 65px;
    border-radius: 100px;
`

export const InfoDonation = styled.View`
    flex: 1;
    margin: 0 16px;
`

export const TitleDonation = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
`

export const LabelDonation = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-right: 5px;
`

export const DescriptionDonation = styled.Text`
    color: #fff;
    font-size: 12px;
`

export const MenuDonation = styled.View``
