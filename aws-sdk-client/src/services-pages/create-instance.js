import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ec2service from '../Services/EC2-services' 

const Create = () => {
    const [key, setKey] = useState('');
    const [imageid, setimageid] = useState('');
    const [insttype, setinsttype] = useState('');
    const [instName, setInstName] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            imgid: imageid,
            inst: insttype,
            iname: instName
        };
        console.log(data);
        ec2service.createInstance(data).then(res => {
            navigate('/ec2/list');
        }).catch(err => {
            console.log(err);
        })
    }
    return <>
        <div className='bucketlist'>
            <h3>Create a new instance</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="name">Instance Name</label>
                    <input
                        type="text"
                        name="name"
                        id="inst"
                        placeholder="enter instance name"
                        className="form-control"
                        value={instName}
                        onChange={(e) =>
                            setInstName(e.target.value)
                        }
                    />
                </div>
                <br />
                <div className="form-group">
                    <input type="submit" value="Create Instance" className="btn btn-primary" />
                </div>
            </form>
        </div>
    </>
};
export default Create;