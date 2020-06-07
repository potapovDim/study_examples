function getTableHeaderMap(headerNode) {

  const headerMap = Array
    .from(headerNode.querySelectorAll('td'))
    .reduce((acc, currnetcell, index) => {
      acc[currnetcell.innerText.trim()] = index;
      return acc;
    }, {})

  return headerMap;
}

// const body = document.querySelector('.machies_list_section table tbody')

function getBodyData(bodyNode, headerMap) {

  function getRowData(row) {
    const rowCells = row.querySelectorAll('td')

    const rowCellsData = Object.keys(headerMap).reduce((acc, key) => {
      acc[key] = rowCells[headerMap[key]].innerText.trim()
      return acc;
    }, {})

    return rowCellsData
  }

  const bodyRowsData = Array
    .from(bodyNode.querySelectorAll('tr'))
    .map((rowNode) => {
      return getRowData(rowNode)
    })

  return bodyRowsData
}