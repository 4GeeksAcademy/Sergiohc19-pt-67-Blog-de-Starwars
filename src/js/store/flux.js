const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: [],
			favorits: [],
			infocharacters: {},
			photo: {}
		
		},
		actions: {
			getCharacters: async () => {
				const res = await fetch("https://www.swapi.tech/api/people/")
				const data = await res.json()
				setStore({ characters: data.results })
			},

			getVehicles: async () => {
				const res = fetch("https://www.swapi.tech/api/vehicles/")
				const data = await res.json()
				setStore({ vehicles: data.results })
			},

			getPlanets: async () => {
				const res = fetch("https://www.swapi.tech/api/planets/")
				const data = await res.json()
				setStore({ planets: data.results })
			},

			getCharactersInfo : async (uid) => {
				const res = fetch(`https://www.swapi.tech/api/people/${uid}`)
				const data = await res.json()
				console.log(data)
				setStore({ info: data })
				
			},

			getPhoto : async (uid) => {
				const res = fetch(`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`)
				const data = await res.json()
				console.log(data)
				setStore({ photo: data })
			}

		}
	};
};

export default getState;
