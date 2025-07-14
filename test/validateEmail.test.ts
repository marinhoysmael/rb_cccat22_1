import { validateEmail } from "../src/validateEmail";

test.each([
    "email@valido.com",
    "user@sub.dominio.org",
    "user@empresa.it"
])("Deve testar um email válido: %s", (email: string) =>{
    const isValid = validateEmail(email);

    expect(isValid).toBe(true);
});


test.each([
    null,
    undefined,
    "AAAA",
    "email@invalido_)",
    "email@invalido."
])("Deve testar um email inválido: %s", (email: any) => {
    const isValid = validateEmail(email);

    expect(isValid).toBe(false);
});

