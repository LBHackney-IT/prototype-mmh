module.exports = function (router) {

  var v = "v1";
  var path = "/tenancy-household-checks/"+v+"/";

  router.post(path+'tenants-details', function (req, res) {
    /*if (req.session.data["eligibility-"+v+"-didyouapply"] == "Yes"){
      res.redirect(path+'granted-refused-permission');
    } else {
      res.redirect(path+'shutter-did-you-apply');
    }*/
    res.redirect(path+'visit-details');
  })

  router.post(path+'visit-details', function (req, res) {
    /*if (req.session.data["eligibility-"+v+"-didyouapply"] == "Yes"){
      res.redirect(path+'granted-refused-permission');
    } else {
      res.redirect(path+'shutter-did-you-apply');
    }*/
    res.redirect(path+'proof-id-residency');
  })

}