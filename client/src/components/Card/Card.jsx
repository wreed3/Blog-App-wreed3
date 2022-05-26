import React, { useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = () => {
	const [cardData, setCardData] = useState([]);


	useEffect(() => {
		readPost();
	}, []);

	const readPost = async () => {
		try {
			const response = await fetch("http://localhost:3003/Posts");
			const json = await response.json();
			setCardData(json);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div className="container">
			{cardData.map((post) => {
				return (
					<div key={post.id} className="card-container">
						<div className="card">
							<h2 className="card-title">
								{" "}
								{post.title.length > 50
									? post.title.substring(0, 50) + "..."
									: post.title}{" "}
							</h2>
							<div className="blurb">
								<p key={post.id}>
									{" "}
									{post.postText.length > 200
										? post.postText.substring(0, 200) + "..."
										: post.postText}{" "}
								</p>
							</div>

							<div>
								<Link
									to ={`/Posts/${post.id}`}
									className="card-button"
									type="submit"
								>
									Read more...
								</Link>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Card;
