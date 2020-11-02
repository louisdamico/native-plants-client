import React from 'react'
import Form from 'react-bootstrap/Form'
import OutlineButton from 'react-bootstrap/Button'

const FavoriteListForm = ({ favorite, handleSubmit, handleChange, cancelPath }) => (
  <div className="col-sm-10 col-md-8 mx-auto my-5 p-4 zone-chart">
    <div className="row">
      <Form onSubmit={handleChange}>
        <h3>Make New List:</h3><br/>
        <label>List Name</label><br/>
        <input
          placeholder='type list name'
          defaultValue=''
          required
          name='list_name'
          onChange={handleChange}
        /><br/>
        <OutlineButton onClick={handleChange}>Start List</OutlineButton>
      </Form>
    </div>
  </div>
)
export default FavoriteListForm
