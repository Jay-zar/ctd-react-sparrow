const toDoList = [
    {
      id: 0,
      title: "Sweep the floors"
    }, 
    {
      id: 1,
      title: "Read a book"
    }, 
    {
      id: 2,
      title: "Unload the dishwasher"
    }
];

function toDoList () {
    return (
      <ul>
        {toDoList.map(function(item) {
         return (
             <div key= {item.id}>
                <span>{item.title}</span>
             </div>)
            })
        }
      </ul>
    )
}

export default toDoList;