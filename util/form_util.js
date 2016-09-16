//this could be refactored if implimenting flux/redux

module.exports = {
  submitData: function(option, email){
    $.ajax({
      url: "", //need to update url
      method: "POST",
      data: {
        option: option,
        email: email
      }
    });
  }
};
