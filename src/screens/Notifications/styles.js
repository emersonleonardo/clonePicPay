import styled from 'styled-components/native'

export const Container = styled.View`
    background: #4a4d52;
    flex: 1;
`

export const HeaderNotification = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 16px;
    background: #1e232a;
`

export const HeaderTitleNotification = styled.Text`
    color: #fff;
    font-size: 20px;
`

export const HeaderConfigNotification = styled.Text`
    color: #10c86e;
`

export const ContainerNotifications = styled.ScrollView`
    padding: 5px 0 0;
`

export const Notification = styled.View`
    padding: 12px 16px;
    border-bottom-width: 1px;
    border-bottom-color: #fff
`

export const TitleNotification = styled.Text`
    color: #fff;
    padding-bottom: 15px;
`

export const DateNotification = styled.Text`
    color: #fff;
    font-size: 12px;
`
