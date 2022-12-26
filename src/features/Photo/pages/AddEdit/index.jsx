
import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoForm from 'features/Photo/components/PhotoFrom';
import './AddEditStyles.scss';
const AddEditPage = () => {

    const handleSubmit = (values) => {
        console.log('Form submit', values);
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