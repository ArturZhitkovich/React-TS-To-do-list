import { Box, ThemeProvider, createTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { Todo } from './types';
import TodoItem from './components/TodoItem';
import CreateTodoForm from './components/CreateTodoForm';
import { getStorageObject, setStorageObject } from './utils.ts/storage';
import NoContent from './components/NoContent';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});


function App() {
  const [todos, setTodos] = useState<Todo[]>(getStorageObject('todos') ?? []);

  useEffect(() => {
    if (todos.length > 0) {
      setStorageObject('todos', todos);
    }
  }, [todos]);
  
  const updateTodo = (todoId: string) => {
    setTodos(prev => prev.map(todo =>
      todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo
    ));
  };

  const deleteTodo = (todoId: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== todoId));
  };

  const addTodo = (todo: Todo) => {
    setTodos(prev => [...prev, todo]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box 
        display={'flex'} 
        flexDirection={'column'}
        justifyContent={'center'} 
        alignItems={'center'}
        width={'100vw'} 
        padding={'16px'}
      >
        <CreateTodoForm onSubmit={addTodo} />
        
        {todos.length === 0 && <NoContent />}
        {todos.map((todo) => 
          <TodoItem 
            key={todo.id}
            todo={todo}
            onChecked={updateTodo}
            onDelete={deleteTodo}
          />
        )}
      </Box>
    </ThemeProvider>
  )
}

export default App
