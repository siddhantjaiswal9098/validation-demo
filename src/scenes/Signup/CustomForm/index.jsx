import React from 'react';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      number: '',
      password: '',
      confirmPassword: '',
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }
  validate = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, number, password, confirmPassword } = this.state;
    if(!firstName || !lastName || !email || !number || !password || !confirmPassword ) {
      this.setState({ error: 'All fields are required' })
    } else if (password !== confirmPassword) {
      this.setState({ error: 'password do not match' })
    } else {
      this.setState({ error: '' })
      alert(JSON.stringify(this.state))
    }
  }
  render() {
    const { firstName, lastName,
      email, number,
      password, confirmPassword, } = this.state;
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form className='customForm' onSubmit={this.validate}>
            <p>Firstname:</p>
            <input
              type='text'
              name='firstName'
              // required
              value={firstName}
              onChange={this.myChangeHandler}
            />
            <p>Lastname:</p>
            <input
              type='text'
              name='lastName'
              // required
              value={lastName}
              onChange={this.myChangeHandler}
            />

            <p>Email:</p>
            <input
              type='email'
              name='email'
              // required
              value={email}
              onChange={this.myChangeHandler}
            />
            <p>Number:</p>
            <input
              type='number'
              name='number'
              // required
              value={number}
              onChange={this.myChangeHandler}
            />

            <p>Password:</p>
            <input
              type='password'
              name='password'
              // required
              value={password}
              onChange={this.myChangeHandler}
            />
            <p>Confirm Password:</p>
            <input
              type='password'
              name='confirmPassword'
              // required
              value={confirmPassword}
              onChange={this.myChangeHandler}
            />
            <div>
              <button
                type='submit'
                name='signUp'>
                Signup
        </button>
            </div>
          </form>
        </div>
        <div style={{ fontSize: 20, display: 'flex', justifyContent: 'center', padding: 20, color: 'red' }}>
          {this.state.error}
        </div>
      </div>
    );
  }
}


export default MyForm;