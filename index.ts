import axios from "axios";

interface Todo {
  id: number;
  title: String;
  completed: boolean;
}

function fetchData(url) {
  try {
    axios.get(url).then((res) => {
      const data = res.data as Todo;

      const Id = data.id;
      const title = data.title;
      const completed = data.completed;
      console.log(`
        id : ${Id}
        Title : ${title}
        completed : ${completed} 
      `);
    });
  } catch (err) {
    console.log("failed to fetch");
  }
}

fetchData("https://jsonplaceholder.typicode.com/todos/1");
