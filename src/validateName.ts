export function validateName(name: string): boolean {

    if(!name) return false;

    // Remove espaços extras e divide por espaço
    const parts = name.trim().split(/\s+/);
  
    return parts.length >= 2;
}