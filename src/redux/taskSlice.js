import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [
            
        ]
    },
    reducers: {
        setTasks: (state, action) => {

            state.tasks = action. payload; 
            console.log('All the post to upload', action)
        },
        addTask: (state, action) => {
           
            state.tasks.push(action.payload);
            console.log('Add task')
        },
        handleStatusChange: (state, action) => {
            const id = action.payload
            const updateStatus = state.tasks.map((task) => {
                if(task.id == id){
                    task.favorite = !task.favorite
                }
                return task 
            })

            state.tasks = updateStatus

            console.log('statsu change')

        },
        handleTaskRemoval: (state, action) => {
            const id = action.payload
            const filterPosts = state.tasks.filter(
                (task) => task.id !== id
            );
            state.tasks = filterPosts
            console.log(' task remove')
        }
    }


});

export const { setTasks, addTask, handleStatusChange, handleTaskRemoval } = taskSlice.actions;
export default taskSlice.reducer;