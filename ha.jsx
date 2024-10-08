import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Menu, MenuItem, Box, Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

export const NotebookCard = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    return (
        <Box>
            <Link to={`/notebook/${props.data.id}`} onClick={handleDialogOpen}>
                <Card sx={{
                    width: 250,
                    height: 250,
                    m: 2,
                    boxShadow: 3,
                    borderRadius: '12px',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <CardContent>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <IconButton
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                                sx={{
                                    position: 'absolute',
                                    top: 8,
                                    right: 8
                                }}
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                sx={{ padding: 10 }}
                            >
                                <MenuItem onClick={handleClose}>Delete</MenuItem>
                                <MenuItem onClick={handleClose}>Edit title</MenuItem>
                            </Menu>
                        </Box>
                    </CardContent>
                </Card>
            </Link>
            <Dialog open={dialogOpen} onClose={handleDialogClose}>
                <DialogTitle>Create or Edit Notebook</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Notebook Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button onClick={handleDialogClose}>Submit</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export const UploadCard = (props) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    return (
        <Box>
            <Card sx={{
                width: 250,
                height: 250,
                m: 2,
                boxShadow: 3,
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }} onClick={handleDialogOpen}>
                <CardContent sx={{ p: 2, textAlign: 'center' }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                        <AddIcon sx={{ fontSize: 40 }} />
                        <Typography variant="subtitle1" component="div" sx={{ mt: 2 }}>
                            New Notebook
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
            <Dialog open={dialogOpen} onClose={handleDialogClose}>
                <DialogTitle>New Notebook</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="new-notebook"
                        label="Notebook Name"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button onClick={handleDialogClose}>Submit</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};
