import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from "@mui/material/MenuItem";



const AddTaskForm = (props) => {

    const priorityList = [
        {
          value: "Low",
          label: "Low",
        },
        {
          value: "Medium",
          label: "Medium",
        },
        {
          value: "High",
          label: "High",
        },
      ];


  return (
<Box
      component="form"
      sx={{
        "& .MuiOutlinedInput-root": { m: 1, width: "30ch" },
      }}
      onSubmit={props.submit}
    >
      <div>

        
           
       
        

        <TextField
          required
          id="outlined-required"
          name="title"
          label="Task Title"
          color="secondary" 
          focused
          InputLabelProps={{ shrink: true }}
          onChange={(event) => props.change(event)}
        />
      </div>
      <div>
        <TextField
          required
          name="deadline"
          label="Deadline"
          color="secondary" 
          focused
          InputLabelProps={{ shrink: true }}
          type="date"
          onChange={(event) => props.change(event)}
        />
      </div>

      <div>
        <TextField
          id="select-priority"
          name="priority"
          select
          label="Select"
          color="secondary" 
          focused
          
          onChange={(event) => props.change(event)}
        >
          {priorityList.map((priority) => (
            <MenuItem key={priority.value} value={priority.value}>
              {priority.label}
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div>
        <TextField
          name="description"
          id="outlined-multiline-static"
          label="Task Details"
          color="success" 
          focused
          InputLabelProps={{ shrink: true }}
          multiline
          rows={4}
          onChange={(event) => props.change(event)}
        />
      </div>
      <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            m: 1,
            p: 1,
            width: "95%",
          }}
        >
          Add Task
        </Button>
      </div>
    </Box>
  );
};

export default AddTaskForm;