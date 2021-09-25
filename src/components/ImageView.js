import React from 'react';

function ImageView(props) {
	const { urls, height, width } = props;
	return <img src={urls.thumb} height={height / 20} width={width / 20} />;
}

export default ImageView;
