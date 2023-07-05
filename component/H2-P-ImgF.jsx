import React from "react";
function H2PImgF({title, texts}){
    return(
        <div className="Container_H2_p_imgF">
            <h2>{title}</h2>
            <div className="p__imgF">
                <div className="Container_p">
                    {texts.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default H2PImgF;