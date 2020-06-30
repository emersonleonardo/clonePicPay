import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import {
    Container,
    Header,
    Title,
    ListAll,
    ListDonations,
    Donation,
    Img,
    InfoDonation,
    TitleDonation,
    LabelDonation,
    DescriptionDonation,
    MenuDonation
} from './styles'

import amigosDoBem from '../../images/amigos-do-bem.png'
import mesaBrasil from '../../images/mesa-brasil.jpg'
import maesFavela from '../../images/maes-favela.jpg'
import institutoMcDonalds from '../../images/instituto-mcdonalds.jpg'

const items = [
    {
        key: String(Math.random()),
        img: amigosDoBem,
        title: 'Amigos do Bem',
        description: 'Doe e ajude o sertão nordestino contra a COVID-19'
    },
    {
        key: String(Math.random()),
        img: mesaBrasil,
        title: 'Mesa Brasil TO',
        description: 'Doe para ajudar a instituição a oferecer ações educativas e de distribuição de alimentos para as pessoas.'
    },
    {
        key: String(Math.random()),
        img: maesFavela,
        title: 'CUFA (Mães da Favela)',
        description: 'Doe e ajude as favelas a combater a COVID-19'
    },
    {
        key: String(Math.random()),
        img: institutoMcDonalds,
        title: 'Instituto Ronald McDonald',
        description: 'Doe e ajude a prevenir crianças e adolescentes com cãncer da COVID-19'
    },
]

export default function DonationsCenter() {
    return (
        <Container>
            <Header>
                <Title>Central de Doações</Title>
                <ListAll>Ver todos</ListAll>
            </Header>
            <ListDonations>
                {items.map(item => (
                    <Donation key={item.key}>
                        <Img source={item.img} resizeMode="cover" />
                        <InfoDonation>
                            <TitleDonation>
                                <LabelDonation>{item.title}</LabelDonation>
                                <MaterialCommunityIcons name="shopping" size={14} color="#fff" />
                            </TitleDonation>
                            <DescriptionDonation>{item.description}</DescriptionDonation>
                        </InfoDonation>
                        <MenuDonation>
                            <MaterialCommunityIcons name="dots-vertical" size={20} color="#fff"/>
                        </MenuDonation>
                    </Donation>
                ))}
            </ListDonations>
        </Container>
    )
}