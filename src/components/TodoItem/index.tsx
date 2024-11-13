import { Box, Button, Checkbox, Typography } from '@mui/material';
import { memo } from 'react';
import { Todo } from '../../types';

interface TodoItemProps {
  todo: Todo;
  onChecked: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onChecked, onDelete }: TodoItemProps) => {
  return (
    <Box
      display={'flex'}
      width={'480px'}
      justifyContent={'space-between'}
      padding={'8px'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Checkbox checked={todo.isDone} onChange={() => onChecked(todo.id)} />

        <Typography>{todo.text}</Typography>
      </Box>
      <Button
        onClick={() => onDelete(todo.id)}
        variant="contained"
        color="error"
      >
        Delete
      </Button>
    </Box>
  );
};

export default memo(TodoItem);
