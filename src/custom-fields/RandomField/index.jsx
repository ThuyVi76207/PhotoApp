import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import RandomPhoto from "features/Photo/components/RandomPhoto";
import { ErrorMessage } from "formik";

RamdomField.prototype = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
}

RamdomField.defaultProps = {
    label: '',
}


function RamdomField(props) {
    const { field, form, label } = props;

    const { name, value, onBlur } = field;

    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl);
    }
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
            />

            <div className={showError ? 'is-invalid' : ''}></div>
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    )
}

export default RamdomField;