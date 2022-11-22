import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { setUser } from 'store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setLargeBgMovies } from 'store/slices/moviesSlice';

export default function Auth(uid) {
    const { movies } = useSelector((state) => state.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getUser(uid)
    }, [uid])

    useEffect(() => {
        const ids = [];
        movies.forEach((el) => {
            if (el.largeBg) ids.push(el.id);
        });
        dispatch(setLargeBgMovies(ids));
    }, [movies]);

    async function getUser(uid) {
        const docRef = doc(db, "users", uid);
        const user = await getDoc(docRef);
        const {
            id,
            name,
            date,
            email,
            pass,
            color,
            favorite,
            voteMovies,
            moviesHistory,
            role,
        } = user.data();

        dispatch(
            setUser({
                id,
                name,
                date,
                email,
                pass,
                color,
                favorite,
                voteMovies,
                moviesHistory,
                role,
            })
        );
        navigate("/");
    }

}