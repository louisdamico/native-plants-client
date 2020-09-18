import React from 'react'
// import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import OutlineButton from 'react-bootstrap/Button'

const FavoriteForm = ({ favorite, handleSubmit, handleChange, cancelPath }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h3>New List:</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="state-category" onChange={handleChange} value={favorite.state}>
          <Form.Label>State</Form.Label>
          <Form.Control as="select" name="state" defaultValue={favorite.state} required>
            <option value="" disabled hidden>Select State</option>
            <option value="AZ">AZ</option>
            <option value="CO">CO</option>
            <option value="IN">IN</option>
            <option value="NM">NM</option>
            <option value="OK">OK</option>
            <option value="PA">PA</option>
            <option value="TX">TX</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="ecoregion-category" onChange={handleChange} value={favorite.ecoregion}>
          <Form.Label>EcoRegion</Form.Label>
          <Form.Control as="select" name="ecoregion" defaultValue={favorite.ecoregion} required>
            <option value="" disabled hidden>Select EcoRegion</option>
            <option value="Chihuahuan Desert">Chihuahuan Desert</option>
            <option value="Arizona/New Mexico">Arizona/New Mexico</option>
            <option value="High Plains">High Plains</option>
            <option value="Southwestern Tablelands">Southwestern Tablelands</option>
            <option value="Central Great Plains">Central Great Plains</option>
            <option value="Edwards Plateau">Edwards Plateau</option>
            <option value="Cross Tibers">Cross Tibers</option>
            <option value="Southern Texas Plains">Southern Texas Plains</option>
            <option value="Texas Blackland Prairies">Texas Blackland Prairies</option>
            <option value="East Central Texas Plains">East Central Texas Plains</option>
            <option value="Western Gulf Coastal Plain">Western Gulf Coastal Plain</option>
            <option value="South Central Plains">South Central Plains</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="type-category" onChange={handleChange} value={favorite.type}>
          <Form.Label>Species</Form.Label>
          <Form.Control as="select" name="type" defaultValue={favorite.type} required>
            <option value="" disabled hidden>Select Species</option>
            <option value="Trees">Trees</option>
            <option value="Conifers">Conifers</option>
            <option value="Shrubs">Shrubs</option>
            <option value="Succulents">Succulents</option>
            <option value="Vines">Vines</option>
            <option value="Grasses">Grasses</option>
            <option value="Wildflowers">Wildflowers</option>
            <option value="Other">Other</option>
          </Form.Control>
        </Form.Group>
        <label>Common Name</label><br/>
        <input
          placeholder='type common name'
          value={favorite.common_name}
          required
          name='common_name'
          onChange={handleChange}
        /> <br/>
        <OutlineButton variant='outline-primary' type="submit">Create New List</OutlineButton>
      </Form>
    </div>
  </div>
)
export default FavoriteForm
