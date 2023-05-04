import { useState } from 'react';
import { Radio } from 'antd';
import './MyForm.css';

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [age, setAge] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [gender, setGender] = useState("");
  const [person, setPerson] = useState("");

  const onNameChange = event => {
    setName(event.target.value)
  }

  const onEmailChange = event => {
    setEmail(event.target.value)
  }

  const onMotherNameChange = event => {
    setMotherName(event.target.value)
  }
  const onFatherNameChange = event => {
    setFatherName(event.target.value)
  }

  const onMobileNoChange = event => {
    setMobileNo(event.target.value)
  }
  const onAgeChange = event => {
    setAge(event.target.value)
  }

  const onGenderChange = event => {
    setGender(event.target.value)
  }

  const onPersonChange = event => {
    setPerson(event.target.value)
  }

  const onFormSubmit = event => {
    event.preventDefault();
    let data = { name, email, fatherName, motherName, mobileNo, age }
    console.log('sending this data to server', data);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <div className='input-box'>
        <label>Enter your name:
          <input
            className='name-input'
            type="text"
            value={name}
            onChange={onNameChange}
            placeholder='Enter name' />
        </label>
      </div>
      <div className='input-box'>
        <label>Enter your email:
          <input
            className='email-input'
            type="text"
            value={email}
            onChange={onEmailChange}
            placeholder='Enter email' />
        </label>
      </div>
      <div className='input-box'>
        <label>Enter your father name:
          <input
            className='father-name-input'
            type="text"
            value={fatherName}
            onChange={onFatherNameChange}
            placeholder='Enter father name' />
        </label>
      </div>
      <div className='input-box'>
        <label>Enter your mother name:
          <input
            className='mother name-input'
            type="text"
            value={motherName}
            onChange={onMotherNameChange}
            placeholder='Enter mother name' />
        </label>
      </div>
      <div className='input-box'>
        <label>Enter your age:
          <input
            className='age-input'
            type="text"
            value={age}
            onChange={onAgeChange}
            placeholder='age' />
        </label>
      </div>
      <div className='input-box'>
        <label>Enter your mobile no:
          <input
            className='mobile-no-input' 
            type="text"
            value={mobileNo}
            onChange={onMobileNoChange}
            placeholder='mobile name' />
        </label>
      </div>
      <div className='input-box'>
        <Radio.Group onChange={onGenderChange} value={gender}>
          <div><Radio value={1}>Do you himanshu</Radio></div>
          <div><Radio value={2}>Do you timtim</Radio></div>
          <div><Radio value={3}>Do you nutan</Radio></div>
          <div>S <Radio value={4}>Do you ayush</Radio></div>
        </Radio.Group>
      </div>
      <div className='input-box'>

        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label for="vehicle2"> I have a cycle</label><br />
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
        <label for="vehicle3"> I have a bike</label>
      </div>
      <div className='input-box'>
        <textarea>
          Content of the textarea.
        </textarea>
      </div>
      <div className='input-box'>
        <select className='person-select' value={person} onChange={onPersonChange}>
          <option value="">Please select</option>
          <option value="himanshu">HImanshu kumar</option>
          <option value="nutan">Nutan kumari</option>
          <option value="timtim">Timtim kumari</option>
        </select>

      </div>
      <div className='form-save-box'>
        <input className='form-save-button' type="submit" value='Save' />
      </div>
    </form>
  )
}

export default MyForm;