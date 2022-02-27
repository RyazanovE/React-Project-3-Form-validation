import { useEffect, useState } from "react";

const useValidate = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [emailValidationError, setEmailValidationError] = useState(false);
  const [submitAccess, setSubmitAccess] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          String(value).length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;

        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case "emailValidation":
          (String(value)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )) ? setEmailValidationError(false) : setEmailValidationError(true)
          break;
      }
    }
  }, [value]);


  useEffect(() => {
    if (isEmpty || minLengthError || emailValidationError) {
        setSubmitAccess(false)
    }   else {
        setSubmitAccess(true)
    }
  }, [isEmpty, minLengthError, emailValidationError])

  return { isEmpty, minLengthError, emailValidationError, submitAccess };
};

export default useValidate;
