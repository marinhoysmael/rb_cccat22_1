export function validateName(name: string): boolean {

    if(!name) return false;
    
    // Remove espaços extras e divide por espaço
    const parts = name.trim().split(/\s+/);
  
    // Verifica se tem pelo menos duas partes (nome + sobrenome)
    return parts.length >= 2;
}