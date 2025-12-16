import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import UploadFileIcon from '@mui/icons-material/UploadFile';

interface Reel {
  id: number;
  user: string;
  description: string;
  file: File;
  preview: string;
}

export default function Home() {
  const [reels, setReels] = useState<Reel[]>([]);
  const [user, setUser] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !description || !file) return;

    setReels((prev) => [
      ...prev,
      {
        id: Date.now(),
        user,
        description,
        file,
        preview: URL.createObjectURL(file),
      },
    ]);

    setUser('');
    setDescription('');
    setFile(null);
  };

  const handleDelete = (id: number) => {
    setReels((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: '#f5f7fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* TARJETA PRINCIPAL */}
      <Paper
        elevation={6}
        sx={{
          width: '90%',
          maxWidth: 900,
          maxHeight: '85vh',
          overflowY: 'auto',
          bgcolor: '#e3f2fd',
          borderRadius: 4,
          p: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold" align="center" mb={1}>
          Gestión de Reels
        </Typography>

        <Typography align="center" mb={4} color="text.secondary">
          Usuario · Descripción · Video
        </Typography>

        {/* FORMULARIO */}
        <Box component="form" onSubmit={handleSubmit} mb={4}>
          <TextField
            label="Usuario"
            fullWidth
            value={user}
            onChange={(e) => setUser(e.target.value)}
            sx={{ mb: 2 }}
            required
          />

          <TextField
            label="Descripción"
            fullWidth
            multiline
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: 2 }}
            required
          />

          <Button
            variant="outlined"
            component="label"
            fullWidth
            startIcon={<UploadFileIcon />}
            sx={{ mb: 2 }}
          >
            Subir video
            <input
              type="file"
              accept="video/*"
              hidden
              onChange={handleFileChange}
              required
            />
          </Button>

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
          >
            Publicar Reel
          </Button>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* LISTADO */}
        {reels.length === 0 ? (
          <Typography align="center" color="text.secondary">
            No hay reels publicados
          </Typography>
        ) : (
          <List>
            {reels.map((reel) => (
              <ListItem
                key={reel.id}
                sx={{
                  bgcolor: '#fff',
                  mb: 2,
                  borderRadius: 2,
                  alignItems: 'flex-start',
                }}
                secondaryAction={
                  <IconButton onClick={() => handleDelete(reel.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <Box sx={{ mr: 2 }}>
                  <video
                    src={reel.preview}
                    width={120}
                    height={80}
                    controls
                    style={{ borderRadius: 8 }}
                  />
                </Box>

                <ListItemText
                  primary={
                    <Typography fontWeight="bold">
                      @{reel.user}
                    </Typography>
                  }
                  secondary={reel.description}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  );
}
