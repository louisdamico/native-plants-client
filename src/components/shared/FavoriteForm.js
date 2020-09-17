import React from 'react'
// import { Link } from 'react-router-dom'
// import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const FavoriteForm = ({ favorite, handleSubmit, handleChange, cancelPath }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h3>New List:</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="state-category" onChange={handleChange} value={favorite.state}>
          <Form.Label>State</Form.Label>
          <Form.Control as="select" name="state" defaultValue={favorite.state}>
            <option value="" disabled hidden>State</option>
            <option value="TX">TX</option>
            <option value="IN">IN</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="ecoregion-category" onChange={handleChange} value={favorite.ecoregion}>
          <Form.Label>State</Form.Label>
          <Form.Control as="select" name="ecoregion" defaultValue={favorite.ecoregion}>
            <option value="" disabled hidden>EcoRegion</option>
            <option value="Chihuahuan Desert">Chihuahuan Desert</option>
            <option value="Arizona/New Mexico">Arizona/New Mexico</option>
            <option value="High Plains">High Plains</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="type-category" onChange={handleChange} value={favorite.type}>
          <Form.Label>Type</Form.Label>
          <Form.Control as="select" name="type" defaultValue={favorite.type}>
            <option value="" disabled hidden>EcoRegion</option>
            <option value="Tree">Tree</option>
            <option value="Shrub">Shrub</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="common_name-category" onChange={handleChange} value={favorite.type}>
          <Form.Label>common_name</Form.Label>
          <Form.Control as="select" name="common_name" defaultValue={favorite.common_name}>
            <option value="" disabled hidden>common_name</option>
            <option value="Live Oak">Live Oak</option>
            <option value="Cedar Elm">Cedar Elm</option>
          </Form.Control>
        </Form.Group>
        <Button className='primary' type="submit">Create New List</Button>
      </Form>
    </div>
  </div>
)
export default FavoriteForm

// <Dropdown className='drop-down-common_name'>
// <Dropdown.Toggle variant="success" id="dropdown-basic">
// Common Name
// </Dropdown.Toggle>
// <Dropdown.Menu>
// <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
// <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
// <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
// </Dropdown.Menu>
// </Dropdown>
// </div>
