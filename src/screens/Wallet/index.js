import React, { useState } from 'react';
import { Switch } from 'react-native'
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons'

import { 
    Wrapper, 
    Header, 
    HeaderContainer, 
    Title, 
    BalanceContainer, 
    Value, 
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitlte,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UseTicketButton,
    UseTicketLabel
} from './styles';

import credtCard from '../../images/credit-card.png'

export default function Wallet(){
    const [isVisible, setIsVisible] = useState(true)
    const [useBalance, setUseBalance] = useState(true)

    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState)
    }

    function handleToggleUseBalance() {
        setUseBalance((prevState) => !prevState)
    }

    return(
        <Wrapper>
            <Header 
                colors={
                    useBalance
                    ? ['#52e78c', '#1ab563']
                    : ['#d3d3d3', '#868686']
                }
            >
                <HeaderContainer>
                    <Title>Saldo PicPay </Title> 

                    <BalanceContainer>
                        <Value>R$ <Bold>{isVisible ? ' 1.385.189,07 ' : '----'} </Bold></Value>
                        <EyeButton onPress={handleToggleVisibility}>
                            <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
                        </EyeButton>
                    </BalanceContainer>

                    <Info>Seu saldo está rendendo 100% do CDI</Info>

                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash-usd" size={24} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>

                        <Action>
                            <FontAwesome name="bank" size={20} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>                
            </Header>

            <UseBalance>
                <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
                <Switch 
                    value={useBalance}
                    onValueChange={handleToggleUseBalance}
                />
            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitlte>
                    Formas de pagamento
                </PaymentMethodsTitlte>
            </PaymentMethods>

            <Card>
                <CardBody>
                    <CardDetails>
                        <CardTitle>
                            Cadastre seu cartão de crédito
                        </CardTitle>
                        <CardInfo>
                            Cadastre um cartão de crédito para fazer um pagamento mesmo quando tiver saldo 
                            no seu PicPay
                        </CardInfo>
                    </CardDetails>
                    
                    <Img source={credtCard} resizeMode="contain"/>
                </CardBody>
                <AddButton>
                    <AntDesign name="pluscircleo" size={30} color="#0db060" />
                    <AddLabel>Adicionar cartão de crédito</AddLabel>
                </AddButton>
            </Card>

            <UseTicketButton>
                <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
                <UseTicketLabel>Usar código promocional</UseTicketLabel>
            </UseTicketButton>
        </Wrapper>
    )
}