import { Routes, Route } from "react-router-dom";
import React from 'react';
// import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import RequireAuthAdmin from "./components/RequireAuthAdmin";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import { useScroll } from "framer-motion";
import DetailPage from "pages/DetailPage";
import ActorDetailPage from "pages/ActorDetailPage";
import FavoriteMovies from "pages/FavoriteMovies";
import HistoryPage from "pages/HistoryPage";
import SettingsPage from "pages/SettingsPage";
import SettingsUser from "components/SettingsUser";
import SettingsAdmin from "components/SettingsAdmin";
import CreateMovie from "pages/CreateMovie";
import ChangeMovieInfo from "pages/ChangeMovieInfo";
import ForgetPass from "pages/ForgetPass";
import LoadingPage from "pages/LoadingPage";
const LazyHome = React.lazy(() => import('./pages/HomePage'))


function App() {
    const { scrollY } = useScroll()
    // dranov menq ashxatacnum enq getAllMoviesThunk funkcian vor@ json serveric data a stanum u qcum movieslice i mej, 
    //bayc qani vor hostingi tak chi ashxatum json server@ coment ari zut etqan mas@ u datan dreci dataBase.js i mej
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getAllMoviesThunk())
    // }, [dispatch])


    // notification i kodn a
    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         const uid = user.uid;
    //         console.log(user);
    //         // dispatch(login(user.email))
    //         console.log('user ka !!!!!!!!!');
    //     } else {
    //         console.log('user chka');
    //     }
    // });

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <RequireAuth>
                            <React.Suspense fallback={<LoadingPage />}>
                                <LazyHome />
                            </React.Suspense>
                        </RequireAuth>

                    }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgetpass" element={<ForgetPass />} />
                <Route path="/load" element={<LoadingPage />} />

                <Route path="/detail/:id"
                    element={
                        <RequireAuth>
                            <DetailPage />
                        </RequireAuth>} />
                <Route path="/detail/:id/:actorId"
                    element={
                        <RequireAuth>
                            <ActorDetailPage />
                        </RequireAuth>} />
                <Route path="/favoritemovies"
                    element={
                        <RequireAuth>
                            <FavoriteMovies />
                        </RequireAuth>} />
                <Route path="/history"
                    element={
                        <RequireAuth>
                            <HistoryPage />
                        </RequireAuth>} />
                <Route
                    path="/settings"
                    element={
                        <RequireAuth>
                            <SettingsPage />
                        </RequireAuth>}
                >
                    <Route
                        index
                        element={
                            <RequireAuthAdmin>
                                <SettingsUser />
                            </RequireAuthAdmin>}
                    />
                    <Route
                        path="/settings/admin"
                        element={
                            <RequireAuthAdmin>
                                <SettingsAdmin />
                            </RequireAuthAdmin>}
                    />
                    <Route
                        path="/settings/createmovie"
                        element={
                            <RequireAuthAdmin>
                                <CreateMovie getData={() => { return }} />
                            </RequireAuthAdmin>}
                    />
                    <Route
                        path="/settings/changemovieinfo"
                        element={
                            <RequireAuthAdmin>
                                <ChangeMovieInfo />
                            </RequireAuthAdmin>}
                    />

                </Route>
            </Route>
        </Routes>
    );
}

export default App;