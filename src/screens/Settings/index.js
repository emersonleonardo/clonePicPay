import React from 'react'

import {
    Container,
    Header,
    Help,
    ContainerPerfil,
    Img,
    User,
    Name,
    LinkProfile,
    LinkMyAccount,
    OptionsProfile,
    Option,
    TitleOption,
    InfoOption
} from './styles'

import ImgProfile from '../../images/imageprofile.jpg';

const OptionsMenu = [
    {
        key: String(Math.random()),
        titleMenu: 'Meu PicPay',
        dataMenu: '@emersonleonardo'
    },
    {
        key: String(Math.random()),
        titleMenu: 'Meu número',
        dataMenu: '(**) *****-1234'
    },
    {
        key: String(Math.random()),
        titleMenu: 'Meu E-mail',
        dataMenu: '@e*********o@g***l.com'
    },
    {
        key: String(Math.random()),
        titleMenu: 'Dados pessoais',
        dataMenu: 'Nome, CPF e data de nascimento'
    },
    {
        key: String(Math.random()),
        titleMenu: 'Conta Bancária',
        dataMenu: ''
    },
    {
        key: String(Math.random()),
        titleMenu: 'Taxas e limites',
        dataMenu: ''
    },
    {
        key: String(Math.random()),
        titleMenu: 'Meus endereços',
        dataMenu: ''
    },
    {
        key: String(Math.random()),
        titleMenu: 'Meus favoritos',
        dataMenu: ''
    },
    {
        key: String(Math.random()),
        titleMenu: 'Validar identidade',
        dataMenu: ''
    },
]

export default function Settings() {
    return (
        <Container>
            <Header>
                <Help>Ajuda</Help>
                <ContainerPerfil>
                    <Img source={ImgProfile} />
                    <User>@emersonleonardo</User>
                    <Name>Emerson Leonardo</Name>
                    <LinkProfile>Ver meu perfil</LinkProfile>
                </ContainerPerfil>
                <LinkMyAccount>Minha conta</LinkMyAccount>
            </Header>
            <OptionsProfile>
                {OptionsMenu.map(optionMenu => (
                    <Option key={optionMenu.key}>
                        <TitleOption>{optionMenu.titleMenu}</TitleOption>
                        <InfoOption>{optionMenu.dataMenu}</InfoOption>
                    </Option> 
                ))}
            </OptionsProfile>
        </Container>
    )
}