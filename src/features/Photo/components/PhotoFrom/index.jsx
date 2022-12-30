import React from "react";
import { Button, FormGroup, Spinner } from "reactstrap";
import PropTypes from 'prop-types';
// import Select from 'react-select';
// import Images from "constants/images";
// import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import { FastField, Form, Formik } from "formik";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import RamdomField from "custom-fields/RandomField";
import * as Yup from 'yup';


PhotoForm.prototype = {
    onSubmit: PropTypes.func,
}

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {
    const { onSubmit, initialValues, isAddMode } = props;

    // const initialValues = {
    //     title: '',
    //     categoryId: null,
    //     photo: '',
    // };
    //Định nghĩa Validation với Yup. Do initialValues là object nên định nghĩa Yup cũng là một object
    //required tức là bắt buộc nhập.
    //Khi mà initialValues thay đổi thì nó lấy schema ra check có valid hay invavid
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required. '),
        categoryId: Yup.number().required('This field is required').nullable(),
        //Photo phu thuoc vao categoryId. Khi categoryId = 1 thi bat buoc phai co photo.
        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('This field is required.'),
            otherwise: Yup.string().notRequired(),
        })
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit} //props từ cha truyền xuống
        >
            {formikProps => {
                //do something here..
                const { values, errors, touched, isSubmitting } = formikProps;
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
                            options={PHOTO_CATEGORY_OPTIONS}
                        />
                        <FastField
                            name='photo'
                            component={RamdomField}

                            label="Photo"
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
                        {/* <FormGroup>
                            <Label className="categoryId">Photo</Label>
                            <div><Button type="button" outline color="primary">Random a photo</Button></div>
                            <div>
                                <img width='200px' height='200px' src={Images.banner1} alt='Colorful' />
                            </div>
                        </FormGroup> */}
                        <FormGroup>
                            <Button color={isAddMode ? "primary" : "success"}>
                                {isSubmitting && <Spinner size='sm' />}
                                {' '}
                                {isAddMode ? 'Add to album' : 'Edit photo Form'}

                            </Button>
                        </FormGroup>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default PhotoForm;