"use strict";
exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LineChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(738);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(306);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var chartjs_adapter_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(117);
/* harmony import */ var chartjs_adapter_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chartjs_adapter_moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(196);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__, chart_js_auto__WEBPACK_IMPORTED_MODULE_3__]);
([react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__, chart_js_auto__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function LineChart() {
    // State variables for chart
    const [views, setViews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [point, setPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [percent, setPercent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [countryChart, setCountryChart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [mediaPercent, setMediaPercent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [source, setSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [nums, setNums] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // fetch the view data from API
        async function fetchData() {
            const fetchedViews = await (0,_utils_data__WEBPACK_IMPORTED_MODULE_6__/* .getData */ .Yu)();
            setViews(fetchedViews.transformedDates);
            setPoint(fetchedViews.points);
        }
        fetchData();
        async function fetchLocationData() {
            const fetchedLocation = await (0,_utils_data__WEBPACK_IMPORTED_MODULE_6__/* .getLocationData */ .b2)();
            const countriesAndPercents = fetchedLocation.countries.map((country, index)=>`${country}, ${fetchedLocation.percents[index]}%`);
            setCountryChart(countriesAndPercents);
            setLocation(fetchedLocation.countries);
            setPercent(fetchedLocation.percents);
        }
        fetchLocationData();
        async function fetchMedia() {
            const fetchedMediaData = await (0,_utils_data__WEBPACK_IMPORTED_MODULE_6__/* .getMedia */ .om)();
            const mediaAndPercent = fetchedMediaData.sourceData.map((media, index)=>`${media}, ${fetchedMediaData.sourcePercent[index]}%`);
            setMediaPercent(mediaAndPercent);
            setSource(fetchedMediaData.sourceData);
            setNums(fetchedMediaData.sourcePercent);
        // setPercent(fetchedLocation.percents)
        }
        fetchMedia();
    }, []);
    const ringDataSet = {
        datasets: [
            {
                data: percent,
                backgroundColor: [
                    "green",
                    "red",
                    "yellow",
                    "blue",
                    "gray"
                ],
                hoverBackgroundColor: [
                    "green",
                    "red",
                    "yellow",
                    "blue",
                    "gray"
                ]
            }
        ]
    };
    const ringData = {
        datasets: [
            {
                data: nums,
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }
        ]
    };
    const options = {
        cutoutPercentage: 60
    };
    const chartData = {
        labels: views,
        datasets: [
            {
                label: "My First dataset",
                fil: "origin",
                backgroundColor: "rgb(255,192,203)",
                borderColor: "rgb(255, 24,3)",
                data: point
            }
        ]
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "line",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {
                    data: chartData,
                    width: "100%",
                    height: "40%"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rings",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex ring_text justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "top_head",
                                        children: " Top Referal source"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "viewsubs",
                                        children: "View full reports"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-between ",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex ring_data",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mr-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "flag mt-4",
                                                        src: "https://img.icons8.com/color/48/null/nigeria-flag.png"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "flag mt-3",
                                                        src: "https://img.icons8.com/color/48/null/germany.png"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "flag mt-3",
                                                        src: "https://img.icons8.com/color/48/null/ghana.png"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "flag mt-3",
                                                        src: "https://img.icons8.com/external-flat-icons-inmotus-design/67/null/external-finland-flags-flat-icons-inmotus-design.png"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "flag mt-3",
                                                        src: "https://img.icons8.com/emoji/48/null/england-emoji.png"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "",
                                                children: countryChart && countryChart.map((country, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "country",
                                                        children: country
                                                    }, index))
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "green "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "red "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "yellow"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "blue"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "gray ml-4"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "doug",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Doughnut, {
                                            options: options,
                                            data: ringDataSet,
                                            width: "5%",
                                            height: "5%"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rings",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex ring_text justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "top_head",
                                        children: " Top Locations"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "viewsubs",
                                        children: "View full reports"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-between ",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex ring_data ",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "mr-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "flag mt-3",
                                                        src: "https://img.icons8.com/color/48/null/google-logo.png"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "flag mt-3",
                                                        src: "https://img.icons8.com/fluency/48/null/instagram-new.png"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "flag mt-3",
                                                        src: "https://img.icons8.com/color/48/null/facebook.png"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "flag mt-3",
                                                        src: "https://img.icons8.com/fluency/48/null/linkedin.png"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "",
                                                children: mediaPercent && mediaPercent.map((country, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "country",
                                                        children: country
                                                    }, index))
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "ml-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "insta "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "red "
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "yellow"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "blue"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "gray"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "doug",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Doughnut, {
                                            options: options,
                                            data: ringData,
                                            width: "5%",
                                            height: "5%"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Sidebar() {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleNav = ()=>{
        setIsOpen(!isOpen);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                onClick: ()=>{
                    toggleNav();
                },
                className: "logo",
                src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__10__zn7YAAwIR.webp?updatedAt=1682516186976"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                    className: ` nav ${isOpen ? "open" : ""}`,
                    initial: {
                        x: "0%"
                    },
                    exit: {
                        x: "100%}"
                    },
                    animate: {
                        x: !isOpen ? "0%" : "-100%"
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: isOpen ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bar",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "menu_container",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "menu_item_1 flex justify-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "menu_item_1_icon",
                                                src: "https://ik.imagekit.io/juwoncaleb/dashboard_OhEYjY5SX.webp?updatedAt=1682514501285"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Dashboard"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "other_container_1",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                initial: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                whileHover: {
                                                    opacity: 1,
                                                    x: 20
                                                },
                                                transition: {
                                                    type: "ease",
                                                    duration: 0.2
                                                },
                                                className: "flex justify-between other_item_1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "other_item_icon",
                                                        src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__4__zYqYNf4V4.webp?updatedAt=1682514868899"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Item 1"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                initial: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                whileHover: {
                                                    opacity: 1,
                                                    x: 20
                                                },
                                                transition: {
                                                    type: "ease",
                                                    duration: 0.2
                                                },
                                                className: "flex justify-between other_item_1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "other_item_icon",
                                                        src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__8__K18ZjoMsa.webp?updatedAt=1682515318426"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Item 2"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                initial: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                whileHover: {
                                                    opacity: 1,
                                                    x: 20
                                                },
                                                transition: {
                                                    type: "ease",
                                                    duration: 0.2
                                                },
                                                className: "flex justify-between other_item_1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "other_item_icon",
                                                        src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__9__ucTfURaZt.webp?updatedAt=1682515397437"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Item 3"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "other_container_1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "OTHERS 1"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                initial: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                whileHover: {
                                                    opacity: 1,
                                                    x: 20
                                                },
                                                transition: {
                                                    type: "ease",
                                                    duration: 0.2
                                                },
                                                className: "flex justify-between other_item_1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "other_item_icon",
                                                        src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__2__xqJOC0d--.webp?updatedAt=1682514662483"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Item4"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                                initial: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                whileHover: {
                                                    opacity: 1,
                                                    x: 20
                                                },
                                                transition: {
                                                    type: "ease",
                                                    duration: 0.2
                                                },
                                                className: "flex justify-between other_item_1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        className: "other_item_icon_file",
                                                        src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__7__kK36tIam8.webp?updatedAt=1682515170042"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "Item 5"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "other_container_2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "OTHER 2"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        initial: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        whileHover: {
                                            opacity: 1,
                                            x: 20
                                        },
                                        transition: {
                                            type: "ease",
                                            duration: 0.2
                                        },
                                        className: "flex justify-between other_item_1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "other_item_icon",
                                                src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__6__HvgUdU9LJ.webp?updatedAt=1682515105295"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Item 6"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        initial: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        whileHover: {
                                            opacity: 1,
                                            x: 20
                                        },
                                        transition: {
                                            type: "ease",
                                            duration: 0.2
                                        },
                                        className: "flex justify-between other_item_1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "other_item_icon_file",
                                                src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__5__PEDd0BNxL.webp?updatedAt=1682514979304"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Item 7"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        className: "flex justify-between other_item_1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "other_item_icon",
                                                src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__3__O0YDTF4Sz.webp?updatedAt=1682514780774"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: "Item 8"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "user flex",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "female",
                                        src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__11__r_AO6ND36S.webp?updatedAt=1682516186933"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Blessing Daniel"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            !isOpen ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "barMini",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "menu_container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "menu_item_1 flex justify-between",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "menu_item_1_icon",
                                    src: "https://ik.imagekit.io/juwoncaleb/dashboard_OhEYjY5SX.webp?updatedAt=1682514501285"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "other_container_1",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        initial: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        whileHover: {
                                            opacity: 1,
                                            x: 20
                                        },
                                        transition: {
                                            type: "ease",
                                            duration: 0.2
                                        },
                                        className: "flex justify-between other_item_1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "other_item_icon",
                                            src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__4__zYqYNf4V4.webp?updatedAt=1682514868899"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        initial: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        whileHover: {
                                            opacity: 1,
                                            x: 20
                                        },
                                        transition: {
                                            type: "ease",
                                            duration: 0.2
                                        },
                                        className: "flex justify-between other_item_1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "other_item_icon",
                                            src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__8__K18ZjoMsa.webp?updatedAt=1682515318426"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                        initial: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        whileHover: {
                                            opacity: 1,
                                            x: 20
                                        },
                                        transition: {
                                            type: "ease",
                                            duration: 0.2
                                        },
                                        className: "flex justify-between other_item_1",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "other_item_icon",
                                            src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__9__ucTfURaZt.webp?updatedAt=1682515397437"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "other_container_1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    initial: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    whileHover: {
                                        opacity: 1,
                                        x: 20
                                    },
                                    transition: {
                                        type: "ease",
                                        duration: 0.2
                                    },
                                    className: "flex justify-between other_item_1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "other_item_icon",
                                        src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__2__xqJOC0d--.webp?updatedAt=1682514662483"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    initial: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    whileHover: {
                                        opacity: 1,
                                        x: 20
                                    },
                                    transition: {
                                        type: "ease",
                                        duration: 0.2
                                    },
                                    className: "flex justify-between other_item_1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: "other_item_icon_file",
                                        src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__7__kK36tIam8.webp?updatedAt=1682515170042"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "other_container_2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                initial: {
                                    opacity: 1,
                                    x: 0
                                },
                                whileHover: {
                                    opacity: 1,
                                    x: 20
                                },
                                transition: {
                                    type: "ease",
                                    duration: 0.2
                                },
                                className: "flex justify-between other_item_1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "other_item_icon",
                                    src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__6__HvgUdU9LJ.webp?updatedAt=1682515105295"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                initial: {
                                    opacity: 1,
                                    x: 0
                                },
                                whileHover: {
                                    opacity: 1,
                                    x: 20
                                },
                                transition: {
                                    type: "ease",
                                    duration: 0.2
                                },
                                className: "flex justify-between other_item_1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "other_item_icon_file",
                                    src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__5__PEDd0BNxL.webp?updatedAt=1682514979304"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                className: "flex justify-between other_item_1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "other_item_icon",
                                    src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__3__O0YDTF4Sz.webp?updatedAt=1682514780774"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "user flex",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "female",
                            src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker__11__r_AO6ND36S.webp?updatedAt=1682516186933"
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 120:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(348);
/* harmony import */ var _components_Line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(237);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(738);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__, _components_Line__WEBPACK_IMPORTED_MODULE_3__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__, _components_Line__WEBPACK_IMPORTED_MODULE_3__, react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function Dashboard() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "dashbooard flex ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "main_dashboard",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "dashboard_main",
                            children: "Dashboard"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "dashboard_greeting flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Good morning, Blessing"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "cloud",
                                src: "https://ik.imagekit.io/juwoncaleb/ezgif.com-gif-maker_1BlAQKcMj.webp?updatedAt=1682514155318"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between dasboard_summary",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "dashboard_subtext",
                                children: "Check out your dashboard summary"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "dashboard_analyltics",
                                children: "View anaylytics"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "dashboard_days flex",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "days",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "1 Day"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "days",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "3 Days"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "days",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "7 Days"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "days",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "30 Days"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "dashboard_all_time",
                                children: "All Time"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "customdate",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Custom Date"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "dashboard_linegrahs",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "page_view",
                                children: "Page view"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "page_num",
                                children: "500"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Line__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yu": () => (/* binding */ getData),
/* harmony export */   "b2": () => (/* binding */ getLocationData),
/* harmony export */   "om": () => (/* binding */ getMedia)
/* harmony export */ });
async function getData() {
    const cachedData = localStorage.getItem("data");
    if (cachedData) {
        return JSON.parse(cachedData);
    }
    console.log("fetching data...");
    const response = await fetch("https://fe-task-api.mainstack.io/");
    const { graph_data: { views  }  } = await response.json();
    // Store dates
    const transformedDates = [];
    const points = [];
    // Loop through the keys in the views object
    for(const dateStr in views){
        const date = new Date(dateStr);
        // Format the date string using toLocaleString() method
        const formattedDate = `${date.getDate()}${getOrdinalSuffix(date.getDate())} ${date.toLocaleString("en-us", {
            month: "short"
        })}`;
        transformedDates.push(formattedDate);
    }
    // Function to get the ordinal suffix for a given number
    function getOrdinalSuffix(number) {
        const suffixes = [
            "th",
            "st",
            "nd",
            "rd"
        ];
        const mod100 = number % 100;
        const mod10 = number % 10;
        return mod10 <= 3 && mod100 !== 11 && mod100 !== 12 && mod100 !== 13 ? suffixes[mod10] : suffixes[0];
    }
    for(let key in views){
        points.push(views[key]);
    }
    const data = {
        transformedDates,
        points
    };
    localStorage.setItem("data", JSON.stringify(data));
    return data;
}
async function getLocationData() {
    const cachedData = localStorage.getItem("locationData");
    if (cachedData) {
        return JSON.parse(cachedData);
    }
    console.log("fetching data...");
    const response = await fetch("https://fe-task-api.mainstack.io/");
    const data = await response.json();
    const countries = data.top_locations.map((location)=>location.country);
    const counts = data.top_locations.map((location)=>location.count);
    const percents = data.top_locations.map((location)=>location.percent);
    const locationData = {
        countries,
        counts,
        percents
    };
    localStorage.setItem("locationData", JSON.stringify(locationData));
    return locationData;
}
async function getMedia() {
    const cachedData = localStorage.getItem("mediaData");
    if (cachedData) {
        return JSON.parse(cachedData);
    }
    console.log("fetching data...");
    const response = await fetch("https://fe-task-api.mainstack.io/");
    const data = await response.json();
    const sourceData = data.top_sources.map((soor)=>soor.source);
    const sourceCount = data.top_sources.map((soor)=>soor.count);
    const sourcePercent = data.top_sources.map((soor)=>soor.percent);
    const mediaData = {
        sourceData,
        sourceCount,
        sourcePercent
    };
    localStorage.setItem("mediaData", JSON.stringify(mediaData));
    return mediaData;
}



/***/ })

};
;