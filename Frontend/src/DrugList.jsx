
import logo from '/src/assets/logo.png';
import './DrugList.css';

function DrugList() {

    const drugList = ['Abacavir', 'Bacitracina'];

    const drugList2 = {
        Abacavir: ['Volvo', 'Mercedes'], 
        Bacitracina: ['Audi', 'Seat'],
        Citrina: ['Ferrari', 'Ford']

    };

    const listKeys = Object.keys(drugList2).map( (key) =>
        <div key={key}>
            {key}
        </div>
    );

    const listValues = Object.keys(drugList2).map( (key) =>
        <select className='generic'>
            {
                drugList2[key].map((value) => 
                    <option>
                        {value}
                    </option> 
                )
            } 
        </select>
   
    );

    return(
        <div>
            <img src={logo} className="logo" alt="Logo" />
            <div className='title'>List of drugs</div>
            <div className = "rectangle">
                <div className='drug-list'>
                    <div className='drug'>
                        {listKeys}
                    </div>
                    <div className='select'>
                        {listValues}
                    </div>
                </div>
                <button className='btn'>
                    Submit
                </button>
            </div>
            
        </div>
    )
}

export default DrugList