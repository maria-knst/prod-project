import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
   // @ts-ignore
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>Click me</button>
            <Link to={'/'}>Main p</Link>
            <Link to={'/about'}>About p</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />}/>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;