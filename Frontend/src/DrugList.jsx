
import logo from '/src/assets/logo.png';
import image from '/src/assets/horizontal_img.png'
import './DrugList.css';

function DrugList() {

    const drugList2 = {
        Abacavir: ['Volvo', 'Mercedes'], 
        Bacitracina: ['Audi', 'Seat'],
        Citrina: ['Ferrari', 'Ford']
    };

    const listKeys = Object.keys(drugList2).map( (key) =>
        <div key={key} className='drug-row'>
            {key}
            <select className='generic' key={key}>
                {
                    drugList2[key].map((value) => 
                        <option>
                            {value}
                        </option> 
                    )
                } 
            </select>
        </div>
    );

    return(
        <div className='body'>
            <div className='images'>
                <img src={logo} className='logo' alt="Logo" />    
                <img src={image} className='img' alt="Image" />
            </div>  
            <div className='centered'>
                <div className='title'>List of drugs</div>
                <div className = "rectangle">
                    <div className='drug-list'>
                        <div className='drug'>
                            {listKeys}
                        </div>
                    </div>
                    <button className='btn'>
                        Submit
                    </button>
                </div>
            </div>
            
            
        </div>
    )
}

export default DrugList