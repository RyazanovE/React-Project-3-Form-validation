import { useState } from "react";
import useValidate from "./useValidate";


const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [focused, setFocused] = useState(false);

    const valid = useValidate(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }
      
    const onBlur = (e) => {
        setFocused(false)
    }
    
    
    
    return {value, onChange, onBlur, ...valid};
}
 
export default useInput;
