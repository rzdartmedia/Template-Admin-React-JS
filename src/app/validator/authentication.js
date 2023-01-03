const ValidatorAuthentication = {
    validatePostAuthentication(data) {
        let errors = {};
        let formIsValid = true;

        if (!data.email) {
            formIsValid = false;
            errors["email"] = "Please enter the email";
        }

        if (data.email) {
            const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!data.email.match(regexEmail)) {
                formIsValid = false;
                errors["email"] = "Please input format email";
            }
        }

        if (!data.password) {
            formIsValid = false;
            errors["password"] = "Please enter the password";
        }

        // if (data.password) {
        //     const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        //     if (!regexPassword.test(data.password)) {
        //         formIsValid = false;
        //         errors["password"] = "Should contain at least one upper case, one lower case, one digit and 8 characters in length";
        //     }
        // }

        return {
            errors,
            formIsValid
        };
    }
}

export default ValidatorAuthentication;