import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux" 
import InputMask from 'react-input-mask'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { addNewPerson } from '../../store/personsSlice'
import './NewPerson.scss'
import Modal from '../../components/Modal/Modal';

const NewPerson = () => {
    const dispatch = useDispatch()
    const persons = useSelector( state => state.persons.persons)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [birthday, setBirthday] = useState('') 
    const [role, setRole] = useState('');
    const [checked, setChecked] = useState(true);
    const [showModal, setShowModal] = useState( false ) 

    function createRole(){
        if(role == 10){
            return 'waiter'
        }
        if(role == 20){
            return 'driver'
        }
        if(role == 30){
            return 'cook'
        } else{
            return null
        }
    }

    function createId(){
        const last_persons = persons.slice(-1)[0].id 
        const id = last_persons + 1
        return id
    }

    function createPerson(){
        if(name.trim().length == 0){
            console.log('bingo name')
            return
        }
        if(phone.replace('_').length !== 17){
            return
        }
        if(birthday == ''){
            return
        }
        if( createRole() == null ){
            return
        } else {
            console.log('bingo')
            const id = createId()
            const new_role = createRole()
            const b_day = birthday.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)
            dispatch(addNewPerson({id, name, phone, checked, b_day, new_role }))
            setShowModal(true)
            setName('')
            setPhone('')
            setBirthday('')
            setRole('')
        }
    }

    return(
        <div className="new_person">
            <h2>Создать нового сотрудника</h2>
            <div className='new_person_block'>
                <span className='new_person_text' >Имя сотрудника</span>
                <TextField
                        className='input_field'
                        placeholder="Имя"
                        variant="outlined"
                        value={name}
                        onChange={e => setName(e.target.value.replace(/\d/g,''))}
                />
            </div>
            <div className='new_person_block'>
                <span className='new_person_text' >Номер сотрудника</span>
                <InputMask
                        required="1" 
                        className='number_phone' 
                        name="telephone" 
                        type='tel' 
                        mask="+7 (999) 999-9999" 
                        placeholder='Изменить номер' 
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
            </div>
            <div className='new_person_block'>
                <span className='new_person_text' >Дата рождения сотрудника</span>
                <TextField
                    className='input_field'
                    label="День рождения"
                    type="date"
                    value={birthday}
                    onChange={e => setBirthday(e.target.value)}
                    defaultValue="24-05-2017"
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
            </div>
            <div className='new_person_block'>
                <span className='new_person_text' >Должность сотрудника </span>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Должность</InputLabel>
                    <Select
                        className='input_field'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={role}
                        label="Должность"
                        onChange={e => setRole(e.target.value)}
                    >
                        <MenuItem value={10}>waiter</MenuItem>
                        <MenuItem value={20}>driver</MenuItem>
                        <MenuItem value={30}>cook</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='new_person_block'>
                <FormGroup>
                    <FormControlLabel 
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={(event) => {
                                                setChecked(event.target.checked)
                                                }}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />} 
                        label={checked? 'добавить в архиве' : 'убрать из архива'}
                    />
                </FormGroup>
            </div>
            <div className='new_person_button'>
                <Button onClick={createPerson}>Создать сотрудника</Button>
            </div>
            {
                showModal?
                    <Modal setShowModal={setShowModal}/>
                :
                null
            }
        </div>
    )
}

export default NewPerson