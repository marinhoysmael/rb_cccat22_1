import axios from "axios";
import pgp from "pg-promise";

const connection = pgp()("postgres://postgres:123456@db:5432/app");

test("Deve criar uma conta", async () => {
    // Given
    const input = {
        name: "John Doe",
        email: "john.doe@gmail.com",
        document: "97456321558",
        password: "asdQWE123"
    }
    // When
    const responseSignup = await axios.post("http://localhost:3000/signup", input);
    const outputSignup = responseSignup.data;
    // Then
    expect(outputSignup.accountId).toBeDefined();
    const responseGetAccount = await axios.get(`http://localhost:3000/accounts/${outputSignup.accountId}`);
    const outputGetAccount = responseGetAccount.data;
    expect(outputGetAccount.name).toBe(input.name);
    expect(outputGetAccount.email).toBe(input.email);
    expect(outputGetAccount.document).toBe(input.document);
    expect(outputGetAccount.password).toBe(input.password);

    await connection.query("delete from ccca.account where account_id = $1",[outputSignup.accountId]);
});

test.each([
    {name: "John", email: "john.doe@gmail.com", document: "97456321558", password: "asdQWE123"},
    {name: "John Doe", email: "john.doe@com", document: "97456321558", password: "asdQWE123"},
    {name: "John Doe", email: "novoemail@gmail.com", document: "97456321557", password: "asdQWE123"},
    {name: "John Doe", email: "novoemail@gmail.com", document: "97456321558", password: "asdqwe123"}
])("Deve retornar 400 para a conta: %s", async (account: any) => {
    // When
    try{
        await axios.post("http://localhost:3000/signup", account);

    } catch (error) {
        if (axios.isAxiosError(error)) {
            const status = error.response?.status;
            
            // Then
            expect(status).toBe(400);   
        }
    }

   

});
