import { Grid} from '@material-ui/core';
import React from 'react';
import { useForm, Form }  from '../components/useForm';
import Controls from '../components/Controls/Controls';
import { storeProperty }  from '../services/PropertyService';


const formValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    category: 'rent',
    area: '',
    hireDate: new Date(),
    documents: false,
    files: []
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

    const validate = (updatedValues=values) => {

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let temp = {...errors}
        if ('fullName' in updatedValues) {
            temp.fullName = updatedValues.fullName? '': 'Field Required';
        }
        if ('email' in updatedValues) {
            temp.email = re.test(String(updatedValues.email).toLowerCase())? '': 'Invalid Email address';
        }
        if ('area' in updatedValues) {
            temp.area = updatedValues.area? '': 'Field Required';
        }
        if ('files' in updatedValues) {
            temp.files = updatedValues.files.length>0? '': 'Upload atleast on image';
        }

         setErrors({
            ...temp
        })

        if (updatedValues == values)
            console.log(temp);
            return Object.values(temp).every(x => x == "")
    }

    const { values, setValues, errors, setErrors, handleInputChange } = useForm(formValues, true, validate); 

    const handleSubmit= (e) => {
        e.preventDefault();
        if (validate()) {
            storeProperty(values);
        }
    }

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
                            error={errors.fullName}
                        >
                        </Controls.Input>
                        <Controls.Input
                            variant='outlined'
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            error={errors.email}
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
                            error={errors.area}
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
                <Grid container > 
                <Controls.FileUploader
                            name="files"
                            label="Upload Images"
                            value={values.files}
                            onChange={handleInputChange}
                            error={errors.files}
                            filesLimit={6} 
                        ></Controls.FileUploader>
                </Grid>
                <Grid container style={{justifyContent:'center', margin:'20px'}}> 
                    <Controls.Button
                        name="submit"
                        label="Submit"
                        onClick={handleSubmit}
                    >
                    </Controls.Button>
                </Grid>
            </Form>
        );
}
 
export default AddPropertyForm;