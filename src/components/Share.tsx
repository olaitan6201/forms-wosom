import * as React from 'react';
import {
    Box,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    SvgIcon,
    Autocomplete,
    Avatar,
    Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { v4 as uuidv4 } from 'uuid';

type UserListType = { id: string; name: string; jobTitle: string };

export default function Share() {
    const [open, setOpen] = React.useState(false);
    const formState = useSelector((state: RootState) => state.form);
    const [sharedUser, setSharedUsers] =
        React.useState<UserListType[]>(usersList);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRemoveAccess = (userId: string) => {
        setSharedUsers((prev) => prev.filter((u) => u.id !== userId));
    };

    return (
        <React.Fragment>
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    className="share-button"
                    onClick={handleClickOpen}
                >
                    SHARE
                </Button>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                scroll="paper"
                PaperProps={{
                    component: 'div',
                    classes: 'paperWidthSm',
                }}
            >
                <DialogActions>
                    <Button onClick={handleClose}>
                        <SvgIcon>
                            <svg
                                focusable="false"
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                data-testid="CloseIcon"
                            >
                                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                            </svg>
                        </SvgIcon>
                    </Button>
                </DialogActions>
                <DialogTitle>
                    <Typography
                        variant="h4"
                        textAlign={'center'}
                        fontWeight={'bold'}
                    >
                        Share "{formState?.title || 'Form Name'}"
                    </Typography>
                    <Autocomplete
                        id="country-select-demo"
                        sx={{ width: '100%', marginTop: '8px' }}
                        options={usersList}
                        autoHighlight
                        getOptionLabel={(option) => option.name}
                        getOptionKey={(option) => option.id}
                        renderOption={(props, option) => {
                            const { key, ...optionProps } = props;
                            return (
                                <Box
                                    key={key}
                                    component="li"
                                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                    {...optionProps}
                                >
                                    <UserListCard
                                        user={option}
                                        isList={false}
                                    />
                                </Box>
                            );
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Add Email Address, Groups, Contacts"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                            />
                        )}
                    />
                    <Typography
                        marginTop={'16px'}
                        fontWeight={'bold'}
                        color={'rgba(0, 0, 0, 0.87)'}
                    >
                        People with accesses
                    </Typography>
                </DialogTitle>
                <DialogContent dividers sx={{ paddingRight: '0 !important' }}>
                    <DialogContentText>
                        {sharedUser.map((u) => (
                            <UserListCard
                                user={u}
                                isList
                                handleRemoveAccess={handleRemoveAccess}
                                key={u.id}
                            />
                        ))}
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}

const UserListCard: React.FC<{
    user: UserListType;
    isList: boolean;
    handleRemoveAccess?: (userId: string) => void;
}> = ({ user, isList, handleRemoveAccess }) => (
    <Box className={`user-card ${isList ? 'can-hover' : ''}`}>
        <Box display={'flex'} alignItems={'center'} gap={'16px'}>
            <Avatar
                alt={user.name}
                src="https://via.placeholder.com/40"
                style={{ marginRight: '16px' }}
            />

            <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'flex-start'}
                gap={'2px'}
            >
                <Typography
                    component={'p'}
                    color={'rgba(0, 0, 0, 0.87)'}
                    fontSize={'16px'}
                    fontWeight={'bold'}
                >
                    {user.name}
                </Typography>
                <Typography
                    component={'p'}
                    color={'rgba(0, 0, 0, 0.6);'}
                    fontSize={'15px'}
                >
                    {user.name}
                </Typography>
            </Box>
        </Box>
        <Typography
            className="remove-button"
            onClick={() => handleRemoveAccess && handleRemoveAccess(user.id)}
        >
            Remove Access
        </Typography>
    </Box>
);

const usersList: UserListType[] = [
    {
        id: uuidv4(),
        name: 'John Doe',
        jobTitle: 'Software Engineer',
    },
    {
        id: uuidv4(),
        name: 'Jane Smith',
        jobTitle: 'Product Manager',
    },
    {
        id: uuidv4(),
        name: 'Alice Johnson',
        jobTitle: 'UX Designer',
    },
    {
        id: uuidv4(),
        name: 'John',
        jobTitle: 'Software Engineer',
    },
    {
        id: uuidv4(),
        name: 'John Doe',
        jobTitle: 'Software Engineer',
    },
    {
        id: uuidv4(),
        name: 'John Doe',
        jobTitle: 'Software Engineer',
    },
];
