import React from 'react';
import ImageDetail from './image_detail';

const ImageList = (props) => {
    const validImages = props.images.filter(image => !image.is_album);

    const RenderImages = validImages.map((image, idx) =>
        <ImageDetail key={image.id} image={image} />
    );

    return(
        <ul className="media-list list-group">
            {RenderImages}
        </ul>
    )
}

export default ImageList;