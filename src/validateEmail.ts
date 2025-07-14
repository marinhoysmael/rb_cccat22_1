const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email: string){

    if(!email){
        return false;
    }

    const emailLowerCase = email.trim().toLowerCase();

    const isFormatValid = EMAIL_REGEX.test(emailLowerCase);

    if(!isFormatValid){
        return false;
    }

    return true;
}