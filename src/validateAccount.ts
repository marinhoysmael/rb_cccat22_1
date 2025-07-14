import pgPromise from "pg-promise";
import { validateCpf } from "./validateCpf";
import { validateEmail } from "./validateEmail";
import { validateName } from "./validateName";
import { validatePassword } from "./validatePassword";

const connection = pgPromise()("postgres://postgres:123456@db:5432/app");

export async function validateAccount(account: any): Promise<string[]>{
    const erros = [];

    if(!validateName(account.name)){
        erros.push("O nome deve ser composto por nome e sobrenome");
    }

    if(!validateEmail(account.email)){
        erros.push("O email deve ser válido");
    }

    const [existingAccount] = await connection.query("select * from ccca.account where email = $1", [account.email])

    if(existingAccount){
        erros.push("Email já utilizado");
    }

    if(!validateCpf(account.document)){
        erros.push("CPF Inváldio");
    }

    if(!validatePassword(account.password)){
        erros.push("A senha deve ter no mínimo 8 caracteres com letras minúsculas, maiúsculas e números");
    }

    return erros;
}