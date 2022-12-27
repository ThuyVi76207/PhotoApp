import Banner from "components/Banner";
import Images from "constants/images";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Container } from "reactstrap";


const MainPage = () => {
    //Từ page khác lấy dữ liệu từ redux
    const photos = useSelector(state => state.photos);
    console.log('List Photo: ', photos);
    return (
        <div className="photo-main">
            <Banner backgroundUrl={Images.banner2} />
            <Container>
                <Link to='/photos/add'>Add new photo</Link>
            </Container>
        </div>
    )
}
export default MainPage;