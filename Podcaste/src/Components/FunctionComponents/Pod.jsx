import {useNavigate } from 'react-router-dom';
import '../CSS/Pod.css';

function Pod() {
    const navigate = useNavigate();

    const handledetailpage = (id) => {
        navigate(`/detail/${id}`);
    };
    const handleNavigation = () => {
        navigate("/announ");
    };

    return (
        <div className="main">
            <div className="audio">
                <img src="IMAGE/img1.jpg" alt="" onClick={() => handledetailpage(1)} />
                <h2>SQUARE FLYER</h2>
            </div>
            <div className="audio">
                <img src="IMAGE/img9.jpeg" alt="" onClick={() => handledetailpage(2)} />
                <h2>PASSION POD</h2>
            </div>
            <div className="audio">
                <img src="IMAGE/img3.jpg" alt="" onClick={() => handledetailpage(3)} />
                <h2>BRIGHT FUTURE POD</h2>
            </div>
            <div className="audio">
                <img src="IMAGE/img4.jpeg" alt="" onClick={() => handledetailpage(4)} />
                <h2>AIR?</h2>
            </div>
            <div className="audio">
                <img src="IMAGE/img5.jpeg" alt="" onClick={() => handledetailpage(5)} />
                <h2>PoDcAsTe</h2>
            </div>
            <div className="audio">
                <img src="IMAGE/img6.jpeg" alt="" onClick={() => handledetailpage(6)} />
                <h2>HIDDEN PABLO</h2>
            </div>
            <div className="audio">
                <img src="IMAGE/img8.jpeg" alt="" onClick={() => handledetailpage(7)} />
                <h2>MONEY TALK</h2>
            </div>
            <div className="audio">
                <img src="IMAGE/img10.jpg" alt="" onClick={handleNavigation} />
                <h2>IMPORTANT ANNOUNCEMENT</h2>
            </div>
        </div>
    );
}

export default Pod;
