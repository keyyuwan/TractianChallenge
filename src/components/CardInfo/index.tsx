import { useParams, Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import backImg from '../../assets/back.svg'
import { api } from '../../services/api'
import { useUnitsCompanies } from '../../contexts/UnitsCompaniesContext'

import { Container, BackImg } from './style'
import { useEffect, useState } from 'react'

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
        image,
        unitId,
        companyId
    } = useAsset();

    const { units, companies } = useUnitsCompanies()

    function getUnit() {
        let assetUnit = units.find(unit => unit.id === unitId)
        return assetUnit?.name
    }

    function getCompany() {
        let assetCompany = companies.find(company => unitId === company.id)
        return assetCompany?.name
    }

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
                <span>{getUnit()}</span>
                <span className="division">|</span>
                <span>{getCompany()}</span>
                <h4 
                    className={ status === 'inAlert' ? 'alert' : 'status'}
                >Status: {status}</h4>
                <h4 className="health">Sa??de: {healthscore}%</h4>
                <div className="specifications">
                    <h4>Especifica????es:</h4>
                    <p>Temperatura m??xima: <strong>{specifications.maxTemp}??C</strong></p>
                    { specifications.power ? (
                        <p>Pot??ncia: <strong>{specifications.power}kWh</strong></p>
                    ) : (
                        <p>Pot??ncia: <strong>0kWh</strong></p>
                    )}
                    { specifications.rpm ? (
                        <p>RPM: <strong>{specifications?.rpm}rpm</strong></p>
                    ) : (   
                        <p>RPM: <strong>0rpm</strong></p>
                    )}
                </div>
                <div className="metrics">
                    <h4>M??tricas:</h4>
                    <p>
                        Total de coletas uptime(ligada): 
                        <strong>{metrics.totalCollectsUptime}</strong>
                    </p>
                    <p>
                        Total de horas de coletas uptime(ligada): 
                        <strong>{Math.floor(metrics.totalUptime)}h</strong>
                    </p>
                    <p>
                        Data da ??ltima coleta uptime(ligada):
                        <strong className="date">{formatedDate}</strong>
                    </p>
                </div>
            </section>
            <section className="image-section">
                <img src={image} alt="Ativo" />
            </section>
            <section className="graphic-section">
                gr??fico
            </section>
        </Container>
        </>
    )
}