function fromJSONToHTMLTable(jsonString) {
    let parsed = JSON.parse(jsonString)
    let columnNames = Object.keys(parsed[0]);
    let values = parsed.map(obj => Object.values(obj));
    let result = `<table>\n`;

    appendHeaders(columnNames);
    appendValues(values);
    result += `</table>`;

    function appendHeaders(columnNames) {
        result += `    <tr>`;
        for (let columnName of columnNames) {
            result += `<th>${escape(columnName)}</th>`;
        }
        result += `</tr>\n`;
    }

    function appendValues(values) {
        for (let value of values) {

            if (parsed.length < 3) {
                let [name, score] = [...value];
                result += `    <tr><td>${escape(name)}</td><td>${escape(score)}</td></tr>\n`;
            } else {
                let [name, score, grade] = [...value]
                result += `<tr><td>${escape(name)}</td><td>${escape(score)}</td><td>${escape(grade)}</td></tr>\n`;
            }
        }
    }

    function escape(value) {

        return value
            .toString()//Важно е за да се изпълни escape()
            .replace(/&/g, "&amp;")//.replace('&', '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    console.log(result);
}

fromJSONToHTMLTable(`[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]`

);