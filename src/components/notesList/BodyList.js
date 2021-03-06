import {FaSlackHash} from 'react-icons/fa'
import { randomID } from '../../modules/randomID'

export const BodyOfListNotes = ({notes, onClickOnText}) =>
     Object.values(notes).map(e=>
        <li className="notes_list_items_item"  key={randomID(e)} onClick={()=>onClickOnText(e)}>
            <h2>{e.title}</h2>    
            <p>{e.text}</p>                
            <ul >  
            <FaSlackHash style={{fontSize:'25px'}}/>                
                {Object.values(e.tags).map(el=><li key={randomID()}>{el}</li>)}
            </ul>
         </li>
  )
