import React, {useState, useEffect} from 'react';
import ContainerNews from '../Container/ContainerNews.js';

const RequestApi = () => {

	const [news, setNews] = useState([])
	useEffect(() => {
		//fetchApi()
	}, [])

	const onChange = (event) => {
        fetchApi(event.currentTarget.value) 
    }

	const fetchApi = async(type) => {
		let url = '';
		if(type === 'digitalEconomy'){
			url = "https://bing-news-search1.p.rapidapi.com/news?textFormat=Raw&safeSearch=Off&cc=MX&category=ScienceAndTechnology"
		}
		else if(type === 'entertainment'){
			url = "https://bing-news-search1.p.rapidapi.com/news?textFormat=Raw&safeSearch=Off&cc=MX&category=Entertainment"
		}
		else if(type === 'business'){
			url = "https://bing-news-search1.p.rapidapi.com/news?textFormat=Raw&safeSearch=Off&category=Business"
		}
		
		const data = await fetch(url, {
					"method": "GET",
					"headers": {
					"x-bingapis-sdk": "true",
					"x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
					"x-rapidapi-key": "3b67dd2b29msh0e231a911018c68p10c387jsnd360f5b1e085"
				}
			})
		const dataJson = await data.json()
		setNews(dataJson.value)
		console.log(dataJson.value)
	}

	return (
		<div>
			<section className='selectNews'>
			<h1> Bienvenido! </h1>
			<h4>Selecciona el tipo de noticia de tu preferencia.</h4>	
			<select onChange={onChange} >
				<option value = 'null' disabled selected>Selecciona una opción</option>
			    <option value = 'digitalEconomy'>Mundo de la Economia Digital</option> 
			    <option value = 'entertainment'>Entretenimiento</option> 
			    <option value = 'business'>Negocios</option> 
			</select> 
			</section>	 
			<ContainerNews news={news}/>
		</div>
		
	);
}

export default RequestApi;