(function() {
    const form = document.getElementById('table-form');
    const tableContainer = document.getElementById('table-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const days = document.getElementById('days').value;
        const maxLessons = document.getElementById('max-lessons').value;
        const language = document.getElementById('language').value;

        localStorage.setItem('tableParams', JSON.stringify({ days, maxLessons, language }));

        generateTable(days, maxLessons, language);
    });

    window.addEventListener('load', function() {
        const savedParams = JSON.parse(localStorage.getItem('tableParams'));
        if (savedParams) {
            document.getElementById('days').value = savedParams.days;
            document.getElementById('max-lessons').value = savedParams.maxLessons;
            document.getElementById('language').value = savedParams.language;
            generateTable(savedParams.days, savedParams.maxLessons, savedParams.language);
        }
    });

    function generateTable(days, maxLessons, language) {
        let tableHTML = `<table class="table"><thead><tr>`;

        for (let i = 1; i <= days; i++) {
            tableHTML += `<th>${language === 'ru' ? 'День ' + i : 'Day ' + i}</th>`;
        }

        tableHTML += `</tr></thead><tbody>`;

        for (let i = 1; i <= maxLessons; i++) {
            tableHTML += `<tr>`;
            for (let j = 1; j <= days; j++) {
                tableHTML += `<td>${language === 'ru' ? 'Занятие ' + i : 'Lesson ' + i}</td>`;
            }
            tableHTML += `</tr>`;
        }

        tableHTML += `</tbody></table>`;

        tableContainer.innerHTML = tableHTML;
    }
})();
