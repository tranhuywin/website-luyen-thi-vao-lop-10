import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'flex-end !important',
	},
});

export default function CenteredTabs() {
	const classes = useStyles();

	return (
		<Paper className={classes.root}>
			<Tabs
			>
				<Tab label="Admin" />
				<Tab label="Đăng xuất" />
			</Tabs>
		</Paper>
	);
}
