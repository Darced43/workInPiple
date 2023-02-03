import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { useDispatch } from "react-redux" 
import InputMask from 'react-input-mask'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { editPersonName, editPersonPhone, editPersonBirthday, editPersonRole, editPersonArchive} from '../../store/personsSlice'
import './CardEdit.scss'



const CardEdit = ({person, navIid}) => {
    const dispatch = useDispatch()
    const id = Number(navIid.id)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [birthday, setBirthday] = useState('') 
    const [role, setRole] = useState('');
    const [isArchive, setArchive] = useState(person.isArchive);
    
    function editName(){
        if(name.trim().length){
            dispatch(editPersonName({id, name}))
            setName('')
        }
    }

    function editPhone(){
        if(phone.replace('_').length == 17){
            dispatch(editPersonPhone({id, phone}))
            setPhone('')
        }
    }

    function editBirthday(){
        if(birthday !== ''){
            const newBurthday = birthday.replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)
            dispatch(editPersonBirthday({id, newBurthday}))
        }
    }

    function editRole(){
        if(role == 10){
            const newRole = 'waiter'
            dispatch(editPersonRole({id, newRole}))
        }
        if(role == 20){
            const newRole = 'driver'
            dispatch(editPersonRole({id, newRole}))
        }
        if(role == 30){
            const newRole = 'cook'
            dispatch(editPersonRole({id, newRole}))
        }
    }

    
    function editArchive(){
        const checked = !isArchive
        dispatch(editPersonArchive({id, checked}))
    }

    return(
        <div className='edit_card'>
            <span className='person_data'>{person.name}</span>
            <div className='edit_block'>
                <TextField
                    className='input_field'
                    placeholder="Изменить имя"
                    variant="outlined"
                    value={name}
                    onChange={e => setName(e.target.value.replace(/\d/g,''))}
                />
                <Button onClick={editName}>Применить</Button>
            </div>
            <span className='person_data'>{person.phone}</span>
            <div className='edit_block'> 
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
                <Button onClick={editPhone}>Применить</Button>
            </div>
            <span className='person_data'>{person.birthday}</span>
            <div className='edit_block'>
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
                <Button onClick={editBirthday}>Применить</Button>
            </div>
            <span className='person_data'>{person.role}</span>
            <div className='edit_block'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Должность</InputLabel>
                <Select
                    className='input_field'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Должность!"
                    onChange={e => setRole(e.target.value)}
                >
                    <MenuItem value={10}>waiter</MenuItem>
                    <MenuItem value={20}>driver</MenuItem>
                    <MenuItem value={30}>cook</MenuItem>
                </Select>
            </FormControl>
                <Button onClick={editRole}>Применить</Button>
            </div>
                <FormGroup>
                    <FormControlLabel 
                        control={
                            <Checkbox
                                checked={isArchive}
                                onChange={(event) => {
                                                setArchive(event.target.checked),
                                                editArchive()
                                                }}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />} 
                        label={isArchive? 'в архиве' : 'не в архиве'}
                    />
                </FormGroup>
        </div>
    )
}

export default CardEdit