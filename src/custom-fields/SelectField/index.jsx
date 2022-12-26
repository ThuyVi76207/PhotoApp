import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormGroup, Label } from 'reactstrap';

SelectField.prototype = {
    field: PropTypes.object.isRequired,
    // form: PropTypes.object.isRequired,


    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
}

SelectField.defaultProps = {

    label: '',
    placeholder: '',
    disabled: false,
    options: PHOTO_CATEGORY_OPTIONS,
}

function SelectField(props) {
    const {
        field,
        options, label, placeholder, disabled
    } = props;
    const { name, value } = field //{...field} = {name, value, onChange, onBlur}

    const selectionOption = options.find(option => option.value === value);
    const handleSelectOptionChange = (selectOption) => {
        const selectionValue = selectOption ? selectOption.value : selectOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectionValue
            }
        };

        field.onChange(changeEvent);

    }
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                {...field}
                value={selectionOption}
                onChange={handleSelectOptionChange}

                placeholder={placeholder}
                isDisabled={disabled}
                options={options}

            />
        </FormGroup>
    )
}

export default SelectField;