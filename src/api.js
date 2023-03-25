const API_BASE_URL ='https://disneyapi.dev/';

export async function fetchCharacters(){
    const response= await fetch(`${API_BASE_URL}/characters`);
    const data= await response.json();
    return data.data;
}