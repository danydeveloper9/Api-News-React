import React from 'react';

const CardNews = n => {

    return (

        <article className="news-item">
			<img src={n.imagen} alt="imagen">
			<section>
				<h2 className="news-title"> {n.nombre} </h2>
				<p> {n.fecha.substring(0, 10)} </p>
      			<p className="news-description"> {n.descripcion} </p>
			</section>
		</article>
    )
}

export default CardNews;