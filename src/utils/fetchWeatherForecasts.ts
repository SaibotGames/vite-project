const baseUrl ="https://ai-weather-by-meteosource.p.rapidapi.com/"
const API_KEY = import.meta.env.VITE_API_KEY as string;

export const fetchForecast = async(endpoint:string, place:string, measurementSystem:string)=>{

    const url = baseUrl + `${endpoint}?place_id=${place}&timezone=auto&language=en&units=${measurementSystem}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };
    
    try {
        
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Failed to fetch forecast");
          }
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
