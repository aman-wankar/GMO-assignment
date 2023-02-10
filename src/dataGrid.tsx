import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import { CommentsType } from './post.interface';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface initialState {
  comments: CommentsType[];
  error: string;
}

const columns: GridColDef[] = [
  { field: 'postId', headerName: 'Post ID', width: 90 },
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 300,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 200,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'Body',
    width: 400,
    editable: true,
  },
];

export default function DataGridDemo() {
  const [state, setState] = useState<initialState>({
    comments: [] as CommentsType[],
    error: '',
  });

  const getComments = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((res) =>
        setState({
          ...state,
          comments: res.data,
        })
      )
      .catch((err) => {
        setState({
          ...state,
          error: err.message,
        });
      });
  };

  useEffect(() => {
    getComments();
  }, []);

  const rows = state.comments;

  if (localStorage.getItem('userInfo')) {
    return (
      <Box
        sx={{
          height: 500,
          width: '100%',
        }}
      >
        <Typography variant='h2' alignSelf='center'>
          Data Grid
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h2'>
        You Need to Sign Up to View Data Grid.
      </Typography>
    </Box>
  );
}
