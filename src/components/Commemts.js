import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList({data}) {
  return (
    <List style={{ width: '100%', backgroundColor:"#2c2c54",textAlign:"center" }} >
      <ListItem alignItems="center" >
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
        style={{color:"rgb(245, 194, 43)"}}
          primary={data.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="white"
                fontSize="17px"
              >
              comments on  {data.commentOn}
              </Typography>
                <Typography  
               
                variant="body2"
                color="white"> 
              {data.comments}</Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider  />
        
     
    
    
    </List>
  );
}