import React from 'react';
import { Card } from './Card';


export const CardList = (props) => {

    return (
        <div className= 'card-list'>
            { props.monsters.map(monster => {
                return(

                    <Card  
                        monster = {monster} 
                        key = {monster.id}
                    />
                )
            })}
        </div>
    )
   
}