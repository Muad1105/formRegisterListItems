import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { Radio } from 'antd';
import 'antd/dist/antd.css';
import { regexPhone, regexEmail, regexUserName } from '../../utils/utils';
import { saveUserDetails } from './redux/action';
import { useDispatch } from 'react-redux';
import { UserDetails } from './redux/model';
// import { useHistory } from 'react-router-dom';
// import { Locations } from '../../constants/locations';

const { Option } = Select;

function handleChange(value: any) {
    console.log(`selected ${value}`);
}

const clicked = (e: string) => {
    console.log('hello');
};

function Register() {
    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);

    const [phone, setPhone] = useState<string>('');

    const [validPhone, setValidPhone] = useState(false);

    const [genderValue, setGenderValue] = useState<string>('');

    const [role, setRole] = useState();

    const [dob, setDob] = useState();

    const [userDetails, setUserDetails] = useState<object[]>([]);

    const dispatch = useDispatch();
    // const history = useHistory();

    //user name check
    useEffect(() => {
        const result = regexUserName.test(user);
        console.log(user, result, genderValue);

        setValidUser(result);
    }, [user]);

    //email check
    useEffect(() => {
        const result = regexEmail.test(email);
        console.log('email', email, result);

        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = regexPhone.test(phone);
        console.log('phone', phone, result);

        setValidPhone(result);
    }, [phone]);

    const onChangeGender = (e: any) => {
        // console.log('radio checked', e.target.value);
        setGenderValue(e.target.value);
    };

    const submitValues = () => {
        if (
            validUser &&
            validEmail &&
            validPhone &&
            genderValue &&
            role &&
            dob
        ) {
            console.log(user, email, phone, genderValue, role, dob);
            const userDetails: UserDetails = {
                user,
                email,
                phone,
                genderValue,
                role,
                dob,
            };
            dispatch(saveUserDetails(userDetails));
            // history.push(Locations.HOME);
        } else {
            console.log('all values are not entered');
        }
    };

    function handleChange(value: any) {
        console.log(`selected ${value}`);
        setRole(value);
    }

    return (
        <section>
            <form action="">
                <div className="form-item">
                    <label htmlFor="username">User Name :</label>
                    <input
                        type="text"
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="email">email :</label>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label htmlFor="phoneNumber">Phone :</label>
                    <input
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="form-item">
                    <label>Gender: </label>
                    <Radio.Group onChange={onChangeGender} value={genderValue}>
                        <Radio value={1}>Male</Radio>
                        <Radio value={2}>Female</Radio>
                    </Radio.Group>
                </div>
                <label htmlFor="jobRole">
                    Job / Role :
                    <Select
                        defaultValue="select"
                        style={{ width: 120 }}
                        onChange={(e) => handleChange(e)}
                    >
                        <Option value="one">option 1</Option>
                        <Option value="two"> option 2</Option>
                        <Option value="three">option 3</Option>
                        <Option value="four">option 4</Option>
                    </Select>
                </label>
                <div className="form-item">
                    <label htmlFor="dateOfBirth">D.O.B</label>
                    <input
                        type="date"
                        onChange={(e: any) => {
                            console.log(e.target.value);
                            setDob(e.target.value);
                        }}
                    />
                </div>
                <button onClick={submitValues}>Submit</button>
            </form>
        </section>
    );
}

export default Register;
