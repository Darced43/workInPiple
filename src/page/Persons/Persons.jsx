import React from 'react';
import { useState } from "react"
import { Typography } from "@mui/material"
import { useSelector } from "react-redux" 
import CardPerson from "../../components/CardPerson/CardPerson"
import './Persons.scss'
import Filter from "../../components/Filter/Filter"
import {Link} from 'react-router-dom'


const Persons = () => {
    const persons = useSelector( state => state.persons.persons)
    const [ arrPersons, setArrPerosns] = useState(persons)
    const [ sortName, setSortName] = useState('')
    const [ sortBday, setSortBday] = useState('')
    const [ sortRole, setSortRole] = useState('')
    const [ sortArchive, setSortArchive] = useState('')
    
    function sortPersons(sort){
        if(sort == 10){
            setArrPerosns([...arrPersons].sort((a, b) => a['name'].localeCompare(b['name'])))
        }
        if(sort == 20){
            setArrPerosns([...arrPersons].sort((a, b) => b['name'].localeCompare(a['name'])))
        }
        if(sort == ''){
            setArrPerosns(persons)
            setSortName('')
            setSortBday('')
            setSortRole('')
            setSortArchive('')
        }
    }

    function sortPersonBday(sort){
        if(sort == 10){
            setArrPerosns([...arrPersons].sort((a, b) => a['birthday'].replace(/[,()-.]/g,"").localeCompare(b['birthday'].replace(/[,()-]/g,""))))
        }
        if(sort == 20){
            setArrPerosns([...arrPersons].sort((a, b) => b['birthday'].replace(/[,()-.]/g,"").localeCompare(a['birthday'].replace(/[,()-]/g,""))))
        }
        if(sort == ''){
            setArrPerosns(persons)
            setSortName('')
            setSortBday('')
            setSortRole('')
            setSortArchive('')
        }
    }
    
    function sertPersonRole(sort){
        if( sort == ''){
            setArrPerosns(persons)
            setSortName('')
            setSortBday('')
            setSortRole('')
            setSortArchive('')
        } else {
            setArrPerosns(persons)
            setArrPerosns((arrPersons) => [...arrPersons.filter(item => item.role == sort)])
        }
    }

    function sortPersonInArchive(sort){
        if(sort === 10) {
            setArrPerosns(persons)
            const filt = [true]
            setArrPerosns((arrPersons) => [...arrPersons.filter(item => item.isArchive === true)])
        }
        if(sort == 20) {
            setArrPerosns(persons)
            setArrPerosns((arrPersons) => [...arrPersons.filter(item => item.isArchive === false)])
        }
        if(sort == ''){
            setArrPerosns(persons)
            setSortName('')
            setSortBday('')
            setSortRole('')
            setSortArchive('')
        }
    }


    return(
        <div className="persons">
            <Typography variant="h2" sx={{flexGrow: 1, textAlign: "center", fontSize: '3rem', mt: 2, mb: 2, fontWeight: 'bold'}}>Сотрудники компании</Typography>
            <div className="persons__content">
                <div className="persons__card">
                    {
                        arrPersons.map( person => 
                            <Link className='persons__link' to={`/${person.id}`} key={person.id}>
                                <CardPerson person={person}/>
                            </Link>
                        )
                    }
                </div>
                    <Filter className='persons__content_filter'
                        sortName={sortName} 
                        setSortName={setSortName} 
                        sortPersons={sortPersons}
                        sortBday={sortBday}
                        setSortBday={setSortBday}
                        sortPersonBday={sortPersonBday}
                        sortRole={sortRole}
                        setSortRole={setSortRole}
                        sertPersonRole={sertPersonRole}
                        sortArchive={sortArchive}
                        setSortArchive={setSortArchive}
                        sortPersonInArchive={sortPersonInArchive}
                    />
            </div>
        </div>
    )
}

export default Persons