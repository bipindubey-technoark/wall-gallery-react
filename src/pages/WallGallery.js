import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageView from '../components/ImageView';

function WallGallery(props) {
	const [images, setImages] = useState();
	const fetchData = async () => {
		const { data } = await axios.get(
			'http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0'
		);
		setImages(data);
	};
	useEffect(() => {
		fetchData();
	}, []);
	if (!images) {
		return 'Loading';
	}
	return (
		<div className="gallery">
			{images.map((image) => (
				<ImageView
					urls={image.urls}
					height={image.height}
					width={image.width}
				/>
			))}
		</div>
	);
}

export default WallGallery;
