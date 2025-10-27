export const truncateDecimal = (n: number, d: number) => {
  const truncated = Math.trunc(n * 10 ** d) / 10 ** d;
  return truncated.toFixed(d);
}
export const slugify = (str: string) => {
  const accentMap: { [key: string]: string } = {
    'á': 'a', 'à': 'a', 'ã': 'a', 'â': 'a', 'ä': 'a',
    'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
    'í': 'i', 'ì': 'i', 'î': 'i', 'ï': 'i',
    'ó': 'o', 'ò': 'o', 'õ': 'o', 'ô': 'o', 'ö': 'o',
    'ú': 'u', 'ù': 'u', 'û': 'u', 'ü': 'u',
    'ý': 'y', 'ÿ': 'y',
    'ñ': 'n',
    'ç': 'c'
  };
  return str.toLowerCase()
    .replace(/\s+/g, '-') // substituir espaços em branco por '-'
    .replace(/[áàãâäéèêëíìîïóòõôöúùûüýÿñç]/g, char => accentMap[char])
    .replace(/[^a-z0-9-]/g, '') // permitir '-' no resultado
    .replace(/-+/g, '-') // colapsar múltiplos '-' consecutivos
    .replace(/^-|-$/g, ''); // remover '-' no início/fim
}