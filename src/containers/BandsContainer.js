import React, { Component } from 'react'
import { connect } from "react-redux"
import BandInput from "../components/BandInput"
import RenderBand from "../components/RenderBand"

class BandsContainer extends Component {

  render() {
    const {addBand, bands} = this.props
    return(
      <div>
        <BandInput addBand={addBand} />
        <ul>
          {bands.map((band, index) => <RenderBand key={index} band={band} />)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => dispatch({type: "ADD_BAND", band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer) 
