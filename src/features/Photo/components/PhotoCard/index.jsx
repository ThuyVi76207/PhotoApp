import React from "react";
import PropTypes from 'prop-types';
import { Button } from "reactstrap";

import './PhotoCardStyles.scss';

PhotoCard.prototype = {
    photo: PropTypes.object,
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func,
}

PhotoCard.defaultProps = {
    photo: {},
    onEditClick: null,
    onRemoveClick: null,
}

function PhotoCard(props) {

    const { photo, onEditClick, onRemoveClick } = props;
    //Edit button
    const handleEditClick = () => {
        if (onEditClick) onEditClick(photo);
    }
    //Remove button
    const handleRemoveClick = () => {
        if (onRemoveClick) onRemoveClick(photo);//Neu co click thi goi va truyen object hien tai vao
    }
    return (
        <div className="photo">
            <img src={photo.photo} alt={photo.title} />
            <div className="photo__overlay">
                <h3 className="photo__title">{photo.title}</h3>
                <div className="photo__actions">
                    <div>
                        <Button outline size="sm" color="light" onClick={handleEditClick}>
                            Edit

                        </Button>
                    </div>
                    <div>
                        <Button outline size="sm" color="danger" onClick={handleRemoveClick}>
                            Remove
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PhotoCard;