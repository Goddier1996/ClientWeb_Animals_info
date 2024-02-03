export interface AnimalsInfo{
    _id: string;
    title: string;
    sound: string;
    image: string;
    eat: string;
    infoAnimal: string;
    infoImage: string;
    eatImage: string;
    notEatImage: string;
}[]


export interface AnimalIdInfo {
    _id?: string;
    title?: string;
    sound?: string;
    image?: string;
    eat?: string;
    infoAnimal?: string;
    infoImage?: any;
    eatImage?: any;
    notEatImage?: any;
}


export interface ValueAddOrUpdatedNewAnimal{
    title: string;
    sound: string;
    image: string;
    eat: string;
    infoAnimal: string;
    infoImage: string;
    notEatImage: string;
    eatImage: string;
}


export interface ConnectAdminLogin{
    Login: string;
    Password: string;
}


export interface ObjectCustomHook{
    typeHowUse?: string;
}


export interface ObjectCustomHookSearch{
    typeHowUse?: string;
    valueSearch?: string;
    infoSearch?:any
}


export interface ObjectCustomHookIdInfo{
    typeHowUse?: string;
    id?: string;
}


export interface LazyImg{
    src?: string;
    width?: number
    height?:number
    alt?:string
}