import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { api } from '../services/api'

interface Unit {
    id: number;
    name: string;
    companyId: number;
}

interface Company {
    id: number;
    name: string;
}

interface UnitsCompaniesContextProviderProps {
    children: ReactNode;
}

interface UnitsCompaniesContextData {
    units: Unit[];
    companies: Company[];
}

const UnitsCompaniesContext = createContext({} as UnitsCompaniesContextData)

export function UnitsCompaniesContextProvider({ children }: UnitsCompaniesContextProviderProps) {

    const [units, setUnits] = useState<Unit[]>([])
    
    const [companies, setCompanies] = useState<Company[]>([])

    useEffect(() => {
        api.get('units')
            .then(response => setUnits(response.data))

        api.get('companies')
            .then(response => setCompanies(response.data))
    }, [])

    return (
        <UnitsCompaniesContext.Provider value={{units, companies}}>
            {children}
        </UnitsCompaniesContext.Provider>
    )
}

export function useUnitsCompanies() {
    const context = useContext(UnitsCompaniesContext)

    return context
}