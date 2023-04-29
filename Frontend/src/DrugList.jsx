
import logo from '/src/assets/logo.png';
import './DrugList.css';

function DrugList() {

    const drugList = ['Abacavir', 'Bacitracina'];

    const listItems = drugList.map( (drugName) =>
        <div key={drugName}>
            {drugName}
        </div>
    );

    return(
        <div>
            <img src={logo} className="logo" alt="Logo" />
            <div className='title'>List of drugs</div>
            <div className='drug-list'>
                <div className='drug'>
                    {drugList.map( (drugName) =>
                            <div key={drugName}>
                                {drugName}
                            </div>
                    )}
                </div>
                <div className='select'>
                    {drugList.map( (drugName) =>
                        <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                        </select>
                    )}
                </div>
                
            </div>
        </div>
    )
}

export default DrugList