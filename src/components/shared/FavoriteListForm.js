import React from 'react'
import Form from 'react-bootstrap/Form'
import OutlineButton from 'react-bootstrap/Button'
import { withRouter } from 'react-router'

const FavoriteListForm = ({ favorite, handleChange, show, onChange, handleClick, cancelPath }) => (
  <div className="col-sm-10 col-md-8 mx-auto my-5 p-4 zone-chart">
    <div className="row">
      <Form onChange={handleChange}>
        <h3>Make New List:</h3><br/>
        <label>List Name</label><br/>
        {console.log(favorite.list_name)}
        <input
          placeholder='type list name'
          defaultValue={favorite.list_name}
          required
          name='list_name'
          onChange={onChange}
          // onClick={handleClick}
        /><br/>
        <OutlineButton onClick={show}>Start List</OutlineButton>
      </Form>
    </div>
  </div>
)
export default withRouter(FavoriteListForm)
