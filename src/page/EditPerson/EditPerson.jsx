import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux" 
import { Typography } from "@mui/material"
import './EditPerson.scss'
import CardEdit from '../../components/CardEdit/CardEdit'

const EditPerson = () => {
    const navIid = useParams()
    const persons = useSelector( state => state.persons.persons)


    return(
        <div className='editPerson'>
            <Typography 
                variant="h2" 
                sx={{flexGrow: 1, textAlign: "center", fontSize: '3rem', mt: 2, mb: 2, fontWeight: 'bold'}}
            >
                Карточка сотрудника
            </Typography>
            {persons.filter( item => item.id == navIid.id)
                .map( person => 
                    <CardEdit key={person.id} person={person} navIid={navIid}/> 
            )}
        </div>
    )
}

export default EditPerson