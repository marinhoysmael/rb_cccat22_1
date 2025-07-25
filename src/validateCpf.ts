const VALID_LENGTH = 11;

export function validateCpf (cpf: string) {
	if (!cpf) return false;
	cpf = clean(cpf);
	if (cpf.length !== VALID_LENGTH) return false;
	if (allDigitsTheSame(cpf)) return false;
	const dg1 = calculateDigit(cpf, 10);
	const dg2 = calculateDigit(cpf, 11);
	return extractCheckDigit(cpf) === `${dg1}${dg2}`; 
}

function clean (cpf: string) {
	return cpf.replace(/\D/g, "");
}

function allDigitsTheSame (cpf: string) {
	const [firstDigit] = cpf;
	return [...cpf].every(digit => digit === firstDigit);
}

function calculateDigit (cpf: string, factor: number) {
	let total = 0;
	for (const digit of cpf) {
		if (factor > 1) total += parseInt(digit) * factor--;
	}
	const rest = total%11;
	return (rest < 2) ? 0 : 11 - rest;
}

function extractCheckDigit (cpf: string) {
	return cpf.slice(9);
}
