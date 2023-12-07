
import Button from '@mui/material/Button';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Dropdown, DropdownMenuItem } from './dropdownNy';


const Drop = () => {
  const handleCreate = () => {
    console.log('create something');
  };

  const handleEdit = () => {
    console.log('edit something');
  };

  const handleDelete = () => {
    console.log('delete something');
  };

  return (
    <Dropdown
      keepOpen
      open={open}
      trigger={<Button>Dropdown</Button>}
      menu={[
        <DropdownMenuItem onClick={handleCreate}>
          Create <AddCircleOutlinedIcon />
        </DropdownMenuItem>,
        <DropdownMenuItem onClick={handleEdit}>
          Edit <EditIcon />
        </DropdownMenuItem>,
        <DropdownMenuItem onClick={handleDelete}>
          Delete <DeleteForeverIcon />
        </DropdownMenuItem>,
      ]}
    />
  );
};

export default Drop;