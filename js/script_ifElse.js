var placa = "BRA-0000";

placa = prompt(
  "Digite a placa do seu veículo para ver qual dia ele pode circular"
);

placa = placa.toUpperCase();

if (placa >= "BRA-3000") {
  alert("Este veículo pode circular nas segundas, quartas e sextas");
} else if (placa <= "BRA-1000") {
  alert("Este veículo pode circular nas terças e quintas.");
} else {
  alert("Este veículo pode circular nos sábados e domingos.");
}
