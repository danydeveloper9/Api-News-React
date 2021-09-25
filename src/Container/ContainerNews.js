import React from 'react';
import CardNews from './CardNews.js';

const ContainerNews = ({news}) => {

	return(

		<div className="news-container">
		
			{news.map( (n, index) => (
				n['image'] ? (
					<CardNews
						key = {index}
						imagen={n.image.thumbnail.contentUrl}
						nombre={n.name}
						fecha={n.datePublished}
		          		descripcion={n.description} 
					/>

				) : (
					<CardNews
						key = {index}
						nombre={n.name}
						fecha={n.datePublished}
		          		descripcion={n.description} 
					/>
				)
				
			)
			)}

		</div>
	)
}

export default ContainerNews;