const getState = ({getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            locations: [], 
            character: "",
            location: "",

        },
        actions:{


            getCharacters: async () => {
                const url =
                "https://rickandmortyapi.com/api/character";
                const resp = await fetch(url);
                const data = await resp.json();
                setStore({characters:data.results})
            }

            
        }
    }
}