import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

InputField.prototype = {
    field: PropTypes.object.isRequired,
    // form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
}

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function InputField(props) {
    const {
        field,
        type, label, placeholder, disabled
    } = props;
    const { name } = field //{...field} = {name, value, onChange, onBlur}
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field} //name={name} value={value} onChange={onChange} onBlur={onBlur}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
            />
        </FormGroup>
    )
}

export default InputField;