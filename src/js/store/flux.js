const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorite: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			selectFavs: (newfav) => {
				const store = getStore();
				setStore({ favorite: [...store.favorite, newfav] });
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			addFavourite:(name) =>{
				const store = getStore()
				setStore({favorite:[...store.favorite,name]})
				
			},

			deleteFavourite: (index) =>{   
				const store = getStore()
				const nuevaLista = store.favorite.filter((item,i) => i != index)
				setStore({favorite:nuevaLista})
				
				                  
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
