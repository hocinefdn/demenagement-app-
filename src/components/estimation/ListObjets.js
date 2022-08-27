import React, { useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const ListObjets = (props) => {
    const [secondary, setSecondary] = React.useState(false);
    useEffect(() => {

    });
    return (
        <div>
            <List>
                {props.list.map((item, index) => {
                    return (<ListItem
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }
                        key={`${index}-ListItem`}
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <ArrowForwardIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={item}
                            secondary={secondary ? 'Secondary text' : null}
                        />
                    </ListItem>
                    )
                })}


            </List>
        </div>
    );
};

export default ListObjets;