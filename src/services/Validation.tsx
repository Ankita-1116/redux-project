const checkValidation: any = {
    setErrorMsz: (name: any, value: any, value2: any) => {
        if (name == 'mobileNumber') {
            return checkValidation.checkMobile(value) ? '' : 'Please enter valid phone';
        }
        if (name == 'password') {
            return checkValidation.checkPassword(value) ? '' : 'Please enter password upto 6 digit';
        }
        if (name == 'c_password') {
            return checkValidation.blankCheck(value)
                ? checkValidation.checkConfirmPasswordEqualPassword(value, value2) ? '' : 'Password and confirm password are not same'
                : 'Please enter password upto 6 digit';
        }
        if (name == 'dropdown') {
            return checkValidation.checkDropdown(value) ? '' : 'Please select any value';
        }
        if (name == 'address') {
            return checkValidation.address(value) ? '' : 'maximum 10 character allowed';
        }
        if (name == 'firstName' || name == 'lastName') {
            return checkValidation.blankCheck(value) ? '' : 'Please enter required field';
        }
        if (name == 'email') {
            return checkValidation.email(value) ? '' : 'Please enter valid email';
        }
        if (name == 'zipCode') {
            return checkValidation.checkZipcode(value) ? '' : 'Please enter zipcode';
        }
    },
    checkMobile: (mobileNumber: any) => {
        if (mobileNumber != '' && !isNaN(mobileNumber) && mobileNumber.length == 10) {
            return true;
        }
        return false;
    },
    checkPassword: (password: any) => {
        if (password != '' && password.length >= 6) {
            return true;
        }
        return false;
    },
    checkConfirmPasswordEqualPassword: (c_password: any, password: any) => {
        if (c_password == password) {
            return true;
        }
        return false;

    },
    checkDropdown: (dropdownValue: any) => {
        if (dropdownValue != 0) {
            return true;
        }
        return false;
    },
    address: (address: any) => {
        if (address != '' && address.length < 10) {
            return true;
        }
        return false;
    },
    email: (email: any) => {
        if (email != '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    },
    blankCheck: (value: any) => {
        if (value != '') {
            return true;
        }
        return false;
    },
    checkZipcode: (zipcode: any) => {
        if (zipcode != '' && !isNaN(zipcode)) {
            return true;
        }
        return false;
    },
}
export default checkValidation;
