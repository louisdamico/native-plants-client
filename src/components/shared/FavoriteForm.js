import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import OutlineButton from 'react-bootstrap/Button'

const FavoriteForm = ({ favorite, handleSubmit, handleChange, cancelPath }) => (
  <div className="col-sm-10 col-md-8 mx-auto my-5 zone-chart">
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <a href="https://www.pbs.org/wgbh/victorygarden/grow/primers_projects/planthardiness.html" target="blank" rel="us grow zone chart">
          <img className="img-fluid" src="https://www.pbs.org/wgbh/victorygarden/images/knowhow/pp/planthardiness/plant_hardiness_map.gif" alt="clickable image"/>
        </a><br/>
        <h3>Make New List:</h3>
        <Form onSubmit={handleSubmit}>
          <h4>{favorite.state}</h4>
          <Form.Group controlId="state-category" onChange={handleChange} value={favorite.state} required>
            <Form.Label>State</Form.Label>
            <Form.Control as="select" name="state" defaultValue={favorite.state} required>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="ecoregion-category" onChange={handleChange} value={favorite.ecoregion}>
            <Form.Label>Grow Zone</Form.Label>
            <Form.Control as="select" name="ecoregion" defaultValue={favorite.ecoregion} required>
              <option value="" disabled hidden>Select Grow Zone</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="Other">Other</option>
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
          <OutlineButton variant='outline-info' type="submit">Create New List</OutlineButton>
          <Link to={'/favorites'}>
            <OutlineButton variant='outline-secondary' type="button">Cancel</OutlineButton></Link>
        </Form>
      </div>
    </div>
  </div>
)
export default FavoriteForm
