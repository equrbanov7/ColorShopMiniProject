/* eslint-disable react/prop-types */
import './index.scss'; 

const CustomCard = ({ hoverable, style, cover, title, description }) => {
  return (
    <div className={`custom-card ${hoverable ? 'hoverable' : ''}`} style={style}>
      {cover && <div className="custom-card-cover">{cover}</div>}
      <div className="custom-card-body">
        {title && <h3 className="custom-card-title">{title}</h3>}
        {description && <p className="custom-card-description">{description}</p>}
        <button className="custom-card-button">Add Too Card </button>
      </div>
    </div>
  );
};

export default CustomCard;
