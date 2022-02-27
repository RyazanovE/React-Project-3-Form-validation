import React from "react";

export const ValidationMessage = ({value}) => {

    return (
        <div>
           {((value.isEmpty ) && <div style={{color: "red", textAlign: "left"}}>Empty</div>)}
           {((value.emailValidationError && !value.isEmpty) && <div style={{color: "red", textAlign: "left"}}>Email not valid</div>)}
           {((value.minLengthError && !value.isEmpty ) && <div style={{color: "red", textAlign: "left"}}>Password too short</div>)}
           {(value.isEmpty || value.minLengthError || value.emailValidationError) ? 
            ''
            :
            <div style={{color: "green", textAlign: "left"}}>Success</div>
            }
        </div>

    )
    

}