const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: [],
			favorits: [],
			infocharacters: {},
			phothocharacters: {},
			infovehicles: {},
			infoplanets: {},
		},

		actions: {
			getCharacters: async () => {
				const res = await fetch("https://www.swapi.tech/api/people/")
				const data = await res.json()
				setStore({ characters: data.results })
			},

			getVehicles: async () => {
				const res = await fetch("https://www.swapi.tech/api/vehicles/")
				const data = await res.json()
				setStore({ vehicles: data.results })
			},

			getPlanets: async () => {
				const res = await fetch("https://www.swapi.tech/api/planets/")
				const data = await res.json()
				setStore({ planets: data.results })
			},

			getCharactersInfo: async (uid) => {
				const res = await fetch(`https://www.swapi.tech/api/people/${uid}`)
				const data = await res.json()
				console.log(data)
				setStore({
					infocharacters: data.result.properties
				})
			},


			phothoCharacters: async (uid) => {
				const res = await fetch(`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`)
				const data = await res.json()
				console.log(data)
				setStore({
					phothocharacters: data
				})


			},

			getVehiclesInfo: async (uid) => {
				const res = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
				const data = await res.json()
				console.log(data)
				setStore({
					infovehicles: data.result.properties
				})
				console.log(data.result.properties)
			},

			getPlanetsInfo: async (uid) => {
				const res = await fetch(`https://www.swapi.tech/api/planets/${uid}`)
				const data = await res.json()
				console.log(data)
				setStore({
					infoplanets: data.result.properties
				})
			},

			addFavorits: async (id, name) => {
				const { favorits } = getStore()
			},


			setDeletF: (name) => {
				let store = getStore()
				const result = store.favorits.filter((favorito) => (favorito != name));
				setStore({ favorits: result })
			}




		}
	};
};

export default getState;
