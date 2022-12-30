import Banner from "components/Banner";
import Images from "constants/images";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";

import PhotoList from "features/Photo/components/PhotoList";
import './MainStyles.scss';
import { removePhoto } from "features/Photo/photoSlice";


const MainPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //Từ page khác lấy dữ liệu từ redux
    const photos = useSelector(state => state.photos);
    console.log('List Photo: ', photos);
    //Xu ly Edit
    const handlePhotoEditClick = (photo) => {
        console.log('Photo Edit: ', photo);

        const itemPhotoUrl = `/photos/${photo.id}`;
        navigate(itemPhotoUrl);
    }
    //Xu ly Remove
    const handlePhotoRemoveClick = (photo) => {
        console.log('Photo Remove: ', photo);
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId)
        dispatch(action);
    }

    return (
        <div className="photo-main">
            <Banner backgroundUrl={Images.banner2} />
            <Container className="text-center">
                <div className="py-5">
                    <Link to='/photos/add'>Add new photo</Link>
                </div>
                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    )
}
export default MainPage;