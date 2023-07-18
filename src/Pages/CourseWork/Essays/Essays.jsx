import styled from "styled-components";

/* Component ---------------------------*/
import Essay from "./Essay";

const Essays = () => {
    return (
        <EssaysStyled className="Essays">
            <h2>Essays</h2>
            <Essay question="Q1: Explain the difference between HTML, CSS and JavaScript.">
                1. This is my answer
            </Essay>
            <Essay question="Q1: What is the difference between Git and Github?">
                2. This is my answer
            </Essay>
            <Essay question="Q1: What is the difference between JQuery and React?">
                3. This is my answer
            </Essay>
            <Essay question="Q1: The fourth one">4. This is my answer</Essay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
