import React from 'react';
import MapView from 'react-native-maps'

import { Container, Title } from './styles'

export default function PayLocations() {
    return (
        <Container>
            <Title>PayLocations</Title>
            <MapView />
        </Container>
    );
}