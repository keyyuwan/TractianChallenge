import { Container, Title } from './style'

import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import { Card } from '../Card/index'

interface Asset {
    id: number;
    sensors: string[];
    model: string;
    status: string;
    healthscore: number;
    name: string;
    image: string;
    specifications: {
        power: number;
        maxTemp: number;
        rpm: number;
    },
    metrics: {
        totalCollectsUptime: number;
        totalUptime: number;
        lastUptimeAt: string;
    },
    unitId: number;
    companyId: number;
}

export function Assets() {

    const [assets, setAssets] = useState<Asset[]>([])

    useEffect(() => {
        api.get('assets')
            .then(response => setAssets(response.data))
    }, [])

    return (
        <>
            <Title>Ativos</Title>
            <Container className="cards">
                { assets.map(asset => {
                    return (
                        <Card 
                            key={asset.id}
                            name={asset.name}
                            image={asset.image}
                            healthscore={asset.healthscore}
                            status={asset.status}
                        />
                    )
                }) }
            </Container>
        </>
    )
}