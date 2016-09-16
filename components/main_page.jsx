var React = require('react');
var PropTypes = React.PropTypes;

var OptionsConstant = require('../constants/options_constants'),
    TemplateState = require('../state/template_state'),
    FormUtil = require ('../util/form_util');

var MainPage = React.createClass({

  getInitialState: function(){
    return {
      option: '' ,
      email: '',
      scene: 1
    };
  },

  updateSelection: function(event){
    this.setState( {option: event.target.innerText});
  },

  handleClick: function(event){
    //as more options are added survay this will need to be edited
    event.preventDefault();
    if (this.state.scene === 1){
        if (this.state.option !== '') {this.setState( {scene: 2});}
    }else{
        FormUtil.submitData(this.state.option, this.state.email);
    }
  },


  updateEmail: function(event){
    this.setState({ email: event.target.value});
  },

  renderButtons: function(){
    var that = this;
    var optionsButtons = Object.keys(OptionsConstant).map(function(optionName){
      if (that.state.option === optionName){
        var className = 'options-container-selected';
      }else{
        var className = 'options-container';
      }
      return (<div key={optionName} onClick={that.updateSelection} className={className}>
                <div className='options-image-container'>
                  <img className='options-image' src={OptionsConstant[optionName]}/>
                </div>
                {optionName}
             </div>);
    });

    return <div className='optionsButtons-container'>
              {optionsButtons}
            </div>;

  },

  renderEmail: function(){
    return (
        <label className='email'>Email
          <br/>
          <input type="text"
                 value={this.state.email}
                 onChange={this.updateEmail}/>
        </label>
    );
  },

  render: function() {
    if (this.state.scene === 1){
        var display = this.renderButtons();
    }else{
        var display = this.renderEmail();
    }
    return (
      <div className='form'>
        {display}
        <button className="form-button"
                onClick={this.handleClick}>Next</button>
      </div>
    );
  }

});

module.exports = MainPage;
