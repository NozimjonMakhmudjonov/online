import React from 'react';
import {InnerBtn, InnerBtnIcon, InnerBtnText} from "../mobile-sidear.styles";
import {Link} from "react-router-dom";

function MobileInnerBtn({icon, link, title, target, onClick}) {
    return (
        <InnerBtn onClick={onClick}>
            <InnerBtnIcon>
                {icon}
            </InnerBtnIcon>
            <InnerBtnText>
                <Link to={link} target={target}>{title}</Link>
            </InnerBtnText>
        </InnerBtn>
    );
}

export default MobileInnerBtn;