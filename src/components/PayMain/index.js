import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import { 
    Container, 
    Title,
    ContainerServices,
    TitleServices,
    LabelService,
    Services,
    Service,
    IconService,
    ContainerService,
    TitleService,
    DescriptionService,
    MenuService,
    ContainerContatos,
    TitleContatos
} from './styles'

import Suggestions from '../Suggestions'

import Img12 from '../../images/12.png';
import Img06 from '../../images/06.png';
import Img07 from '../../images/07.png';
import Img01 from '../../images/01.png';

const OptionsServices = [
    {
        key: String(Math.random()),
        img: Img12,
        title: 'Pagar nas Maquininhas',
        iconTitle: <Feather name='map-pin' size={14} color="#FFF"/>,
        description: 'Pague com o PicPay em máquinas Cielo e Getnet escaneando o QR code na máquina',
    },
    {
        key: String(Math.random()),
        img: Img06,
        title: 'Pagar conta',
        iconTitle: <MaterialCommunityIcons name='shopping' size={14} color="#FFF"/>,
        description: 'Pague sua conta de luz, água, boletos bancários, etc.',
    },
    {
        key: String(Math.random()),
        img: Img07,
        title: 'Cobrar',
        iconTitle: <MaterialCommunityIcons name='shopping' size={14} color="#FFF"/>,
        description: 'Cobre um amigo',
    },
    {
        key: String(Math.random()),
        img: Img01,
        title: 'Pagar nas Maquininhas',
        iconTitle: <MaterialCommunityIcons name='shopping' size={14} color="#FFF"/>,
        description: 'Vivo, Claro, Tim, Oi, Nextel, Correios',
    },
]

export default function PayMain() {
    return (
        <Container>
            <Title>Sugestões para Você</Title>
            <Suggestions />

            <ContainerServices>
                <TitleServices>Serviços</TitleServices>
                <Services>
                    {OptionsServices.map((service) => (
                        <Service key={service.key}>
                            <IconService source={service.img} />
                            <ContainerService>
                                <TitleService>
                                    <LabelService>{service.title}</LabelService>
                                    {service.iconTitle}
                                </TitleService>
                                <DescriptionService>{service.description}</DescriptionService>
                            </ContainerService>
                            <MenuService>
                                <MaterialCommunityIcons name="dots-vertical" size={20} color="#fff"/>
                            </MenuService>
                        </Service>
                    ))}
                </Services>
            </ContainerServices>

            <ContainerContatos>
                <TitleContatos>Contatos</TitleContatos>
            </ContainerContatos>
        </Container>
    );
}