import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import MapView from 'react-native-maps'
import * as Location from 'expo-location';

import { 
    Container,
    Locations,
    MarketPlace,
    Img,
    InfoLocation,
    TitleLocation,
    Label,
    DescriptionLocation,
    MenuLocation
} from './styles'

import subway from '../../images/subway-logo.jpg'

export default function PayLocations() {
    
    const [position, setPosition] = useState([0, 0]);
    
    useEffect(() => {
        async function loadPostion() {
            const { status } = await Location.requestPermissionsAsync();

            if( status !== 'granted') {
                Alert.alert('Ops...', 'Precisamos de permissão para obter a sua localização');
                return;
            }

            const position = await Location.getCurrentPositionAsync();
            const { latitude, longitude } = position.coords;

            setPosition([
                latitude,
                longitude
            ])
        }

        loadPostion();
    }, [])

    return (
        <Container>
            { position[0] !== 0 && (
                <MapView 
                    style={{
                            width: '100%',
                            height: 230
                    }}
                    initialRegion={{
                        latitude: position[0],
                        longitude: position[1],
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02
                    }}
                />
            )}

            <Locations>
                <MarketPlace>
                    <Img source={subway} resizeMode="contain" />
                    <InfoLocation>
                        <TitleLocation>
                            <Label>Subway - Centro (Guarujá)</Label>
                            <MaterialCommunityIcons name="map-marker" size={14} color="#fff" />
                        </TitleLocation>
                        <DescriptionLocation>
                            Av. Puglisi, 474 - Centro, Guarujá
                        </DescriptionLocation>
                    </InfoLocation>
                    <MenuLocation>
                        <MaterialCommunityIcons name="dots-vertical" size={20} color="#fff"/>
                    </MenuLocation>
                </MarketPlace>
            </Locations>
            
        </Container>
    );
}