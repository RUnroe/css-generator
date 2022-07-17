import { useState } from 'react';
import shortUUID from 'short-uuid';
import './Content.css';
import trashIcon from '../../icons/trash-icon.svg';

const Variables = ({variables, setVariables}) => {
    

    const [newVarProperty, setNewVarProperty] = useState('');
    const [newVarValue, setNewVarValue] = useState('');

    const addVar = () => {
        let tempVariables = [...variables];
        
        tempVariables.push({
            id: shortUUID.generate(),
            property: newVarProperty,
            value: newVarValue
        }); 
        setVariables(tempVariables);
        setNewVarProperty('');
        setNewVarValue('');
    }

    const updateVar = (id, property, value) => {
        let tempVariables = [...variables];
        for(let i = 0; i < tempVariables.length; i++) {
            if(tempVariables[i].id === id) {
                tempVariables[i][property] = value;
                break;
            }
        }
        setVariables(tempVariables);
    }

    const deleteVar = (id) => {
        setVariables(variables.filter((v) => v.id !== id))
    }

    return (
        <div className='variables-section'>
            <a href='/#variables'><h2 id='#variables'>Variables</h2></a>
            <hr/>
            <div className='var-inputs'>
                <div className='input-group'>
                    <label htmlFor='var-property'>Property</label>
                    <input id='var-property' value={newVarProperty} onChange={evt => setNewVarProperty(evt.target.value)}/>
                </div>
                <div className='input-group'>
                    <label htmlFor='var-value'>Value</label>
                    <input id='var-value' value={newVarValue} onChange={evt => setNewVarValue(evt.target.value)}/>
                </div>
                <button onClick={addVar}>+</button>
            </div>
            <div className='var-display-list'>
                {variables?.map((v) => {
                    return (
                    <div>
                        <input type="text" value={v.property} onChange={(evt) => updateVar(v.id, "property", evt.target.value)}/>
                        <input type="text" value={v.value} onChange={(evt) => updateVar(v.id, "value", evt.target.value)}/>
                        <button onClick={() => deleteVar(v.id)}><img src={trashIcon} /></button>
                    </div>
                    );
                })}
            </div>
        </div>
    );
  }
  
  export default Variables;
  