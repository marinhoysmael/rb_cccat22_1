import axios from "axios";
import { validateAccount } from "../src/validateAccount";

test.each([
    {
        name: "Ysmael Marinho",
        email: "email@valido.com",
        document: "21555410073",
        password: "asdQWE123"
    }
])("Deve testar uma conta válido: %s", async (account: any) => {
    const errors = await validateAccount(account);
    expect(errors.length).toBe(0);
});