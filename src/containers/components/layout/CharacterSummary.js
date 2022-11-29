import React from 'react'
import {useState} from 'react';

import { connect } from "react-redux";
import { updateSubRace, 
  updateClass, 
  updateName, 
  updateRace, 
  updateSubClass } from "../../../redux/actionCreators";

const mapStateToProps = state => {
    return {
      race: state.pc.race,
      subrace: state.pc.subrace,
      class: state.pc.class,
      subclass: state.pc.subclass,
      name: state.pc.name
    };
  };
  
const mapDispatchToProps = dispatch => ({
    updateCharSubRace: (newsubrace) => dispatch(updateSubRace(newsubrace)),
    updateCharRace: (newrace) => dispatch(updateRace(newrace)),
    updateCharSubClass: (newsubclass) => dispatch(updateSubClass(newsubclass)),
    updateCharClass: (newclass) => dispatch(updateClass(newclass)),
    updateCharName: (newname) => dispatch(updateName(newname))
  });


const CharacterSummary = props => {

  
  return (
    <div>
      <h2_2>Character Summary</h2_2>
      <br/><bold>Race:  </bold>{props.race}
      <br/><bold>Subrace:  </bold>{props.subrace}
      <br/><bold>Class:  </bold>{props.class}
      <br/><bold>Subclass:  </bold>{props.subclass}
    </div>
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(CharacterSummary);
