export interface Thema {
    id: number,
    titel: string,
}

export interface SubThema{
    parentId: number,
    id: number,
    titel: string
}

export interface Theorie{
    parentId: number
    id: number
    titel: string
    inhalt: string
}

export interface Aufgabe{
    parentId: number,
    id: number
    titel: string
    inhalt: string
}
