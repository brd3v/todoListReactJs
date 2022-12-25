import * as C from './styles'
import {Item} from '../../types/Item'
import { useState } from 'react';

type Props  ={
  item:Item
}
export const ListItem = ({item}: Props)=>{
  const [isChecked, setIsCheked] = useState(item.done)
  return(


    <C.Container done={isChecked}>
        <input type='checkbox' checked={isChecked} onChange={e => setIsCheked(e.target.checked)} />
        <label>{item.name}</label>

    </C.Container>



  )
}


export default ListItem
