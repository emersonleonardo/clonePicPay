import React from 'react';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import { 
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
} from './styles'

import avatar from '../../images/avatar.png'

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold> @leonardolima </Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Leonardo Lima</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value> R$ 18,00 </Value>

                        <Divider />

                        <Feather name="lock" color="#fff" size={14} />
                        <Date>há 1 semana atrás</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons size={14} color="#FFF" name="comment-outline" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign size={14} color="#FFF" name="hearto" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}