import React from 'react'

import {
    Container,
    HeaderNotification,
    HeaderTitleNotification,
    HeaderConfigNotification,
    ContainerNotifications,
    Notification,
    TitleNotification,
    DateNotification
} from './styles'

export default function Notifications() {
    return (
        <Container>
            <HeaderNotification>
                <HeaderTitleNotification>Notificações</HeaderTitleNotification>
                <HeaderConfigNotification>Configurar</HeaderConfigNotification>
            </HeaderNotification>

            <ContainerNotifications>
                <Notification>
                    <TitleNotification>
                        Precisa pagar um amigo? Chega mais 20% de volta pra pagar os amigos 
                        com PicPay hoje. Vem!
                    </TitleNotification>
                    <DateNotification>Hoje às 11:43</DateNotification>
                </Notification>
                <Notification>
                    <TitleNotification>
                        Seu cashback chegou! 20% de volta pra pagar os amigos com PicPay hoje. Vem
                    </TitleNotification>
                    <DateNotification>Ontem às 15:58</DateNotification>
                </Notification>
                <Notification>
                    <TitleNotification>
                        As contas ficaram pesadas? 10% de volta ao pagar um 
                        boleto com PicPay hoje. Vem aproveitar!
                    </TitleNotification>
                    <DateNotification>15 de jun às 19:45</DateNotification>
                </Notification>                
            </ContainerNotifications>
        </Container>
    )
}