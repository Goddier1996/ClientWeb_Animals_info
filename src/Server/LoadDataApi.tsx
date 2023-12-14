import { API } from "./API";



export async function LoadAllCardsAnimals() {
  let res = await fetch(API.NODE.GET, { method: "GET" });
  let data = await res.json();

  return data;
}



export async function LoadInfoIdAnimal(Serial_code: string) {
  let res = await fetch(`${API.NODE.GET}/${Serial_code}`, { method: "GET" });

  let data = await res.json();

  return data;
}



export async function LoadAllCardsAnimalsHebrewLanguage() {
  let res = await fetch(`${API.NODE.GET}/hebrewLanguage`, { method: "GET" });
  let data = await res.json();

  return data;
}



export async function LoadAnimalInfoIdHebrewLanguage(Serial_code: string) {
  let res = await fetch(`${API.NODE.GET}/hebrewLanguage/${Serial_code}`, {
    method: "GET",
  });
  let data = await res.json();

  return data;
}



export async function LoadUserAdmin() {
  let res = await fetch(API.USER.GET, { method: "GET" });
  let data = await res.json();

  return data;
}
