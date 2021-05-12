import { useParams } from 'react-router-dom'

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

interface CardInfoProps {
    assets: Asset[];
}

interface ParamsProps {
    id: string;
}

export function CardInfo({ assets }: CardInfoProps) {

    function useAsset() {
        const id = useParams<ParamsProps>().id;
        return assets.filter(asset => Number(id) === asset.id)[0]
    }  

    const asset = useAsset()

    return (
        <Container>
            <section className="info-section">
                <h2>{asset.name}</h2>
                <h4 
                    className={ asset.status === 'inAlert' ? 'alert' : 'status'}
                >Status: {asset.status}</h4>
                <h4 className="health">Saúde: {asset.healthscore}%</h4>
                <div className="specifications">
                    <h4>Especificações:</h4>
                    <p>Temperatura máxima: <strong>{asset.specifications.maxTemp}°C</strong></p>
                    { asset.specifications.power && (
                        <p>Potência: <strong>{asset.specifications.power}kWh</strong></p>
                    ) }
                    { asset.specifications.rpm && (
                        <p>RPM: <strong>{asset.specifications?.rpm}rpm</strong></p>
                    ) }
                </div>
                <div className="metrics">
                    <h4>Métricas:</h4>
                    <p>
                        Total de coletas uptime(ligada): 
                        <strong>{asset.metrics.totalCollectsUptime}</strong>
                    </p>
                    <p>
                        Total de horas de coletas uptime(ligada): 
                        <strong>{Math.floor(asset.metrics.totalUptime)}h</strong>
                    </p>
                    <p>
                        Data da última coleta uptime(ligada):
                        <strong>{asset.metrics.lastUptimeAt}</strong>
                    </p>
                </div>
            </section>
            <section className="image-section">
                <img src={asset.image} alt="Ativo" />
            </section>
            <section className="graphic-section">
                gráfico
            </section>
        </Container>
    )
}