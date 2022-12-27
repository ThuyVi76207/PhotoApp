
import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoForm from 'features/Photo/components/PhotoFrom';
import { addPhoto } from 'features/Photo/photoSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import './AddEditStyles.scss';
const AddEditPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate(); //Redirect về trang chủ

    const handleSubmit = (values) => {
        console.log('Form submit', values);
        //Tao action và truyền payload
        const action = addPhoto(values);
        console.log({ action })
        //Dispatch action
        dispatch(action);

        navigate('/photos')

    }

    return (
        <div className="photo-edit">
            <Banner backgroundUrl={Images.banner3} />
            <div className="photo-edit__form">
                <PhotoForm
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default AddEditPage;