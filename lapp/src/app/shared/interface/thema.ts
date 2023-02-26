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
    parentId: number,
    titel: string
    inhalt: string
}

export interface Aufgabe{
    parentId: number,
    titel: string
    inhalt: string
}
