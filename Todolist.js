import React from "react";
// import { Table } from "react-bootstrap";
// import { FauserEdit } from "react-icons/FauserEdit";
// import { Mddelete } from "react-icons/Mddelete";
import { userNavigate } from "react-router-dom";
import "./Todolist.css";

const Todolist = () => {
  const [todo, setTodo] = React.useState("");
  const { todolist, setTodoList } = React.useState([]);
  const navigate = userNavigate();
  const fetchTodolist = () => {
    axios
      .get("http://localhost:3000/todos")
      .then((response) => {
        setTodoList(response.data);
      })
      .catch((error) => console.log(error));
    React.useState(() => {
      fetchTodolist();
    });
    const handleAddTodo = (event) => {
      event.preventDefault();
      if (!todo) {
        alert("Please add todo...!");
        return;
      }
      axios
        .post("http://localhost:3000/todos", {
          todo: todo,
          isCompleted: false,
        })
        .then((response) => {
          if (response.status === 201) {
            console.log(response.data);
            fetchTodolist();
            setTodoList(" ");
          }
        })
        .catch((error) => console.log(error));
    };
    const handleDelete = (id) => {
      axios
        .delete("http://localhost:3000/todos/${id}")
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            fetchTodolist();
            setTodo("");
          }
        })
        .catch((error) => console.log(error));
      const handleEdit = (id, todo, isCompleted) => {
        //const formData = {todo:`saikiran Jumbarthi`};
        //const formData = {isCompleted:true/false};
        navigate(`/todo/${id}`, {
          state: {
            id,
            todo,
            todo,
            isCompleted,
          },
        });
        //axios.patch('http://localhost:3000/todos/${id}`,formData)
        //if we "put"instead of patch then todo will remove/hidden
        then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            fetchTodolist();
            setTodo("");
          }
        }).catch((error) => console.log(error));
      };
      return (
        <div className="divContainer">
          <h1>TodoList</h1>
          <form className="formContainer" onSubmit={handleAddTodo}>
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Enter Todo"
            />
            <button type="submit">ADD Todo</button>
            <form>
              <Table striped border hover variant="dark">
                <thead style={{ textAlign: "center" }}>
                  <tr>
                    <th>ID</th>
                    <th>Todo</th>
                    <th>Completed?</th>
                    <th>Not-Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {todolist.map(({ id, todo, isCompleted }) => {
                    <tr key={id} style={{ textAlign: center }}>
                      <th>{id}</th>
                      <th>{todo}</th>
                      <th>{isCompleted ? "YES" : "NO"}</th>
                      <td>
                        <FauserEdit
                          size={30}
                          onClick={() => handleEdit(id, todo, isCompleted)}
                        />
                      </td>
                      <td>
                        <Mddelete
                          size={30}
                          onCLick={() => handleDelete(id, todo, isCompleted)}
                        />
                      </td>
                    </tr>;
                  })}
                </tbody>
              </Table>
            </form>
          </form>
        </div>
      );
    };
  };
};
export default Todolist;
