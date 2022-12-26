import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormFeedback, FormGroup, Label } from 'reactstrap';

SelectField.prototype = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,


    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
}

SelectField.defaultProps = {

    label: '',
    placeholder: '',
    disabled: false,
    options: [],
}

function SelectField(props) {
    const {
        field, form,
        options, label, placeholder, disabled
    } = props;
    const { name, value } = field //{...field} = {name, value, onChange, onBlur}
    const { errors, touched } = form;
    const showError = errors[name] && touched[name]

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

                className={showError ? 'is-invalid' : ''}
            />

            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    )
}

export default SelectField;