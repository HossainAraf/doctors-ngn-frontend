// IMPORTS
import { Link } from 'react-router-dom';
import Button from './Button';

// CONPONENT
const AddContent = () => (
  <div>
    <h1>Add Content</h1>
    <Link to="/add-doctor">
      <Button label="Add Doctor" />
    </Link>
  </div>
);

// EXPORT
export default AddContent;
