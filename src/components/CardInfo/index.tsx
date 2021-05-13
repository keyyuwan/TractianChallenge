import { useParams, Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import backImg from '../../assets/back.svg'

import { Container, BackImg } from './style'

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

    const { 
        name, 
        status, 
        healthscore, 
        specifications, 
        metrics, 
        image
    } = useAsset();

    const formatedDate = format(parseISO(metrics.lastUptimeAt), `PP, p`, {
        locale: ptBR
    })

    return (
        <>
        <Link to="/">
            <BackImg src={backImg} alt="Voltar" />
        </Link>
        <Container>
            <section className="info-section">
                <h2>{name}</h2>
                <h4 
                    className={ status === 'inAlert' ? 'alert' : 'status'}
                >Status: {status}</h4>
                <h4 className="health">Saúde: {healthscore}%</h4>
                <div className="specifications">
                    <h4>Especificações:</h4>
                    <p>Temperatura máxima: <strong>{specifications.maxTemp}°C</strong></p>
                    { specifications.power ? (
                        <p>Potência: <strong>{specifications.power}kWh</strong></p>
                    ) : (
                        <p>Potência: <strong>0kWh</strong></p>
                    )}
                    { specifications.rpm ? (
                        <p>RPM: <strong>{specifications?.rpm}rpm</strong></p>
                    ) : (   
                        <p>RPM: <strong>0rpm</strong></p>
                    )}
                </div>
                <div className="metrics">
                    <h4>Métricas:</h4>
                    <p>
                        Total de coletas uptime(ligada): 
                        <strong>{metrics.totalCollectsUptime}</strong>
                    </p>
                    <p>
                        Total de horas de coletas uptime(ligada): 
                        <strong>{Math.floor(metrics.totalUptime)}h</strong>
                    </p>
                    <p>
                        Data da última coleta uptime(ligada):
                        <strong className="date">{formatedDate}</strong>
                    </p>
                </div>
            </section>
            <section className="image-section">
                <img src={image} alt="Ativo" />
            </section>
            <section className="graphic-section">
                gráfico
            </section>
        </Container>
        </>
    )
}