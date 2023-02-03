import { Typography } from "@mui/material"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Filter.scss'

const Filter = ({
                sortName, 
                setSortName, 
                sortPersons, 
                sortBday, 
                setSortBday, 
                sortPersonBday, 
                sortRole, 
                setSortRole, 
                sertPersonRole, 
                sortArchive, 
                setSortArchive, 
                sortPersonInArchive}) => {
    return(
        <div className="filter">
                <Typography className='filter__agl' variant="h4">Фильтр сотрудников</Typography>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>По имени</InputLabel>
                    <Select
                        value={sortName}
                        label="По имени"
                        onChange={e => {setSortName(e.target.value), sortPersons(e.target.value)}}
                    >
                        <MenuItem value="">
                            <em>сбросить</em>
                        </MenuItem>
                        <MenuItem value={10}>с начала</MenuItem>
                        <MenuItem value={20}>с конца</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel >По дате рождения</InputLabel>
                    <Select
                        value={sortBday}
                        label="По дате рождения"
                        onChange={e => {setSortBday(e.target.value), sortPersonBday(e.target.value)}}
                    >
                        <MenuItem value="">
                            <em>сбросить</em>
                        </MenuItem>
                        <MenuItem value={10}>с младжего</MenuItem>
                        <MenuItem value={20}>со страшего</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>По должности</InputLabel>
                    <Select
                        value={sortRole}
                        label="По должности"
                        onChange={e => {setSortRole(e.target.value), sertPersonRole(e.target.value)}}
                    >
                        <MenuItem value="">
                            <em>сбросить</em>
                        </MenuItem>
                        <MenuItem value={"driver"}>водитель</MenuItem>
                        <MenuItem value={"waiter"}>официант</MenuItem>
                        <MenuItem value={"cook"}>повар</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>По архиву</InputLabel>
                    <Select
                        value={sortArchive}
                        label="По архиву"
                        onChange={e => {setSortArchive(e.target.value), sortPersonInArchive(e.target.value)}}
                    >
                        <MenuItem value="">
                            <em>сбросить</em>
                        </MenuItem>
                        <MenuItem value={10}>в архиве</MenuItem>
                        <MenuItem value={20}>не в архиве</MenuItem>
                    </Select>
                </FormControl>
        </div>
    )
}

const role = [
    { label: 'driver'},
    { label: 'waiter'},
    { label: 'cook'},
  ];

export default Filter