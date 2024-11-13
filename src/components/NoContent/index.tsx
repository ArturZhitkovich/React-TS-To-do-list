import { Box, Typography } from '@mui/material';

const NoContent = () => {
  return (
    <Box padding={'16px'}>
      <Typography variant="h4">No tasks to display</Typography>
    </Box>
  );
};

export default NoContent;
