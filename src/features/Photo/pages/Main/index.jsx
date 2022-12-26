import Banner from "components/Banner";
import Images from "constants/images";

import { Link } from "react-router-dom";
import { Container } from "reactstrap";


const MainPage = () => {
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