import { clsx, type ClassValue } from "clsx"
import { format } from "date-fns";
import { twMerge } from "tailwind-merge"
import { ptBR } from 'date-fns/locale';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatDate(date: string){
  const dateObject = new Date(date);
  return format(dateObject, 'd \'de\' MMM \'de\' yyyy', { locale: ptBR });
}