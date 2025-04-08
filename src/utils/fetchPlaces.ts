const baseUrl ="https://ai-weather-by-meteosource.p.rapidapi.com/"
const API_KEY = import.meta.env.VITE_API_KEY as string;



export const fetchPlaces = async(place:string) => {
    const url = baseUrl + `find_places_prefix?text=${place}&language=en`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        return(data);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

