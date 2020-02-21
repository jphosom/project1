// ==========================================================================================================================
//
// This file contains data for the experiments used to tune performance
// of the SMPH model of IBUs.
// All data collected by John-Paul Hosom
//

var evaluateDevelopmentExperiments = [ ];  // null list means evaluate on all
// var evaluateDevelopmentExperiments = [ "ESB, Jul. 2017" ];
// var evaluateDevelopmentExperiments = [ "RedAle, Dec. 2017" ];
// var evaluateDevelopmentExperiments = [ "Kolshish, Oct. 2018" ];
// var evaluateDevelopmentExperiments = [ "Delicious Stout, Sep. 2016" ];
// var evaluateDevelopmentExperiments = [ "Excellent Stout, Dec. 2016" ];
// var evaluateDevelopmentExperiments = [ "Excellent Stout #2, Mar. 2018" ];
// var evaluateDevelopmentExperiments = [ "Tiffany's Stout Repeat, Dec. 2018" ];
// var evaluateDevelopmentExperiments = [ "Tiffany's Stout, Aug. 2018" ];
// var evaluateDevelopmentExperiments = [ "Xtra IPA, Jun. 2016" ];
// var evaluateDevelopmentExperiments = [ "American IPA, Oct. 2016" ];
// var evaluateDevelopmentExperiments = [ "Cascadia IPA, Feb. 2017" ];
// var evaluateDevelopmentExperiments = [ "Hold Out the CaCl2, Aug. 2017" ];
// var evaluateDevelopmentExperiments = [ "AgrippaIPA, Jun. 2018" ];

// units *must* be all metric

var developmentData = {
    "ESB, Jul. 2017": {
        "conditions":            [ "TEST" ],  // this field is needed to fit in same format as parameter search
        "IBU_list":              [ 17.0 ],

        "boilTime":              70,          // time to first hop addition, plus duration of longest hop steep time
        "wortVolume":            27.75,
        "preOrPostBoilVol":      "preBoilVol",
        "OG":                    1.0575,
        "pH":                    5.24,
        "preOrPostBoilpH":       "postBoilpH",
        "whirlpoolTime":         0,
        "beerAge_days":          20,

        // JPH FIX: cones should be pellets
        //                AA%   BA%   form      freshF  %loss  weight(g),  boil time
        "add1":        [ 6.1,    2.5, "cones", 0.95,   22.0,     49.61,     60 ], // EKG
        "add2":        [ 6.1,    2.5, "cones", 0.95,   22.0,     28.35,     10 ], // EKG

        "kettleDiameter":        37.148,
        "kettleOpening":         37.148,
        "evaporationRate":       4.01,    // estimated from pre-boil SG, post-boil SG, and total boil time
        "immersionDecayFactor":  0.1198,  // estimated from post-boil volume (which is estimated from evaporation rate)
        "forcedDecayType":       "forcedDecayImmersion",

        "skipSearch":   true,
        "search": [
             {
                 "param":    "AA1",
                 "default":  6.10,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.20,
             },
             {
                 "param":    "AA2",
                 "default":  6.10,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.20,
             },
       ],

    },

    "RedAle, Dec. 2017": {
        "conditions":            [ "TEST" ],  // this field is needed to fit in same format as parameter search
        "IBU_list":              [ 21.1 ],

        "boilTime":              70,          // time to first addition, plus duration of longest hop steep time
        "wortVolume":            27.63,
        "preOrPostBoilVol":      "preBoilVol",
        "OG":                    1.059,
        "pH":                    5.25,
        "preOrPostBoilpH":       "postBoilpH",
        "whirlpoolTime":         0,
        "beerAge_days":          18,

        //                AA%   BA%   form    freshF  %loss  weight(g),  boil time
        "add1":        [  7.7,   5.9, "cones", 0.99,   50.0,     28.35,     30 ], // cascade
        "add2":        [  6.2,   3.5, "cones", 0.95,   37.5,     28.35,     10 ], // willamette
        "add3":        [  6.2,   3.5, "cones", 0.95,   37.5,     28.35,      0 ], // willamette

        "kettleDiameter":        37.148,
        "kettleOpening":         37.148,
        "evaporationRate":       4.09,    // estimated from pre-boil SG, post-boil SG, and total boil time
        "immersionDecayFactor":  0.1206,  // estimated from post-boil volume (which is estimated from evaporation rate)
        "forcedDecayType":       "forcedDecayImmersion",

        "skipSearch":   true,
        "search": [
             {
                 "param":    "AA1",
                 "default":  7.70,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
             },
             {
                 "param":    "AA2",
                 "default":  6.20,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
             },
             {
                 "param":    "AA3",
                 "default":  6.20,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
             },
       ],
    },

    "Kolshish, Oct. 2018": {
        "conditions":            [ "TEST" ],  // this field is needed to fit in same format as parameter search
        "IBU_list":              [ 20.5 ],

        "boilTime":              68,          // time to first addition, plus duration of longest hop steep time
        "wortVolume":            27.633,
        "preOrPostBoilVol":      "preBoilVol",
        "OG":                    1.049,

        "pH":                    5.30,
        "preOrPostBoilpH":       "postBoilpH",
        "whirlpoolTime":         0,
        "beerAge_days":          21,

        // JPH FIX: cones should be pellets
        //                AA%   BA%   form    freshF  %loss  weight(g),  boil time
        "add1":        [  3.7,   5.0, "cones", 0.95,   40.0,     14.17,     60 ],  // tettnang
        "add2":        [  4.1,   4.0, "cones", 0.95,   40.0,     28.35,     60 ],  // hallertau; BA=guess, %loss=guess
        "add3":        [  5.0,   3.5, "cones", 0.95,   37.5,     7.09,      60 ],  // willamette
        "add4":        [  3.7,   5.0, "cones", 0.95,   40.0,     14.17,     10 ],  // tettnang

        "kettleDiameter":        37.148,
        "kettleOpening":         37.148,
        "evaporationRate":       3.98,
        "immersionDecayFactor":  0.4283,
        "forcedDecayType":       "forcedDecayImmersion",

        "skipSearch":   true,
        "search": [
             {
                 "param":    "AA1",
                 "default":  3.70,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.20,
             },
             {
                 "param":    "AA2",
                 "default":  4.10,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.20,
             },
             {
                 "param":    "AA3",
                 "default":  5.00,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.20,
             },
             {
                 "param":    "AA4",
                 "default":  3.70,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.20,
             },
       ],
    },


    "Delicious Stout, Sep. 2016": {
        "conditions":            [ "TEST" ],  // this field is needed to fit in same format as parameter search
        "IBU_list":              [ 22.0 ],

        "boilTime":              68,          // time to first addition, plus duration of longest hop steep time
        "wortVolume":            27.4,
        "preOrPostBoilVol":      "preBoilVol",
        "OG":                    1.065,
        "pH":                    5.15,
        "preOrPostBoilpH":       "postBoilpH",
        "whirlpoolTime":         0,
        "beerAge_days":          26,

        //                AA%   BA%   form    freshF  %loss  weight(g),  boil time
        "add1":        [  8.1,   7.6, "cones", 0.95,   50.0,   49.61,       45 ],  // cascade, measured AA and BA
        "add2":        [  8.1,   7.6, "cones", 0.95,   50.0,   28.35,        5 ],  // cascade, measured AA and BA


        "kettleDiameter":        37.148,
        "kettleOpening":         37.148,
        "evaporationRate":       3.88,
        "immersionDecayFactor":  0.1199,
        "forcedDecayType":       "forcedDecayImmersion",

        "skipSearch":   true,
        "search": [
             {
                 "param":    "AA1",
                 "default":  8.10,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
             },
             {
                 "param":    "AA2",
                 "default":  8.10,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
             },
       ],
    },

    "Excellent Stout, Dec. 2016": {
        "conditions":            [ "TEST" ],  // this field is needed to fit in same format as parameter search
        "IBU_list":              [ 21.0 ],

        "boilTime":              70,          // time to first addition, plus duration of longest hop steep time
        "wortVolume":            28.01,
        "preOrPostBoilVol":      "preBoilVol",
        "OG":                    1.073,
        "pH":                    5.05, // try pre-boil pH of 5.28
        "preOrPostBoilpH":       "postBoilpH",
        "whirlpoolTime":         0,
        "beerAge_days":          18,   // days until kegging

        //                AA%   BA%   form    freshF  %loss  weight(g),  boil time
        "add1":        [  8.4,   5.0, "cones", 0.95,   50.00,    56.70,     45 ], // cascade
        "add2":        [  8.4,   5.0, "cones", 0.95,   50.00,    28.35,      5 ], // cascade

        "kettleDiameter":        37.148,
        "kettleOpening":         37.148,
        "evaporationRate":       3.84,
        "immersionDecayFactor":  0.1159,
        "forcedDecayType":       "forcedDecayImmersion",

        "skipSearch":   true,
        "search": [
             {
                 "param":    "AA1",
                 "default":  8.40,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
             },
             {
                 "param":    "AA2",
                 "default":  8.40,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
             },
       ],
    },

    "Excellent Stout #2, Mar. 2018": {
        "conditions":            [ "TEST" ],  // this field is needed to fit in same format as parameter search
        "IBU_list":              [ 23.2 ],

        "boilTime":              65,          // time to first addition, plus duration of longest hop steep time
        "wortVolume":            28.0,
        "preOrPostBoilVol":      "preBoilVol",
        "OG":                    1.074,
        "pH":                    5.20,
        "preOrPostBoilpH":       "postBoilpH",
        "whirlpoolTime":         0,
        "beerAge_days":          12,

        //                AA%   BA%   form    freshF  %loss  weight(g),  boil time
        "add1":        [  4.8,   3.5, "cones", 0.95,   37.5,   85.05,       60 ],  // willamette
        "add2":        [  4.8,   3.5, "cones", 0.95,   37.5,   28.35,       10 ],  // willamette

        "kettleDiameter":        37.148,
        "kettleOpening":         37.148,
        "evaporationRate":       3.23,  // with pre-boil SG 1.063, estimated because 60'F hydrometer off by 2 points
        "immersionDecayFactor":  0.1082,
        "forcedDecayType":       "forcedDecayImmersion",

        "skipSearch":   true,
        "search": [
             {
                 "param":    "AA1",
                 "default":  4.80,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
             },
             {
                 "param":    "AA2",
                 "default":  4.80,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
             },
       ],
    },

    "Tiffany's Stout, Aug. 2018": {
        "conditions":            [ "TEST" ],  // this field is needed to fit in same format as parameter search
        "IBU_list":              [ 23.0 ],

        "boilTime":              67,          // time to first addition, plus duration of longest hop steep time
        "wortVolume":            27.4,
        "preOrPostBoilVol":      "preBoilVol",
        "OG":                    1.064,
        "pH":                    5.13,
        "preOrPostBoilpH":       "postBoilpH",
        "whirlpoolTime":         0,
        "beerAge_days":          13,

        //                AA%   BA%   form    freshF  %loss  weight(g),  boil time
        "add1":        [  5.0,   3.5, "cones", 0.95,   37.5,    63.79,      60 ],  // willamette
        "add2":        [  5.0,   3.5, "cones", 0.95,   37.5,    28.35,      10 ],  // willamette

        "kettleDiameter":        37.148,
        "kettleOpening":         37.148,
        "evaporationRate":       3.46,
        "immersionDecayFactor":  0.1155,
        "forcedDecayType":       "forcedDecayImmersion",

        "skipSearch":   true,
        "search": [
             {
                 "param":    "AA1",
                 "default":  5.00,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
             },
             {
                 "param":    "AA2",
                 "default":  5.00,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
             },
       ],
    },



    "Tiffany's Stout Repeat, Dec. 2018": {
        "conditions":            [ "TEST" ],  // this field is needed to fit in same format as parameter search
        "IBU_list":              [ 22.3 ],

        "boilTime":              70,          // time to first addition, plus duration of longest hop steep time
        "wortVolume":            27.3,
        "preOrPostBoilVol":      "preBoilVol",
        "OG":                    1.0615,
        "pH":                    5.15,
        "preOrPostBoilpH":       "postBoilpH",
        "whirlpoolTime":         0,
        "beerAge_days":          13,

        //                AA%   BA%   form    freshF  %loss  weight(g),  boil time
        "add1":        [  3.9,   3.5, "cones", 0.95,   37.5,    85.05,      60 ],  // willamette
        "add2":        [  3.9,   3.5, "cones", 0.95,   37.5,    28.35,      10 ],  // willamette

        "kettleDiameter":        37.148,
        "kettleOpening":         37.148,
        "evaporationRate":       3.46,
        "immersionDecayFactor":  0.4283,  // hydra wort chiller, measured Oct 27 2018
        "forcedDecayType":       "forcedDecayImmersion",

        "skipSearch":   true,
        "search": [
             {
                 "param":    "AA1",
                 "default":  3.90,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
             },
             {
                 "param":    "AA2",
                 "default":  3.90,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
             },
       ],
    },


    "Xtra IPA, Jun. 2016": {
        "conditions":            [ "TEST" ],  // this field is needed to fit in same format as parameter search
        "IBU_list":              [ 42.0 ],

        "boilTime":              70,          // time to first addition, plus duration of longest hop steep time
        "wortVolume":            29.90,
        "preOrPostBoilVol":      "preBoilVol",
        "OG":                    1.067,
        "pH":                    5.26,
        "preOrPostBoilpH":       "postBoilpH",
        "whirlpoolTime":         10,
        "beerAge_days":          20,  // until keg

        //                AA%   BA%   form    freshF  %loss  weight(g),  boil time
        "add1":        [  8.1,  7.6,  "cones", 0.95,   50.0,   35.44,       20 ],  // cascade, measured AA and BA
        "add2":        [  6.6,  5.4,  "cones", 0.87,   50.0,   28.35,        0 ],  // cascade 2015 crop, BA=measured
        "add3":        [  7.1,  6.5,  "cones", 0.99,    4.0,   56.70,        0 ],  // amarillo, unknown year
        "add4":        [ 12.9,  3.75, "cones", 0.95,   25.0,   56.70,        0 ],  // citra, unknown year
        "add5":        [ 13.7,  4.0,  "cones", 0.94,   25.0,   56.70,        0 ],  // simcoe 2016 crop; BA=package

        "kettleDiameter":        37.148,
        "kettleOpening":         28.0,  // target final measured temp of 93'C after 10 minutes
        "evaporationRate":       4.09,
        "immersionDecayFactor":  0.1035,
        "forcedDecayType":       "forcedDecayImmersion",
        "krausen":               "mix krausen back in; no loss",   // guess; no record

        "skipSearch":   true,
        "search": [
             {
                 "param":    "AA1",
                 "default":  8.10,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA2",
                 "default":  6.60,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA3",
                 "default":  12.90,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA4",
                 "default":  13.70,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA5",
                 "default":  7.10,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
       ],
    },


    "American IPA, Oct. 2016": {
        "conditions":            [ "TEST" ],  // this field is needed to fit in same format as parameter search
        "IBU_list":              [ 41.0 ],

        "boilTime":              70,          // time to first addition, plus duration of longest hop steep time
        "wortVolume":            31.53,
        "preOrPostBoilVol":      "preBoilVol",
        "OG":                    1.067,
        "pH":                    5.25,
        "preOrPostBoilpH":       "postBoilpH",
        "whirlpoolTime":         10,
        "beerAge_days":          24,

        //                AA%   BA%   form    freshF  %loss  weight(g),  boil time
        "add1":        [ 7.9,   5.0,  "cones", 0.98,   50.00,    28.35,     15 ], // cascade, unknown year
        "add2":        [ 7.9,   5.0,  "cones", 0.98,   50.00,    56.70,      0 ], // cascade, unknown year
        "add3":        [ 9.0,   6.5,  "cones", 1.00,    4.00,    85.05,      0 ], // amarillo 2016 crop; BA=guess
        "add4":        [ 12.3,  3.75, "cones", 0.98,   25.00,    85.05,      0 ], // citra 2016 crop; BA=guess
        "add5":        [ 13.7,  4.0,  "cones", 0.98,   25.00,    85.05,      0 ], // simco 2016 crop; BA=package

        "kettleDiameter":        37.148,
        "kettleOpening":         28.0,  // target final measured temp of 93'C after 10 minutes
        "evaporationRate":       4.50,
        "immersionDecayFactor":  0.0955,
        "forcedDecayType":       "forcedDecayImmersion",
        "krausen":               "mix krausen back in; no loss",   // guess; no record

        "skipSearch":   true,
        "search": [
             {
                 "param":    "AA1",
                 "default":  7.90,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA2",
                 "default":  7.90,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA3",
                 "default":  12.30,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA4",
                 "default":  13.70,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA5",
                 "default":  9.00,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
       ],
    },

    "Cascadia IPA, Feb. 2017": {
        "conditions":            [ "TEST" ],  // this field is needed to fit in same format as parameter search
        "IBU_list":              [ 44.0 ],

        "boilTime":              72,          // time to first addition, plus duration of longest hop steep time
        "wortVolume":            31.23,
        "preOrPostBoilVol":      "preBoilVol",
        "OG":                    1.068,
        "pH":                    5.32,
        "preOrPostBoilpH":       "postBoilpH",
        "whirlpoolTime":         10,
        "beerAge_days":          21,

        //                AA%   BA%   form    freshF  %loss  weight(g),  boil time
        "add1":        [ 8.4,   5.0,  "cones", 0.92,   50.00,    56.70,     35 ], // cascade, unknown year
        "add2":        [ 8.4,   5.0,  "cones", 0.92,   50.00,    56.70,      0 ], // cascade, unknown year
        "add3":        [ 9.0,   6.5,  "cones", 0.99,    4.00,    85.05,      0 ], // amarillo 2016 crop
        "add4":        [ 12.3,  3.75, "cones", 0.97,   25.00,    85.05,      0 ], // citra 2016 crop; BA=guess
        "add5":        [ 13.7,  4.0,  "cones", 0.97,   25.00,    85.05,      0 ], // simcoe 2016 crop; BA=package

        "kettleDiameter":        37.148,
        "kettleOpening":         28.0,  // target final measured temp of 93'C after 10 minutes
        "evaporationRate":       4.02,
        "immersionDecayFactor":  0.0947,
        "forcedDecayType":       "forcedDecayImmersion",

        "skipSearch":   true,
        "search": [
             {
                 "param":    "AA1",
                 "default":  8.40,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA2",
                 "default":  8.40,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA3",
                 "default":  12.30,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA4",
                 "default":  13.70,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA5",
                 "default":  9.00,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
       ],
    },

    "Hold Out the CaCl2, Aug. 2017": {
        "conditions":            [ "TEST" ],  // this field is needed to fit in same format as parameter search
        "IBU_list":              [ 56.5 ],

        "boilTime":              72,          // time to first addition, plus duration of longest hop steep time
        "wortVolume":            31.23,
        "preOrPostBoilVol":      "preBoilVol",
        "OG":                    1.067,
        "pH":                    5.33,
        "preOrPostBoilpH":       "postBoilpH",
        "whirlpoolTime":         10,
        "beerAge_days":          21,    // days until keg

        //                AA%   BA%   form    freshF  %loss  weight(g),  boil time
        "add1":        [  6.2,  5.0,  "cones", 0.95,   50.0,     76.83,     35 ],  // cascade, unknown year
        "add2":        [  6.2,  5.0,  "cones", 0.95,   50.0,     76.83,      0 ],  // cascade, unknown year
        "add3":        [  9.0,  6.5,  "cones", 0.99,    4.0,     85.05,      0 ],  // amarillo 2016 crop
        "add4":        [ 12.3,  3.75, "cones", 0.93,   25.0,     85.05,      0 ],  // citra 2016 crop; BA=guess
        "add5":        [ 13.7,  4.0,  "cones", 0.93,   25.0,     85.05,      0 ],  // simcoe 2016 crop; BA=package

        "kettleDiameter":        37.148,
        "kettleOpening":         28.0,  // target final measured temp of 93'C after 10 minutes
        "evaporationRate":       4.53,
        "immersionDecayFactor":  0.0988,
        "forcedDecayType":       "forcedDecayImmersion",
        // JPH: krausen mixed in or default has a *huge* impact on results
        "krausen":               "mix krausen back in; no loss",   // guess; no record

        "skipSearch":   true,
        "search": [
             {
                 "param":    "AA1",
                 "default":  6.20,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA2",
                 "default":  6.20,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA3",
                 "default":  12.30,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA4",
                 "default":  13.70,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
             {
                 "param":    "AA5",
                 "default":  9.00,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.25,
             },
       ],
    },

    "AgrippaIPA, Jun. 2018": {
        "conditions":            [ "TEST" ],  // this field is needed to fit in same format as parameter search
        "IBU_list":              [ 63.7 ],

        "boilTime":              75,          // time to first addition, plus duration of longest hop steep time
        "wortVolume":            30.55,
        "preOrPostBoilVol":      "preBoilVol",
        "OG":                    1.068,
        "pH":                    5.27,
        "preOrPostBoilpH":       "postBoilpH",
        "whirlpoolTime":         10,
        "tempExpParamB":         0.0053,      // from Jul 2019, cover *ON*
        "beerAge_days":          26,

        //                AA%   BA%    form    freshF  %loss  weight(g),  boil time
        "add1":        [ 12.3,  3.75, "cones", 0.86,   25.00,    28.35,     60 ], // citra 2016; BA=guess
        "add2":        [ 9.0,   6.5,  "cones", 0.98,    4.00,    28.35,     45 ], // amarillo 2016
        "add3":        [ 13.0,  4.5,  "cones", 0.94,   25.00,    28.35,     30 ], // simcoe 2017?
        "add4":        [ 12.3,  3.75, "cones", 0.86,   25.00,    14.17,      0 ], // citra 2016; BA=guess
        "add5":        [ 8.0,   5.0,  "cones", 0.87,   50.00,    21.26,      0 ], // cascade 2017?
        "add6":        [ 9.0,   6.5,  "cones", 0.98,    4.00,    21.26,      0 ], // amarillo 2016
        "add7":        [ 11.0,  3.6,  "cones", 0.94,   25.00,    21.26,      0 ], // mosaic 2017?
        "add8":        [ 13.0,  4.5,  "cones", 0.94,   25.00,    21.26,      0 ], // simcoe 2017?

        "kettleDiameter":        37.148,
        "kettleOpening":         28.0,  // target final expected temp of 93'C after 10 minutes
        "evaporationRate":       4.10,
        "immersionDecayFactor":  0.1015,
        "forcedDecayType":       "forcedDecayImmersion",
        "krausen":               "mix krausen back in; no loss",   // swirling of containers during fermentation


        "skipSearch":   true,
        "search": [
             {
                 "param":    "AA1",
                 "default":  12.30,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
             {
                 "param":    "AA2",
                 "default":  9.00,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
             {
                 "param":    "AA3",
                 "default":  13.00,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
             {
                 "param":    "AA4",
                 "default":  9.00,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
             {
                 "param":    "AA5",
                 "default":  13.00,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
             {
                 "param":    "AA6",
                 "default":  12.30,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
             {
                 "param":    "AA7",
                 "default":  11.00,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
             {
                 "param":    "AA8",
                 "default":  8.00,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
       ],
    },

    "AgrippaIPA, Jul. 2019": {
        "conditions":            [ "TEST" ],  // this field is needed to fit in same format as parameter search
        "IBU_list":              [ 43.3 ],

        "boilTime":              72,          // time to first addition, plus duration of longest hop steep time
        "wortVolume":            29.715,
        "preOrPostBoilVol":      "preBoilVol",
        "OG":                    1.071,
        "pH":                    5.25,
        "preOrPostBoilpH":       "preBoilpH",
        "whirlpoolTime":         10,
        "tempExpParamB":         0.0053,      // from Jul 2019, cover *ON*
        "beerAge_days":          24,

        //                AA%   BA%    form    freshF  %loss  weight(g),  boil time
        "add1":        [ 14.3,  4.0,  "cones", 0.837,  25.00,    28.35,     60 ], // citra
        "add2":        [ 9.3,   6.5,  "cones", 0.959,  14.00,    28.35,     45 ], // amarillo
        "add3":        [ 12.6,  4.5,  "cones", 0.923,  25.00,    28.35,     30 ], // simcoe
        "add4":        [ 9.3,   6.5,  "cones", 0.959,  14.00,    21.26,      0 ], // amarillo
        "add5":        [ 12.6,  4.5,  "cones", 0.923,  25.00,    21.26,      0 ], // simcoe
        "add6":        [ 14.3,  4.0,  "cones", 0.837,  25.00,    19.84,      0 ], // citra
        "add7":        [ 10.3,  3.5,  "cones", 0.956,  15.00,    21.26,      0 ], // mosaic
        "add8":        [  7.05, 5.66, "cones", 0.825,  50.00,    28.30,      0 ], // cascade

        "kettleDiameter":        37.148,
        "kettleOpening":         0.0,  // should be overwritten by tempExpParamB
        "evaporationRate":       3.71,
        "immersionDecayFactor":  0.4283,  // hydra wort chiller, measured Oct 27 2018
        "forcedDecayType":       "forcedDecayImmersion",

        "skipSearch":   true,
        "search": [
             {
                 "param":    "AA1",
                 "default":  14.30,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
             {
                 "param":    "AA2",
                 "default":  9.30,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
             {
                 "param":    "AA3",
                 "default":  12.60,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
             {
                 "param":    "AA4",
                 "default":  9.30,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
             {
                 "param":    "AA5",
                 "default":  12.60,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
             {
                 "param":    "AA6",
                 "default":  14.30,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
             {
                 "param":    "AA7",
                 "default":  10.30,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
             {
                 "param":    "AA8",
                 "default":  7.05,
                 "method":   "relative",
                 "low":      0.85,
                 "high":     1.15,
                 "inc":      0.5,
             },
       ],
    },

};

