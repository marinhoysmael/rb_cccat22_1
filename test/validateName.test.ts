import { validateName } from "../src/validateName";

test.each([
    "Ysmael Marinho",
    "Ysmael Marinho Santos",
    "Ysmael Marinho Santos Júnior"
])("Deve testar um nome válido: %s", (name: string) =>{
    const isValid = validateName(name);

    expect(isValid).toBe(true);
});


test.each([
    null,
    undefined,
    "AAAA",
    "NomeInvalido1",
    "Nome_Invalido_2"
])("Deve testar um nome inválido: %s", (name: any) => {
    const isValid = validateName(name);

    expect(isValid).toBe(false);
});