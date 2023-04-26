"use strict";
(() => {
var exports = {};
exports.id = 787;
exports.ids = [787];
exports.modules = {

/***/ 972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ subscribeUser)
});

;// CONCATENATED MODULE: external "isomorphic-unfetch"
const external_isomorphic_unfetch_namespaceObject = require("isomorphic-unfetch");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/subscribeUser.js

/* harmony default export */ const subscribeUser = (async (req, res)=>{
    const { email  } = req.body;
    console.log({
        email
    });
    if (!email) {
        return res.status(400).json({
            error: "Email is required"
        });
    }
    try {
        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
        const API_KEY = process.env.MAILCHIMP_API_KEY;
        const DATACENTER = process.env.MAILCHIMP_API_SERVER;
        const data = {
            email_address: email,
            status: "subscribed"
        };
        const response = await external_isomorphic_unfetch_default()(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {
            body: JSON.stringify(data),
            headers: {
                Authorization: `apikey ${API_KEY}`,
                "Content-Type": "application/json"
            },
            method: "POST"
        });
        if (response.status >= 400) {
            return res.status(400).json({
                error: `There was an error subscribing to the newsletter.
        Hit me up peter@peterlunch.com and I'll add you the old fashioned way :(.`
            });
        }
        return res.status(201).json({
            error: ""
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message || error.toString()
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(972));
module.exports = __webpack_exports__;

})();