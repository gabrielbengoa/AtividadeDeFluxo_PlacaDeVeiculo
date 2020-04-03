var placa = "BRA-0000";

placa = prompt(
  "Digite a placa do seu veículo para ver qual dia ele pode circular"
);

placa = placa.toUpperCase();

switch (placa) {
  case "BRA-0500":
  case "BRA-1400":
  case "BRA-2700":
    alert("Este veículo pode circular nas segundas, quartas, sextas.");
    break;
  case "BRA-3350":
    alert("Este veículo pode circular nas terças e quintas.");
    break;
  default:
    alert("Este veículo pode circular nos sábados e domingos.");
    break;
}
