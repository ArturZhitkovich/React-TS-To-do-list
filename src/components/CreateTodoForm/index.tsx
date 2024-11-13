import { Box, Button, Input } from "@mui/material";
import { memo, FormEvent, useRef } from "react";
import { Todo } from "../../types";

interface CreateFormTodoProps {
  onSubmit: (todo: Todo) => void;
}

const CreateFormTodo = ({ onSubmit }: CreateFormTodoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const text = inputRef.current?.value || "";

    const newTodo: Todo = {
      id: String(new Date().getTime()),
      text,
      isDone: false,
    };

    onSubmit(newTodo);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display={'flex'} gap={'8px'}>
        <Input
          inputRef={inputRef}
          placeholder="Enter todo text"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </Box>
    </form>
  );
};

export default memo(CreateFormTodo);
