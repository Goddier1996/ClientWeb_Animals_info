import { API } from "../Server/API";



export async function addAnimal(user: any) {

    try {
      
    await fetch(API.NODE.ADD, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
        
  } catch (error) {
    console.log(error);
  }
}
