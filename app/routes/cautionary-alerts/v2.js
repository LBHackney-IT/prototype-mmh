module.exports = function (router) {

  var v = "v2";
  var path = "/cautionary-alerts/"+v+"/";

  router.post(path+'search', function (req, res) {

    delete req.session.data["cc-"+v+"-added"];
    if (req.session.data["cc-"+v+"-searchtype"] == "Property"){
      res.redirect(path+'property');
    }
    if (req.session.data["cc-"+v+"-searchtype"] == "Person"){
      res.redirect(path+'person');
    }
    if (req.session.data["cc-"+v+"-searchtype"] == "Tenure"){
      res.redirect(path+'tenure');
    }
  })

  router.post(path+'cautionary-add', function (req, res) {
    res.redirect(path+'cautionary-add-confirm');
  })

  router.post(path+'cautionary-add-confirm', function (req, res) {
    res.redirect(path+'person');
  })

}