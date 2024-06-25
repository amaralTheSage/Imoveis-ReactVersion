export function CheckTipo(tipo: number) {
  if (tipo == 0) {
    return "Casa";
  } else if (tipo == 1) {
    return "Apartamento";
  } else if (tipo == 2) {
    return "Terreno";
  } else if (tipo == 3) {
    return "Campo";
  }
}
