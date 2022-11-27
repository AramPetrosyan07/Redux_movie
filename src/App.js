import { Routes, Route } from "react-router-dom";
import React from 'react';
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import RequireAuthAdmin from "./components/RequireAuthAdmin";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
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
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <RequireAuth>

                            <HomePage />
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