var React = require('react');
var PropTypes = React.PropTypes;

function InputField (props) {
    return (
        <input 
          className='form-control'
          onChange={props.onUpdateCity}
          placeholder='Melbourne'
          type='text'
          value={props.city}
          />
    )    
}

function Button (props) {
    return (
        <button type='button'
          style={{margin: 10}}
          className='btn btn-success'
          onClick={props.onSubmitCity}>
            {props.children}
        </button>
    )
}

function getStyles (props) {
    return {
        display: 'flex',
        flexDirection: props.direction || 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 300,
        alignSelf: 'right'
    }
}

function GetCity (props) {
    return (
        <div style={getStyles(props)}>
          <InputField onUpdateCity={props.onUpdateCity}/>
          <Button onSubmitCity={props.onSubmitCity}>Get Weather</Button>
        </div>
    )
}

GetCity.propTypes = {
    direction: PropTypes.string,
    onSubmitCity: PropTypes.func.isRequired,
    onUpdateCity: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired
}

module.exports = GetCity;