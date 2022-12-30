import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from 'reactstrap'

import './HeaderStyle.scss';

Header.prototype = {};
function Header() {
    const [activeHeader, setactiveHeader] = useState(false);

    const [isSroll, setIsSroll] = useState(false);
    useEffect(() => {
        const handleSroll = () => {
            const isSrolledFarFromTop = window.scrollY > 50;
            console.log('Sroll: ', isSrolledFarFromTop)
            setIsSroll(isSrolledFarFromTop);
        }
        window.addEventListener('scroll', handleSroll);
        return () => window.removeEventListener('scroll', handleSroll);
    }, [])
    return (
        <header className={isSroll ? "header header__active-sroll" : "header"}>
            <Container>
                <Row className="justify-content-between">
                    <Col xs='auto'>
                        <a
                            className="header__link header__title"
                            href="https://www.youtube.com/watch?v=uiZxnTHPUtQ"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Easy Frontend
                        </a>
                    </Col>
                    <Col xs='auto'>
                        <NavLink

                            className={`header__link ${activeHeader ? 'header__link--active' : ''}`}
                            exact='true'
                            to='/photos'
                            onClick={() => setactiveHeader(!activeHeader)}
                        >
                            Redux Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;