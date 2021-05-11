import { Container } from './style'

interface CardProps {
    name: string;
    image: string;
    healthscore: number;
    status: string;
}

export function Card({ name, image, healthscore, status }: CardProps) {
    return (
        <Container className="card">
            <h2>{name}</h2>
            <h4 className={ status === 'inAlert' ? 'alert' : 'status'}>Status: {status}</h4>
            <h4 className="health">Saúde: {healthscore}%</h4>
            <img src={image} alt="Ativo" />
            <span>Clique no card para saber mais</span>
        </Container>
    )
}