import Form from "./form.js"
import Table from "./table.js"

function main(props) {
  const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

  return (
      <>
      <Form onSubmit={props.addStore} stores={props.stores}/>
      {
        // if the stores length is 0, do not display.
        props.stores.length == 0 ?
        ""
        : <Table deleteStore={props.deleteStore} stores={props.stores} hours={hours}/> 
      }
      </>
  )
}

export default main