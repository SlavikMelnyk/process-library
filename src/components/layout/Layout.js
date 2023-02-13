import { useContext } from "react";
import { AppContext } from "../../App.context";
import './Layout.css';
import Metadata from "../metadata/Metadata";

const Layout = () => {
    const { mds } = useContext(AppContext);
    console.log(mds);
    return (
        <div className="layout">
            <h1>Process Library</h1>
            <div className='mds-container'>
                <h2>My processes</h2>
            
                <div className='mds'>
                    {mds ? mds.map(data => (
                        <Metadata key={data.id} metadata={data} />
                    )) : null}
                </div>
            </div>
        </div>
    );
}

export default Layout;
