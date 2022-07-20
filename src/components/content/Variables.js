import { useEffect, useState } from 'react';
import shortUUID from 'short-uuid';
import './Content.css';
import trashIcon from '../../icons/trash-icon.svg';
import { useFirstRender } from '../../hooks/useFirstRender';
import toast from 'react-hot-toast';


const Variables = ({variables, setVariables}) => {
    
    const firstRender = useFirstRender();
    const [newVarProperty, setNewVarProperty] = useState('');
    const [newVarValue, setNewVarValue] = useState('');
    const [color, setColor] = useState('#b8c1ec');

    useEffect(() => {
        if(!firstRender && color) {
            setNewVarValue(color);
        }
    }, [color]);

    const addVar = () => {
        let tempVariables = [...variables];
        
        tempVariables.push({
            id: shortUUID.generate(),
            property: newVarProperty,
            value: newVarValue
        }); 
        setVariables(tempVariables);

        toast.success("Variable Created");

        //reset values
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
        setVariables(variables.filter((v) => v.id !== id));
        toast.success("Variable Deleted");
    }

    return (
        <div id='variables' className='variables-section section'>
            <a href='#variables'><h2>Variables</h2></a>
            <hr/>
            <div className='var-inputs'>
                <div className='content-input-group'>
                    <label htmlFor='var-property'>Property</label>
                    <input id='var-property' value={newVarProperty} onChange={evt => setNewVarProperty(evt.target.value)}/>
                </div>
                <div className='content-input-group relative'>
                    <label htmlFor='var-value'>Value</label>
                    <input id='var-value' value={newVarValue} onChange={evt => setNewVarValue(evt.target.value)}/>
                    <label className='color-picker' htmlFor='var-color-picker'>
                        <div style={{backgroundColor: color}}></div>
                        <input type='color' id='var-color-picker' value={color} onChange={evt => setColor(evt.target.value)}/>
                    </label>
                </div>
                <button onClick={addVar}>+</button>
            </div>
            <div className='var-display-list'>
                {variables?.map((v) => {
                    return (
                    <div key={`var${v.id}`}>
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
  