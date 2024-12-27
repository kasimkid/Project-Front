const getState = ({setStore }) => {
    return {
        store: {
            characters: [],
            character: "",

        },
        actions:{


            getCharacters: async () => {
                const url =
                "https://rickandmortyapi.com/api/character";
                const resp = await fetch(url);
                const data = await resp.json();
                setStore({characters:data.results});
            }

            
        }
    };
};
export default getState;