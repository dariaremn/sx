import React from "react";
import UserList from "./UserList";

function App() {
  const users = [
    { name: "Оля", age: 22, city: "Київ" },
    { name: "Максим", age: 28, city: "Львів" },
    { name: "Софія", age: 19, city: "Одеса" },
  ];

  return (
    <div>
      <h1>Список користувачів</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;
