import './Metadata.css';

const Metadata = ({metadata}) => metadata ? (
    <div className="metadata">
        <h3>{metadata.name}</h3>
        <p>{metadata.description}</p>
        <p>teams: {metadata?.anchors?.teams || ''}</p>
        <div className="image-container">
            <img src={metadata.iconUrl} alt={metadata.description} />
        </div>
    </div>
) : null;


export default Metadata;
