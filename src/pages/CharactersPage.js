import {Characters} from "../components";
import {useNavigate} from "react-router-dom";
import {useChapter} from "../hooks";

const CharactersPage = () => {
    const navigate = useNavigate();
    const {setChapter} = useChapter();
    const back = () => {
        setChapter();
        navigate(-1);
    }
    return (
        <div>
            <button onClick={back}>BACK</button>
            <Characters />
            
        </div>
    );
};

export {CharactersPage};