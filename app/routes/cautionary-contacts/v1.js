module.exports = function (router) {

  var v = "v1";
  var path = "/cautionary-contacts/"+v+"/";

  router.post(path+'cautionary-add', function (req, res) {
    /*if (req.session.data["eligibility-"+v+"-didyouapply"] == "Yes"){
      res.redirect(path+'granted-refused-permission');
    } else {
      res.redirect(path+'shutter-did-you-apply');
    }*/
    res.redirect(path+'cautionary-add-confirm');
  })

}