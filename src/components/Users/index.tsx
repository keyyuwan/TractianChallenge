import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import { Container } from './style'

interface User {
    id: number;
    email: string;
    name: string;
    unitId: number;
    companyId: number;
}

export function Users() {

    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        api.get('users')
            .then(response => setUsers(response.data))
    }, [])

    return (
        <Container>
            <h1>Usuários</h1>
            { users.map(user => (
                <div className="user-card">
                    <h2>Nome: {user.name}</h2>
                    <span>Email: {user.email}</span>
                </div>
            )) }
        </Container>
    )
}