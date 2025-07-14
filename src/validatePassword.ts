const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export function validatePassword(password: string){

    if(!password){
        return false;
    }

    return PASSWORD_REGEX.test(password);
}