import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //?Input
  const [logIn, setLogIn] = useState({ logEmail: "", logPassword: "" });

  const [signUp, setSignUp] = useState({
    signFirstName: "",
    signLastName: "",
    signEmail: "",
    signNumber: "",
    signPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChangeLog = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogIn({ ...logIn, [name]: value });
  };
  const handleChangeSign = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUp({ ...signUp, [name]: value });
  };

  const validateFields = (values) => {
    const errors = {};
    if (!values.logEmail) {
      errors.logEmail = "email is required!";
    }
    if (!values.logPassword) {
      errors.logPassword = "password is required!";
    }
    return errors;
  };

  const validateFieldsSign = (values) => {
    const errors = {};
    if (!values.signEmail) {
      errors.email = "field is required!";
    }
    if (!values.signFirstName) {
      errors.fName = "field is required!";
    }
    if (!values.signLastName) {
      errors.lName = "field is required!";
    }
    if (!values.signNumber) {
      errors.num = "field is required!";
    }
    if (!values.signPassword) {
      errors.psw = "field is required!";
    }
    return errors;
  };

  const handleSubmitLog = (e) => {
    e.preventDefault();
    setFormErrors(validateFields(logIn));
    setIsSubmit(true);
    if (logIn.logEmail && logIn.logPassword) {
      setLogIn({ logEmail: "", logPassword: "" });
    }
  };
  const handleSubmitSign = (e) => {
    e.preventDefault();
    setFormErrors(validateFieldsSign(signUp));
    setIsSubmit(true);
    if (
      signUp.signEmail &&
      signUp.signFirstName &&
      signUp.signLastName &&
      signUp.signNumber &&
      signUp.signPassword
    ) {
      const newSignUp = { id: new Date().getDate().toString(), ...signUp };
      console.log(newSignUp);
      setSignUp({
        signFirstName: "",
        signLastName: "",
        signEmail: "",
        signNumber: "",
        signPassword: "",
      });
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log();
    }
  }, [formErrors]);

  //? SideBar
  const [openSidebar, setOpenSidebar] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const showHideMsg = () => {
    setShowMsg(!showMsg);
  };

  const showHideSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <AppContext.Provider
      value={{
        openSidebar,
        showHideSidebar,
        showMsg,
        showHideMsg,
        logIn,
        signUp,
        handleChangeLog,
        handleChangeSign,
        handleSubmitLog,
        handleSubmitSign,
        formErrors,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
