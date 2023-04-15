import * as database from '../../database/index';
import { useEffect } from 'react';
import { setTasks } from '../../redux/taskSlice';
import { useDispatch } from 'react-redux';



export default function (){
  const dispatch = useDispatch();

    useEffect(() => {

      (async()=>{
        //Load the database
        const data = await database.load();
        console.log('loaded data' ,data)
        dispatch(setTasks(data))
        

      })()
    
    
      }) 

}