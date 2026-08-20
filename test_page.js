const spreadsheetId = '1owVsH0ipiKsSNAEgK564Baie2CaP0dacxYST_q32cz4';
    const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json`;

  fetch(url)
  .then((res) => res.text())
  .then((data) => {
    // Google returns JSON wrapped in a function call; strip wrapper
    const json = JSON.parse(data.substring(47, data.length - 2));
    console.log('Sheet Columns:', json.table.cols);
    console.log('Sheet Rows:', json.table.rows);
    console.log(json);
    var names = [];
    for (var i = 0; i < json.table.rows.length; ++i) {
        names.push(json.table.rows[i].c[1].v);
    } $("#names").text(names)

  });