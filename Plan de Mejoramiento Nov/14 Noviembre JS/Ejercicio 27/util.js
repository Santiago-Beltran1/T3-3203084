// Creamos el saludo para exportarlo en el otro archivo
export const VERSION = "1.0.0";
export function SantiagoSal(SantiagoNom) {
 return `Hola ${SantiagoNom}. Versión: ${VERSION}`;
}
// Múltiples exports permitidos
export const SantiagoMax = 100;