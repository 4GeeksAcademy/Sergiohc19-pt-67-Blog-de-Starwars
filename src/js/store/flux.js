const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: []
		},
		actions: {
			getCharacters: async () => {
				const res = await fetch("https://www.swapi.tech/api/people/")
				const data = await res.json()
				console.log(data)
				setStore({ characters: data.results })
			},

			getVehicles: async () => {
				await fetch("https://www.swapi.tech/api/vehicles/")
				const data = await res.json()
				console.log(data)
				setStore({ vehicles: data.results })
			},

			getPlanets: async () => {
				await fetch("https://www.swapi.tech/api/planets/")
				const data = await res.json()
				console.log(data)
				setStore({ planets: data.results })
			}
		}
	};
};

export default getState;
