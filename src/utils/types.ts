export type TypesSwapiService = 'films' | 'people' | 'startships' | 'vehicles' | 'species' | 'planets';

export type Criatura = {
    id: string,
    name: string,
    description: string,
    powers: string,
    height: number, 
    width: number,
    createdDate: Date
}