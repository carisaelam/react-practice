import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

{
  /* TodoList is returning an unordered list. 
            Inside the list, we are mapping over the {todos}
            For each todo in the list, we are returning an 
            instance of TodoCard with a key of the index. 
            and a child 'p' tag with the {todo} text inside it. 
            The TodoCard element is return a <li> element that includes the {children} of TodoCard and then a div with the icons in it        
        
        */
}
