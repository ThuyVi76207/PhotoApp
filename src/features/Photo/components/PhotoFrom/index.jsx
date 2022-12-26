import React from "react";
import { Button, FormGroup, Label } from "reactstrap";
import PropTypes from 'prop-types';
// import Select from 'react-select';
import Images from "constants/images";
// import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import { FastField, Form, Formik } from "formik";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";

PhotoForm.prototype = {
    onSubmit: PropTypes.func,
}

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {
    const initialValues = {
        title: '',
        categoryId: null,
    };

    return (
        <Formik
            initialValues={initialValues}
        >
            {formikProps => {
                //do something here..
                const { values, errors, touched } = formikProps;
                console.log({ values, errors, touched });

                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label='Title'
                            placeholder="Eg: Wow nature..."
                        />
                        <FastField
                            name='categoryId'
                            component={SelectField}

                            label='Category'
                            placeholder='What is your photo category?'
                        />
                        {/* <FormGroup>
                            <Label for='titleId'>Title</Label>
                            <Input name='title' id='titleId' placeholder='Eg: Wow nature...' />
                        </FormGroup> */}
                        {/* <FormGroup>
                            <Label for='categoryId'>Category</Label>
                            <Select
                                id="categoryId"
                                name="categoryId"
                                placeholder='What is your photo category?'
                                options={PHOTO_CATEGORY_OPTIONS}
                            ></Select>
                        </FormGroup> */}
                        <FormGroup>
                            <Label className="categoryId">Photo</Label>
                            <div><Button type="button" outline color="primary">Random a photo</Button></div>
                            <div>
                                <img width='200px' height='200px' src={Images.banner1} alt='Colorful' />
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary">Add to album</Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default PhotoForm;