import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./Updated Lgo.png";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="CrossFit Decimate Logo" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #13bbbb;
    width: 100%;
    height: 100%;

    img {
        width: 200px;
        height: 200px;
    }
`;
