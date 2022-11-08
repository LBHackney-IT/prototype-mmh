module.exports = function (router) {

  var v = "v1";
  var path = "/tenancy-household-checks/"+v+"/";

  // Set up session variables to jump to chack and sign screen
  router.get(path+'skip', function (req, res) {
    req.session.data["thc-"+v+"-tenantsdetails-tenant1-name"] = "John";
    req.session.data["thc-"+v+"-tenantsdetails-tenant1-dob-day"] = "01";
    req.session.data["thc-"+v+"-tenantsdetails-tenant1-dob-month"] = "02";
    req.session.data["thc-"+v+"-tenantsdetails-tenant1-dob-year"] = "2003";
    req.session.data["thc-"+v+"-tenantsdetails-tenant1-tel"] = "01987654321";
    req.session.data["thc-"+v+"-tenantsdetails-tenant1-email"] = "hello@domain.com";
    req.session.data["thc-"+v+"-visitdetails-visitcompleted"] = "Yes";
    req.session.data["thc-"+v+"-visitdetails-propertyoccupied"] = "Yes";
    req.session.data["thc-"+v+"-visitdetails-tenantinoccupation"] = "Yes";
    req.session.data["thc-"+v+"-proof-id"] = [
        "Passport",
        "Birth Certificate"
    ],
    req.session.data["thc-"+v+"-proof-residency"] = [
        "Utility bill",
        "Proof of savings",
        "P60, P45, or pay slips"
    ],
    req.session.data["thc-"+v+"-proof-id-passport"] = "passport.pdf";
    req.session.data["thc-"+v+"-proof-id-birthcertificate"] = "birthcertificate.pdf";
    req.session.data["thc-"+v+"-proof-id-immigrationdocument"] = "";
    req.session.data["thc-"+v+"-proof-id-drivinglicence"] = "";
    req.session.data["thc-"+v+"-proof-id-provisionaldriving"] = "";
    req.session.data["thc-"+v+"-proof-id-residencepermit"] = "";
    req.session.data["thc-"+v+"-proof-id-freedompass"] = "";
    req.session.data["thc-"+v+"-proof-residency-utilitybill"] = "utilitybill.pdf";
    req.session.data["thc-"+v+"-proof-residency-savings"] = "bankstatement.pdf";
    req.session.data["thc-"+v+"-proof-residency-awardletter"] = "";
    req.session.data["thc-"+v+"-proof-residency-otherletter"] = "";
    req.session.data["thc-"+v+"-proof-residency-payslips"] = "wageslips.pdf";
    req.session.data["thc-"+v+"-housingbenefit-claiming"] = "Yes";
    req.session.data["thc-"+v+"-housingbenefit-claiming-detail"] = "Tenant's housing benefit details";
    req.session.data["thc-"+v+"-housingbenefit-arrears"] = "Yes";
    req.session.data["thc-"+v+"-housingbenefit-arrears-detail"] = "Tenant's proposal to clear the debt";
    req.session.data["thc-"+v+"-housingbenefit-referred"] = "No";
    req.session.data["thc-"+v+"-repairs-queries"] = "No";
    req.session.data["thc-"+v+"-property-location"] = "Ground floor";
    req.session.data["thc-"+v+"-property-garden"] = "Yes";
    req.session.data["thc-"+v+"-property-flooring"] = "Yes";
    req.session.data["thc-"+v+"-property-flooring-detail"] = "Bathroom and kitchen";
    req.session.data["thc-"+v+"-property-evidence"] = "Yes";
    req.session.data["thc-"+v+"-property-evidence-detail"] = "Yes, authorisation was sought and approved";
    req.session.data["thc-"+v+"-property-damage"] = "Yes";
    req.session.data["thc-"+v+"-property-damage-detail"] = "Signs of damage caused to the property";
    req.session.data["thc-"+v+"-property-comments"] = "Any additional comments";
    req.session.data["thc-"+v+"-asb-constitutes"] = "No";
    req.session.data["thc-"+v+"-asb-discussed"] = "Yes";
    req.session.data["thc-"+v+"-asb-followup"] = "Follow up action";
    req.session.data["thc-"+v+"-firehazards-metalgates"] = "Yes";
    req.session.data["thc-"+v+"-firehazards-metalgates-items"] = "No";
    req.session.data["thc-"+v+"-firehazards-communal-plants"] = "Yes";
    req.session.data["thc-"+v+"-firehazards-communal-combustible"] = "Yes";
    req.session.data["thc-"+v+"-firehazards-storingmaterials"] = "Yes";
    req.session.data["thc-"+v+"-firehazards-fireexit"] = "Yes";
    req.session.data["thc-"+v+"-firehazards-smokealarm"] = "Yes";
    req.session.data["thc-"+v+"-petsanimals"] = "Yes";
    req.session.data["thc-"+v+"-petsanimals-permission"] = "Yes";
    req.session.data["thc-"+v+"-disability"] = "Yes";
    req.session.data["thc-"+v+"-disability-pip"] = "Yes";
    req.session.data["thc-"+v+"-disability-description"] = "Description of disability";
    req.session.data["thc-"+v+"-referrals-which"] = [
        "Mental health services",
        "Tenancy investigation",
        "Financial inclusion",
        "Adult social care",
        "Hackney advice network",
        "Organisation through better conversations tool",
        "Other"
    ],
    req.session.data["thc-"+v+"-referrals"] = "Yes";
    req.session.data["thc-"+v+"-referrals-other"] = "Name of other agency";
    req.session.data["thc-"+v+"-referrals-concerns"] = "Yes";
    req.session.data["thc-"+v+"-referrals-concerns-details"] = "Safeguarding details";
    req.session.data["thc-"+v+"-enquiries-home"] = "Yes";
    req.session.data["thc-"+v+"-enquiries-home-details"] = "Questions from tenant regarding their home";
    req.session.data["thc-"+v+"-enquiries-facilities"] = "Yes";
    req.session.data["thc-"+v+"-enquiries-facilities-details"] = "Questions from tenant regarding estate and facilities";
    req.session.data["thc-"+v+"-enquiries-alterations"] = "Yes";
    req.session.data["thc-"+v+"-enquiries-tra"] = "Yes";
    req.session.data["thc-"+v+"-enquiries-tra-bepart"] = "No";
    res.redirect(path+'check-sign');
  })


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

  router.post(path+'check-sign', function (req, res) {
    res.redirect(path+'confirmation');
  })

}