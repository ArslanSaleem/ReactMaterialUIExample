import { Grid} from '@material-ui/core';
import React from 'react';
import { useForm, Form }  from '../components/useForm';
import Controls from '../components/Controls/Controls';


const formValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    category: 'rent',
    age: '',
    hireDate: new Date(),
    documents: false
}

const categoryItems = [
    {id:0, name:'rent', title:'Rent' },
    {id:1, name:'sale', title:'Sale' }
];

const areaItems = [
    {id:0, name:'5 Marla', value:5 },
    {id:1, name:'7 Marla', value:7 },
    {id:2, name:'10 Marla', value:10 },
    {id:2, name:'15 Marla', value:15 },
    {id:2, name:'20 Marla', value:20 },
]

const AddPropertyForm = () => {

    const { values, setValues, handleInputChange } = useForm(formValues); 
   

    return ( 
            <Form>
                <Grid container > 
                    <Grid item xs={6}> 
                        <Controls.Input
                            variant='outlined'
                            label="Owner Name"
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
                        <Controls.DatePicker
                            name="hireDate"
                            label="Purchase Date"
                            value={values.hireDate}
                            onChange={handleInputChange}
                        ></Controls.DatePicker>
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.RadioGroup
                            label="Category"
                            name="category"
                            value={values.category}
                            onChange={handleInputChange}
                            items={categoryItems}
                        >
                        </Controls.RadioGroup>
                        <Controls.Select
                            label="Area"
                            name="area"
                            value={values.area}
                            onChange={handleInputChange}
                            items={areaItems}
                        > 
                        </Controls.Select>
                        <Controls.CheckBox
                            label="Documents"
                            name="documents" 
                            value={values.documents}
                            onChange={handleInputChange}
                        >
                        </Controls.CheckBox>
                    
                    </Grid>
                    
                </Grid>
            </Form>
        );
}
 
export default AddPropertyForm;