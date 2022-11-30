import React from 'react'
import Picture from '../pics/aasimar.png'
import {useState} from 'react';

import { connect } from "react-redux";
import { updateSubClass } from "../../../redux/actionCreators";

const mapStateToProps = state => {
    return {
      subclass: state.pc.subclass
    };
  };
  
  const mapDispatchToProps = dispatch => ({
    updateCharSubClass: (newsubclass) => dispatch(updateSubClass(newsubclass))
  });

const MonkClass = props => {

    const [buttons, setButtons] = useState([
        {class: "buttonsubclass", label: "test2", value: false },
        {class: "buttonsubclass", label: "test1", value: false }
    
    ]);

    const handleButtonsChange = ({
        buttons,
        setButtons,
        handleButtonsChange
    }) => label => {
        const newButtonsState = buttons.map(button => {
            if (button.label === label) {
                return (button = { class: "buttonsubclass_clicked", label: button.label, value: true});
            }
            return {
                class: "buttonsubclass",
                label: button.label,
                value: false
            };
        });
        setButtons(newButtonsState)
    };
       
    const Specialbuton = ({ buttons, setButtons, handleButtonsChange }) => {
        return (
            <>
                {buttons.map((button,index) => (
                    <button className={`${button.class}`}
                        key={`${button.label}-${index}`}
                        onClick={() => {
                            handleButtonsChange({ buttons, setButtons })(button.label);
                            props.updateCharSubClass(button.label);
                            }
                        }
                    >
                        {button.label}
                    </button>
                ))}
            </>
        )
    }

    return (
        <div>
            Placeholder
         </div>
    )        
}

export default connect(mapStateToProps,mapDispatchToProps)(MonkClass);
