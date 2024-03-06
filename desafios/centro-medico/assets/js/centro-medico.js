document.addEventListener("DOMContentLoaded", () => {
  const radiologiaArray = [
    {
      hora: "11:00",
      especialista: "IGNACIO SCHULZ",
      paciente: "FRANCISCA ROJAS",
      rut: "9878782-1",
      prevision: "FONASA",
    },
    {
      hora: "11:30",
      especialista: "FEDERICO SUBERCASEAUX",
      paciente: "PAMELA ESTRADA",
      rut: "15345241-3",
      prevision: "ISAPRE",
    },
    {
      hora: "15:00",
      especialista: "FERNANDO WURTHZ",
      paciente: "ARMANDO LUNA",
      rut: "16445345-9",
      prevision: "ISAPRE",
    },
    {
      hora: "15:30",
      especialista: "ANA MARIA GODOY",
      paciente: "MANUEL GODOY",
      rut: "17666419-0",
      prevision: "FONASA",
    },
    {
      hora: "16:00",
      especialista: "PATRICIA SUAZO",
      paciente: "RAMON ULLOA",
      rut: "14989389-K",
      prevision: "FONASA",
    },
  ];

  const traumatologiaArray = [
    {
      hora: "8:00",
      especialista: "MARIA PAZ ALTUZARRA",
      paciente: "PAULA SANCHEZ",
      rut: "15554774-5",
      prevision: "FONASA",
    },
    {
      hora: "10:00",
      especialista: "RAUL ARAYA",
      paciente: "ANGÉLICA NAVAS",
      rut: "15444147-9",
      prevision: "ISAPRE",
    },
    {
      hora: "10:30",
      especialista: "MARIA ARRIAGADA",
      paciente: "ANA KLAPP",
      rut: "17879423-9",
      prevision: "ISAPRE",
    },
    {
      hora: "11:00",
      especialista: "ALEJANDRO BADILLA",
      paciente: "FELIPE MARDONES",
      rut: "1547423-6",
      prevision: "ISAPRE",
    },
    {
      hora: "11:30",
      especialista: "CECILIA BUDNIK",
      paciente: "DIEGO MARRE",
      rut: "16554741-K",
      prevision: "FONASA",
    },
    {
      hora: "12:00",
      especialista: "ARTURO CAVAGNARO",
      paciente: "CECILIA MENDEZ",
      rut: "9747535-8",
      prevision: "ISAPRE",
    },
    {
      hora: "12:30",
      especialista: "ANDRES KANACRI",
      paciente: "MARCIAL SUAZO",
      rut: "11254785-5",
      prevision: "ISAPRE",
    },
  ];

  const dentalArray = [
    {
      hora: "8:30",
      especialista: "ANDREA ZUÑIGA",
      paciente: "MARCELA RETAMAL",
      rut: "11123425-6",
      prevision: "ISAPRE",
    },
    {
      hora: "11:00",
      especialista: "MARIA PIA ZAÑARTU",
      paciente: "ANGEL MUÑOZ",
      rut: "9878789-2",
      prevision: "ISAPRE",
    },
    {
      hora: "11:30",
      especialista: "SCARLETT WITTING",
      paciente: "MARIO KAST",
      rut: "7998789-5",
      prevision: "FONASA",
    },
    {
      hora: "13:00",
      especialista: "FRANCISCO VON TEUBER",
      paciente: "KARIN FERNANDEZ",
      rut: "18887662-K",
      prevision: "FONASA",
    },
    {
      hora: "13:30",
      especialista: "EDUARDO VIÑUELA",
      paciente: "HUGO SANCHEZ",
      rut: "17665461-4",
      prevision: "FONASA",
    },
    {
      hora: "14:00",
      especialista: "RAQUEL VILLASECA",
      paciente: "ANA SEPULVEDA",
      rut: "14441281-0",
      prevision: "ISAPRE",
    },
  ];

  const newPatientsTrauma = [
    {
      hora: "09:00",
      especialista: "RENE POBLETE",
      paciente: "ANA GELLONA",
      rut: "13123329-7",
      prevision: "ISAPRE",
    },
    {
      hora: "09:30",
      especialista: "MARIA SOLAR",
      paciente: "RAMIRO ANDRADE",
      rut: "12221451-K",
      prevision: "FONASA",
    },
    {
      hora: "10:00",
      especialista: "RAUL LOYOLA",
      paciente: "CARMEN ISLA",
      rut: "10112348-3",
      prevision: "ISAPRE",
    },
    {
      hora: "10:30",
      especialista: "ANTONIO LARENAS",
      paciente: "PABLO LOAYZA",
      rut: "13453234-1",
      prevision: "ISAPRE",
    },
    {
      hora: "12:00",
      especialista: "MATIAS ARAVENA",
      paciente: "SUSANA POBLETE",
      rut: "14345656-6",
      prevision: "FONASA",
    },
  ];

  const radiologiaHtml = document.getElementById("radiologiaHtml");
  const traumaHtml = document.getElementById("traumaHtml");
  const dentalHtml = document.getElementById("dentalHtml");
  const tableRadiologia = document.getElementById("tableRadiologia");
  const tableTrauma = document.getElementById("tableTrauma");
  const tableDental = document.getElementById("tableDental");
  const dentalList = document.getElementById("dentalList");
  const totalPatients = document.getElementById("totalPatients");
  const totalDentalIsapre = document.getElementById("totalDentalIsapre");
  const totalTraumaFonasa = document.getElementById("totalTraumaFonasa");
  const totalP = document.getElementById("total");
  const totalRadio = document.getElementById("totalRadio");
  const totalTraumados = document.getElementById("totalTraumados");
  const totalOdonto = document.getElementById("totalOdonto");

  //desafio centro medico

  Array.prototype.push.apply(traumatologiaArray, newPatientsTrauma);

  radiologiaHtml.textContent = `Primer Registro: ${
    radiologiaArray[0].paciente
  } - ${radiologiaArray[0]["prevision"]}
    | Último Registro: ${radiologiaArray[radiologiaArray.length - 1].paciente} -
    ${radiologiaArray[radiologiaArray.length - 1].prevision}`;

  traumaHtml.textContent = `Primer Registro: ${
    traumatologiaArray[0].paciente
  } - ${traumatologiaArray[0]["prevision"]}
    | Último Registro: ${
      traumatologiaArray[traumatologiaArray.length - 1].paciente
    } -
    ${traumatologiaArray[traumatologiaArray.length - 1].prevision}`;

  dentalHtml.textContent = `Primer Registro: ${dentalArray[0].paciente} - ${
    dentalArray[0]["prevision"]
  }
    | Último Registro: ${dentalArray[dentalArray.length - 1].paciente} -
    ${dentalArray[dentalArray.length - 1].prevision}`;

  //quitar primero y ultimo de radiologia
  const radiologia = () => {
    tableRadiologia.innerHTML = "";
    radiologiaArray.shift();
    radiologiaArray.pop();
    totalRadio.innerHTML = "";
    let tot = 0;
    radiologiaArray.forEach((item, index, array) => {
      tot += 1;
      tableRadiologia.innerHTML += `
        <tr>
            <td scope="row">${item.hora}</td>
            <td>${item.especialista}</td>
            <td>${item.paciente}</td>
            <td>${item.rut}</td>
            <td>${item.prevision}</td>
        </tr>
        `;
    });
    totalRadio.innerHTML = `Numero de Pacientes Atendidos: ${tot}`;
  };
  radiologia();

// traumatologia  
  const traumatologia = () => {
    tableTrauma.innerHTML = "";
    totalTraumados.innerHTML = "";
    let tot = 0;
    traumatologiaArray.forEach((t, index, array) => {
      tot += 1;  
      tableTrauma.innerHTML += `
            <tr>
                <td scope="row">${t.hora}</td>
                <td>${t.especialista}</td>
                <td>${t.paciente}</td>
                <td>${t.rut}</td>
                <td>${t.prevision}</td>
            </tr>
            `;
    });
    totalTraumados.innerHTML = `Numero de Pacientes Atendidos: ${tot}`;
  };
  traumatologia();
  
// odontologia
  const odontologia = () => {
    tableDental.innerHTML = "";

    dentalArray.forEach((item, index, array) => {
        tableDental.innerHTML += `
                <tr>
                    <td scope="row">${item.hora}</td>
                    <td>${item.especialista}</td>
                    <td>${item.paciente}</td>
                    <td>${item.rut}</td>
                    <td>${item.prevision}</td>
                </tr>
                `;
    });
  };
  odontologia();
  

  // listar pacientes en Dental en formato parrafo
  const dentalParrafo = () => {
    totalOdonto.innerHTML = "";
    let tot = 0;
    dentalArray.forEach((item) => {
      tot += 1;
      dentalList.innerHTML += `
        <p>${item.hora} - ${item.especialista} - ${item.paciente} - ${item.rut} - ${item.prevision}
        </p>
        `;
    });
    totalOdonto.innerHTML = `Numero de Pacientes Atendidos: ${tot}`;
  };

  dentalParrafo();

  // listar total de pacientes
  const total = () => {
    const totalArray = traumatologiaArray.concat(radiologiaArray, dentalArray);

    totalPatients.innerHTML = "";
    totalP.innerHTML = "";
    let tot = 0;
    totalArray.forEach((t, index, array) => {
      tot += 1;
      totalPatients.innerHTML += `
            <tr>
                <td scope="row">${t.hora}</td>
                <td>${t.especialista}</td>
                <td>${t.paciente}</td>
                <td>${t.rut}</td>
                <td>${t.prevision}</td>
            </tr>
            `;
    });
    totalP.innerHTML = `Numero de Pacientes: ${tot}`;
  };
  total();

  // total dental Isapre
  const totalIsapre = () => {
    totalDentalIsapre.innerHTML = "";
    const newArray = dentalArray.filter((item) => item.prevision === "ISAPRE");
    newArray.forEach((d) => {
      totalDentalIsapre.innerHTML += `
            <tr>
                <td scope="row">${d.hora}</td>
                <td>${d.especialista}</td>
                <td>${d.paciente}</td>
                <td>${d.rut}</td>
                <td>${d.prevision}</td>
            </tr>
            `;
    });
  };
  totalIsapre();

  // total trauma Fonasa
  const totalFonasa = () => {
    totalTraumaFonasa.innerHTML = "";
    const newArray = traumatologiaArray.filter(
      (item) => item.prevision === "FONASA"
    );
    newArray.forEach((d) => {
      totalTraumaFonasa.innerHTML += `
            <tr>
                <td scope="row">${d.hora}</td>
                <td>${d.especialista}</td>
                <td>${d.paciente}</td>
                <td>${d.rut}</td>
                <td>${d.prevision}</td>
            </tr>
            `;
    });
  };
  totalFonasa();
});
