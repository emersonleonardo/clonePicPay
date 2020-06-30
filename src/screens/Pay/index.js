import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

import { Container, Header, SearchContainer, SearchInput, TitleSuggestions } from './styles'

const Tab = createMaterialTopTabNavigator();

import PayMain from '../../components/PayMain'
import PayLocations from '../../components/PayLocations'
import PayStore from '../../components/PayStore'

export default function Pay(){
    return (
        <Container>
            <Header>
                <MaterialCommunityIcons name = "qrcode-scan" size = {30} color = "#10c86e" />

                <SearchContainer>
                    <AntDesign name="search1" size={18} color="#eee"/>
                    <SearchInput placeholder="A quem você quer pagar?" />
                </SearchContainer>
            </Header>
            
            <Tab.Navigator
                tabBarOptions = {{
                    style: {
                        backgroundColor: '#000',
                    },
                    activeTintColor: '#0db060',
                    inactiveTintColor: '#92929c',
                }}
            >
                <Tab.Screen name="Principais" component={PayMain} />
                <Tab.Screen name="Locais" component={PayLocations} />
                <Tab.Screen name="sTORE" component={PayStore} />
            </Tab.Navigator>
        </Container>
    )
}