import axios from "axios"

export const getRecipesList = async (q = null ) => {
    const options = {
        method: 'GET',
        url: 'https://food-recipes-with-images.p.rapidapi.com/',
        params: { q },
        headers: {
          'X-RapidAPI-Key': 'b29a2e28efmsh62203df13b65050p1f449djsn5dcf5ae04788',
          'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com'
        }
      };

    return await axios.request(options);
}