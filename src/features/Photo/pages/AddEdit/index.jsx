
import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoForm from 'features/Photo/components/PhotoFrom';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import './AddEditStyles.scss';
const AddEditPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate(); //Redirect về trang chủ
    const { photoId } = useParams();
    // console.log({ photoId });
    const isAddMode = !photoId;

    const editedPhoto = useSelector(state => {
        const foundPhoto = state.photos.find(x => x.id === +photoId); //ep kieu number
        console.log({ photos: state.photos, photoId, foundPhoto })
        return foundPhoto;
    })

    const initialValues = isAddMode
        ? {
            title: '',
            categoryId: null,
            photo: '',
        }
        : editedPhoto;


    const handleSubmit = (values) => {
        return new Promise(resolve => {
            console.log('Form submit', values);

            setTimeout(() => {

                if (isAddMode) {
                    //Tao action và truyền payload
                    const action = addPhoto(values);
                    console.log({ action })
                    //Dispatch action
                    dispatch(action);


                } else {
                    //Do something here
                    const action = updatePhoto(values);
                    dispatch(action);
                }

                navigate('/photos')
                resolve(true);

            }, 2000)
        })

    }

    return (
        <div className="photo-edit">
            <Banner backgroundUrl={Images.banner3} />
            <div className="photo-edit__form">
                <PhotoForm
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

export default AddEditPage;