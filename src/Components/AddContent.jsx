// IMPORTS
import { Link } from 'react-router-dom';
import Button from './Button';

// CONPONENT
const AddContent = () => (
  <div className="flex-auto p-5">
    <h1 className="my-3 font-bold">Add/Update Content</h1>
    <Link to="/add-doctor">
      <Button label="Add Doctor" className="flex-auto mx-2 px-2 bg-indigo1 round text-white" />
    </Link>
    <Link to="#">
      <Button label="Update Doctors Info" className="flex-auto px-2 bg-indigo1 round text-white" />
    </Link>
  </div>
);

// EXPORT
export default AddContent;
