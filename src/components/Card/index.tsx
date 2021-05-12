import { Container } from './style'

import { Link } from 'react-router-dom'

interface CardProps {
    name: string;
    image: string;
    healthscore: number;
    status: string;
    id: number;
}

export function Card({ name, image, healthscore, status, id }: CardProps) {

    return (
        <Link 
            to={`/assets/${id}`} 
            className="link"
            style={{ textDecoration: 'none', color: 'black' }}
        >
            <Container className="card">
                <h2>{name}</h2>
                <h4 className={ status === 'inAlert' ? 'alert' : 'status'}>Status: {status}</h4>
                <h4 className="health">Saúde: {healthscore}%</h4>
                <img src={image} alt="Ativo" />
                <span>Clique no card para saber mais</span>
            </Container>
        </Link>
    )
}