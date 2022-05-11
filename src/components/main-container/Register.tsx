import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value: any) {
    console.log(`selected ${value}`);
}
const clicked = (e: any) => {
    console.log('hello');
};

function Register() {
    return (
        <section>
            <form action="">
                <div className="form-item">
                    <label htmlFor="username">User Name :</label>
                    <input type="text" />
                </div>
                <div className="form-item">
                    <label htmlFor="email">email :</label>
                    <input type="email" />
                </div>
                <div className="form-item">
                    <label htmlFor="phoneNumber">Phone :</label>
                    <input type="text" />
                </div>
                <div className="form-item">
                    <label htmlFor="gender">Gender :</label>
                    <label htmlFor="genderMale">Male</label>
                    <input type="radio" onChange={() => clicked} value="Male" />
                    <label htmlFor="genderFemale">Female</label>
                    <input type="radio" value="Female" />
                </div>
                <label htmlFor="jobRole">
                    Job / Role :
                    <Select
                        defaultValue="select"
                        style={{ width: 120 }}
                        onChange={handleChange}
                    >
                        <Option value="one">option 1</Option>
                        <Option value="two"> option 2</Option>
                        <Option value="three">option 3</Option>
                        <Option value="four"> option 4</Option>
                    </Select>
                </label>
                <div className="form-item">
                    <label htmlFor="dateOfBirth">D.O.B</label>
                    <input type="date" />
                </div>
            </form>
        </section>
    );
}

export default Register;
