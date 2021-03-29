import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
       	 orientation="vertical"
       	 variant="fullWidth"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab label="Trang cá nhân"/>
        <Tab label="Đề + đáp án"/>
        <Tab label="Luyện thi"/>
        <Tab label="Bảng điểm"/>
        <Tab label="Ôn thi"/>
        <Tab label="Đăng đề"/>
        <Tab label="Duyệt đề"/>
        <Tab label="Sửa đề"/>
      </Tabs>
    </div>
  );
}
