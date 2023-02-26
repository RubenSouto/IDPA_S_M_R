export interface Thema {
    id: number,
    titel: string,
    subthemas: SubThema[]
}

export interface SubThema{
    id: number,
    titel: string
}
