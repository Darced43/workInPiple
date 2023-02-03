import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CardPerson.scss'

const CardPerson = ({person}) => {

    return(
            <CardContent className='cardPerson' id={person.id}>
                <Typography variant="h5" sx={{mb: 1}} component="div">
                    {person.name}
                </Typography>
                <Typography color="text.secondary" sx={{mb: 1}}>
                    {person.role}
                </Typography>
                <Typography variant="body2">
                    {person.phone}
                </Typography>
            </CardContent>
    )
}

export default CardPerson