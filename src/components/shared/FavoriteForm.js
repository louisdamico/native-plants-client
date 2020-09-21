import React from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
import OutlineButton from 'react-bootstrap/Button'

const FavoriteForm = ({ favorite, handleSubmit, handleChange, cancelPath }) => (
  <div className="row">
    <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h3>Make New List:</h3>
      <Form onSubmit={handleSubmit}>
        <label>List Name</label><br/>
        <input
          placeholder='type list name'
          value={favorite.list_name}
          required
          name='list_name'
          onChange={handleChange}
        /> <br/>
        <Form.Group controlId="state-category" onChange={handleChange} value={favorite.state} required>
          <Form.Label>State</Form.Label>
          <Form.Control as="select" name="state" defaultValue={favorite.state} required>
            <option value="" disabled hidden>Select State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </Form.Control>
        </Form.Group>
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
        <label>Common Name</label><br/>
        <input
          placeholder='type common name'
          value={favorite.common_name}
          required
          name='common_name'
          onChange={handleChange}
        /> <br/>
        <OutlineButton variant='outline-primary' type="submit">Create New List</OutlineButton>
        <Link to={'/favorites'}>
          <OutlineButton variant='outline-secondary' type="button">Cancel</OutlineButton></Link>
      </Form>
    </div>
  </div>
)
export default FavoriteForm
