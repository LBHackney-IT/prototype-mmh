const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Tenancy & Household Checks (Tenancy Audit)
  require('./routes/tenancy-household-checks/v1.js')(router);

// Cautionary Alerts
  require('./routes/cautionary-alerts/v2.js')(router);
  require('./routes/cautionary-alerts/v1.js')(router);

module.exports = router