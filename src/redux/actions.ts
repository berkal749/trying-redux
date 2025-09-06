export const increment = (descreption:string ,isDone: string  ,id: number) => ({
  type: 'ADD',
   payload:{ descreption:descreption ,isDone: isDone , id:id }
 
});

export const  decrement = (descreption:string ,isDone: string  ,id: number)=>({

    type:'DELETE',
    payload:{ descreption:descreption ,isDone: isDone , id:id }
}) 

