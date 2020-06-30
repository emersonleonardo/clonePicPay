import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { 
    Container, 
    Title,
    ContainerCashBack,
    CashBackInfo,
    CashBackDescription,
    ImgCashBack,
    Description,
    TitleCashBack,
    DescriptionCashBack
} from './styles'

import img14 from '../../images/14.png'

import DonationsCenter from '../DonationsCenter'

export default function PayStore() {
    return (
        <Container>
            <Title>Destaques</Title>
            
            <ContainerCashBack>
                <CashBackInfo>
                    <Ionicons name="ios-information-circle" size={24} color="#fff" />
                </CashBackInfo>
                <CashBackDescription>
                    <ImgCashBack source={img14} resizeMode="contain"/>
                    <Description>
                        <TitleCashBack>R$10 de volta</TitleCashBack>
                        <DescriptionCashBack>
                            Usando um cartão de crédito na sua primeira recarga de celular,
                            você ganha R$10 de volta.
                        </DescriptionCashBack>
                    </Description>
                </CashBackDescription>
            </ContainerCashBack>

            <DonationsCenter />
        </Container>
    );
}