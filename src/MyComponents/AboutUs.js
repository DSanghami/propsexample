import {useState} from 'react';

function AboutUs(props){
    
    const [companyName, setCompanyName] = useState(props.companyName);
    const [address, setAddress] = useState(props.address);

    return (<center>
        <div>
            <b>Contact us @</b> {companyName} <br />
            <b>Our address</b>{address}
        </div>
    </center>)
}

export default AboutUs;
