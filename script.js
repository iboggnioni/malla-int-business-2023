const cursos = [
  { nombre: "Data Analytics I (Excel)", semestre: 1, aprobado: false, prerequisitos: [] },
  { nombre: "Álgebra Lineal", semestre: 1, aprobado: false, prerequisitos: [] },
  { nombre: "Cálculo I", semestre: 1, aprobado: false, prerequisitos: [] },
  { nombre: "Principles of Economics", semestre: 1, aprobado: false, prerequisitos: [] },
  { nombre: "Entrepreneurship & Innovation", semestre: 1, aprobado: false, prerequisitos: [] },
  { nombre: "Business English I", semestre: 1, aprobado: false, prerequisitos: [] },
  { nombre: "Pensamiento Crítico en Economía", semestre: 1, aprobado: false, prerequisitos: [] },
  { nombre: "Teología I", semestre: 1, aprobado: false, prerequisitos: [] },

  { nombre: "Data Analytics II (Programación)", semestre: 2, aprobado: false, prerequisitos: ["Data Analytics I (Excel)"] },
  { nombre: "Optimización", semestre: 2, aprobado: false, prerequisitos: ["Álgebra Lineal"] },
  { nombre: "Cálculo II", semestre: 2, aprobado: false, prerequisitos: ["Cálculo I"] },
  { nombre: "Principles of Microeconomics", semestre: 2, aprobado: false, prerequisitos: ["Principles of Economics"] },
  { nombre: "Excel II", semestre: 2, aprobado: false, prerequisitos: ["Data Analytics I (Excel)"] },
  { nombre: "Business English II", semestre: 2, aprobado: false, prerequisitos: ["Business English I"] },
  { nombre: "PEG 1", semestre: 2, aprobado: false, prerequisitos: [] },

  { nombre: "Data Analytics III", semestre: 3, aprobado: false, prerequisitos: ["Data Analytics II (Programación)"] },
  { nombre: "Estadísticas I", semestre: 3, aprobado: false, prerequisitos: ["Cálculo II"] },
  { nombre: "Microeconomics I", semestre: 3, aprobado: false, prerequisitos: ["Principles of Microeconomics"] },
  { nombre: "Contabilidad I", semestre: 3, aprobado: false, prerequisitos: [] },
  { nombre: "Global Business Environments", semestre: 3, aprobado: false, prerequisitos: [] },
  { nombre: "Business English III", semestre: 3, aprobado: false, prerequisitos: ["Business English II"] },
  { nombre: "Antropología Filosófica", semestre: 3, aprobado: false, prerequisitos: [] },
  { nombre: "Minor I", semestre: 3, aprobado: false, prerequisitos: [] },

  { nombre: "Estadísticas II", semestre: 4, aprobado: false, prerequisitos: ["Estadísticas I"] },
  { nombre: "Macroeconomics I", semestre: 4, aprobado: false, prerequisitos: ["Microeconomics I"] },
  { nombre: "Contabilidad II", semestre: 4, aprobado: false, prerequisitos: ["Contabilidad I"] },
  { nombre: "Latin American Business & Politics", semestre: 4, aprobado: false, prerequisitos: ["Global Business Environments"] },
  { nombre: "Business English IV", semestre: 4, aprobado: false, prerequisitos: ["Business English III"] },
  { nombre: "Teología II", semestre: 4, aprobado: false, prerequisitos: ["Teología I"] },
  { nombre: "Minor II", semestre: 4, aprobado: false, prerequisitos: ["Minor I"] },
  { nombre: "Ética General", semestre: 4, aprobado: false, prerequisitos: [] },

  { nombre: "Macroeconomics II", semestre: 5, aprobado: false, prerequisitos: ["Macroeconomics I"] },
  { nombre: "Financial Analysis", semestre: 5, aprobado: false, prerequisitos: ["Contabilidad II"] },
  { nombre: "Dynamic Global Forces", semestre: 5, aprobado: false, prerequisitos: [] },
  { nombre: "Minor III", semestre: 5, aprobado: false, prerequisitos: ["Minor II"] },

  { nombre: "International Trade", semestre: 6, aprobado: false, prerequisitos: ["Macroeconomics II"] },
  { nombre: "Corporate Finance", semestre: 6, aprobado: false, prerequisitos: ["Financial Analysis"] },
  { nombre: "People Development", semestre: 6, aprobado: false, prerequisitos: [] },

  { nombre: "International Finance", semestre: 7, aprobado: false, prerequisitos: ["Corporate Finance"] },
  { nombre: "Supply Chain Management", semestre: 7, aprobado: false, prerequisitos: [] },

  { nombre: "Comparative International Law", semestre: 8, aprobado: false, prerequisitos: [] },
  { nombre: "Optativo Teológico", semestre: 8, aprobado: false, prerequisitos: ["Teología II"] },
];

const container = document.getElementById('malla-container');

function renderMalla() {
  container.innerHTML = '';
  cursos.forEach((curso, i) => {
    const prereqsAprobados = curso.prerequisitos.every(pr => {
      const prereqCurso = cursos.find(c => c.nombre === pr);
      return prereqCurso && prereqCurso.aprobado;
    });

    const div = document.createElement('div');
    div.className = `course ${curso.aprobado ? 'approved' : ''}`;
    div.innerHTML = `
      <strong>${curso.nombre}</strong><br>
      <small>Semestre ${curso.semestre}</small><br>
      <label>
        <input type="checkbox" ${curso.aprobado ? 'checked' : ''} ${!prereqsAprobados ? 'disabled' : ''} 
        onchange="toggleAprobado(${i})">
        Aprobado
      </label>
    `;
    container.appendChild(div);
  });
}

function toggleAprobado(index) {
  cursos[index].aprobado = !cursos[index].aprobado;
  renderMalla();
}

renderMalla();
