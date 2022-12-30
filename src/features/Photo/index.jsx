import NotFound from "components/NotFound";
import React from "react";
import { Route, Routes, useResolvedPath, } from "react-router";
import AddEditPage from "./pages/AddEdit";
import MainPage from "./pages/Main";


function Photo() {
    const match = useResolvedPath();
    console.log({ match });
    console.log(match.pathname);
    return (
        <>
            <Routes>
                <Route exact path='/' element={<MainPage />}></Route>
                <Route exact path='/add' element={<AddEditPage />}></Route>
                <Route exact path='/:photoId' element={<AddEditPage />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>

        </>

    )
}

export default Photo;