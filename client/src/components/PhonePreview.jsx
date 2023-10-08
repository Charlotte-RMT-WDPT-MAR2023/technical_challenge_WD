import { Link } from "react-router-dom";

function PhonePreview({name, id }) {
  return (
    <div className="preview">
      <Link to={`/phone/${id}`} style={{ textDecoration: 'none', color: '#694736' }} >
        <div className="preview-info">       
          <h5>{name}</h5>
        </div> 
      </Link>
    </div>
  );
}

export default PhonePreview;
