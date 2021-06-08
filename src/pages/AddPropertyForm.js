import { Grid} from '@material-ui/core';
import React from 'react';
// import Input from '../components/Controls/Input';
import { useForm, Form }  from '../components/useForm';
import Controls from '../components/Controls/Controls';


const formValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    age: '',
    hireDate: new Date(),
    isPermanent: false
}

const genderItems = [
    {id:0, name:'male', title:'Male' },
    {id:1, name:'female', title:'Female' },
    {id:2, name:'other', title:'Others' },
];

const ageItems = [
    {id:0, name:'Ten', value:10 },
    {id:1, name:'Twenty', value:20 },
    {id:2, name:'Thirty', value:30 },
]

const AddPropertyForm = () => {

    const { values, setValues, handleInputChange } = useForm(formValues); 
   

    return ( 
            <Form>
                <Grid container > 
                    <Grid item xs={6}> 
                        <Controls.Input
                            variant='outlined'
                            label="Full Name"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleInputChange}
                        >
                        </Controls.Input>
                        <Controls.Input
                            variant='outlined'
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        >
                        </Controls.Input>
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.RadioGroup
                            label="Gender"
                            name="gender"
                            value={values.gender}
                            onChange={handleInputChange}
                            items={genderItems}
                        >
                        </Controls.RadioGroup>
                        <Controls.Select
                            label="Age"
                            name="age"
                            value={values.age}
                            onChange={handleInputChange}
                            items={ageItems}
                        > 
                        </Controls.Select>
                    
                    </Grid>
                    
                </Grid>
            </Form>
        );
}
 
export default AddPropertyForm;