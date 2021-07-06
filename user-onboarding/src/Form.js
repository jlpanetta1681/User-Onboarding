import React from 'react';







export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props
    
    const onSubmit = evt => {
        evt.prefentDefault()
        submit()
    }

    const onChange = evt => {

const { name, value, type, checked } = evt.target
const valueToUse = type === 'checkbox' ? checked : value
change(name, valueToUse)

    }
    
    return (
        
    <form className='form container' onSubmit={onSubmit}>
     <div className='form-submit'>
        <h2>Add A User</h2>
       {/* disable button until fields complete */}
        <button disabled={disabled}>Submit</button>


         <div className='errors'>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.termsOfService}</div>
            <div>{errors.experience}</div>
          </div>
          <div className='form-inputs'>
        <h4>General information</h4>
            
            
             <label>Full-Name
             <input
             value={values.name}
             onChange={onChange}
             name='Full-Name'
             type='text'
             />
             </label>
            
            
             <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>

        <label>Password
          <input
            value={values.password}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>
          {/* checkbox */}
    <div className='form-group checkboxes'>
        <h4>Terms Of Service</h4>
        <label>Terms 
          <input
            type="checkbox"
            name='termsOfService'
            checked={values.termsOfService}
            onChange={onChange}
          />
        </label>
        </div>
        {/* radio buttons */}

        <label>0 to 3 Years
          <input
            type="radio"
            name="experience"
            value="0 to 3 Years"
            checked={values.experience}
            checked={values.experience === "0 to 3 Years"}
            onChange={onChange}
          />
        </label>

        <label>3+ Years
          <input
            type='radio'
            name='experience'
            value="3+ Years"
            checked={values.experience}
            checked={values.experience === "3+ Years"}
            onChange={onChange}
          />
        </label>

        </div>
      </div>
    </form>
  ) 
}