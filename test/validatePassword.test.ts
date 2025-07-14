import { validatePassword } from "../src/validatePassword";

test.each([
    "Abc12345",
    "*123aBcd",
    "123456789Av"
])("Deve testar um password válido: %s", (password: string) =>{
    const isValid = validatePassword(password);

    expect(isValid).toBe(true);
});


test.each([
    "abc12345",
    "*ABC123456"
])("Deve testar um password invalido: %s", (password: string) =>{
    const isValid = validatePassword(password);

    expect(isValid).toBe(false);
});
