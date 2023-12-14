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
    infoImage?: string;
    eatImage?: string;
    notEatImage?: string;
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