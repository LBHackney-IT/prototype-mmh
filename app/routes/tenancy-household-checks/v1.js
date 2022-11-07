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
    res.redirect(path+'proof-id-residency');
  })

  router.post(path+'proof-id-residency', function (req, res) {
    res.redirect(path+'rent-housing-benefit');
  })

  router.post(path+'rent-housing-benefit', function (req, res) {
    res.redirect(path+'repairs');
  })

  router.post(path+'repairs', function (req, res) {
    res.redirect(path+'property');
  })

  router.post(path+'property', function (req, res) {
    res.redirect(path+'anti-social-behaviour');
  })

  router.post(path+'anti-social-behaviour', function (req, res) {
    res.redirect(path+'fire-hazards');
  })

  router.post(path+'fire-hazards', function (req, res) {
    res.redirect(path+'pets-animals');
  })

  router.post(path+'pets-animals', function (req, res) {
    res.redirect(path+'disability');
  })

  router.post(path+'disability', function (req, res) {
    res.redirect(path+'referrals-safeguarding');
  })

  router.post(path+'referrals-safeguarding', function (req, res) {
    res.redirect(path+'tenant-enquiries');
  })

  router.post(path+'tenant-enquiries', function (req, res) {
    res.redirect(path+'check-sign');
  })

}