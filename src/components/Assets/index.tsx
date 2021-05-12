import { Container, Title } from './style'

import { Card } from '../Card'

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

interface AssetsProps {
    assets: Asset[];
}

export function Assets({ assets }: AssetsProps) {
    return (
        <>
            <Title>Ativos</Title>
            <Container className="cards">
                { assets.map(asset => {
                    return (
                        <Card 
                            key={asset.id}
                            id={asset.id}
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