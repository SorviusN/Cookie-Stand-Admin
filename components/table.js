import React from "react";

function Table(props) {

  const sales = props.stores.map(store => store.hourlySales)
  let dayTotal = 0;
  let nightTotal = 0;

  sales.forEach(storeArr => dayTotal += storeArr.reduce((a,b) => a + b, 0)) 

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <div id="storeTable">
          <table class="rounded-lg border-2 border-opacity-100 border-green-400 bg-green-100">
            <tr>
              <th>Location</th>
                {props.hours.map((hours, idx) =>
                <th key={idx} class="rounded-lg border-2 border-opacity-100 border-green-400">{hours}</th>
                )}
              <th class="rounded-lg border-2 border-opacity-100 border-green-400">Totals</th>
            </tr>
            {
              props.stores.map((store, idx) =>
              <tr>
                <td key={store.Id} class="rounded-lg border-2 border-opacity-100 border-green-400" >{store.location}<button class="trashIcon" value={store.Id} onClick={props.deleteStore}><i class="material-icons">delete</i></button></td>
                {
                  sales[idx].map( sales => 
                    <td class="rounded-lg border-2 border-opacity-100 border-green-400">{sales}</td>
                    )
                }
                <td class="rounded-lg border-2 border-opacity-100 border-green-400">{sales[idx].reduce(( a, b ) => a + b, 0)}</td>
              </tr>
              )
            }

            <tr>
              <th class="rounded-lg border-2 border-opacity-100 border-green-400">Totals</th>
              {
                props.hours.map((time, idx) => {
                  let hourTotal = 0;
                  sales.forEach(store => {
                    hourTotal += store[idx];
                  })
                  return <td class="rounded-lg border-2 border-opacity-100 border-green-400">{hourTotal}</td>
                })
              }
              <td class="rounded-lg border-2 border-opacity-100 border-green-400">{dayTotal}</td>
            </tr>
          </table>
        </div>
      </>
    )
}

export default Table;