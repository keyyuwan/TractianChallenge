import { Assets } from '../Assets'
import { Users } from '../Users'
import { UnitsCompaniesContextProvider } from '../../contexts/UnitsCompaniesContext'

import { Container } from './style'

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

interface MainProps {
    assets: Asset[];
}

export function Main({ assets }: MainProps) {
    return (
        <UnitsCompaniesContextProvider>
            <Container>
                <Assets assets={assets} />
                <Users />
            </Container>
        </UnitsCompaniesContextProvider>
    )
}