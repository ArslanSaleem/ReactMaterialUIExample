import React from 'react';
import { Card, makeStyles, Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({

    pageHeader: {
        display: 'flex',
        padding: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2)
    }, 
    pageHeaderDesc: {
        padding: theme.spacing(1)
    }
}))

const PageHeader = (props) => {

    const { title, description, icon }  = props; 
    const styles = useStyles();
    return ( 
        <Paper elevation={0} square style={{height:'80px'}}>
            <div className={styles.pageHeader}>
                < Card className={styles.pageIcon} >
                    {icon}
                </Card>
                <div className={styles.pageHeaderDesc}>
                    < Typography variant="h6" component="div"> {title} </Typography>
                    < Typography variant="subtitle2" component="div"> {description} </Typography>
                </div>
            </div>
        </Paper>
     );
}
 
export default PageHeader;