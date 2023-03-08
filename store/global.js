const api = 'https://api.geekex.com'

export const state = () => ({
  loader: false,
  countries: [
        {
          "name": "United States",
          "code": "+1",
          "iso": "US",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/us.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "United Kingdom",
          "code": "+44",
          "iso": "GB",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/gb.svg",
          "mask": "##-####-####"
        },
        {
          "name": "France",
          "code": "+33",
          "iso": "FR",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/fr.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Germany",
          "code": "+49",
          "iso": "DE",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/de.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Spain",
          "code": "+34",
          "iso": "ES",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/es.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Italy",
          "code": "+39",
          "iso": "IT",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/it.svg",
          "mask": "(###)####-###"
        },
        {
          "name": "Netherlands",
          "code": "+31",
          "iso": "NL",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/nl.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Mexico",
          "code": "+52",
          "iso": "MX",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/mx.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Afghanistan",
          "code": "+93",
          "iso": "AF",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/af.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Aland Islands",
          "code": "+358",
          "iso": "AX",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ax.svg",
          "mask": "(###)###-##-##"
        },
        {
          "name": "Albania",
          "code": "+355",
          "iso": "AL",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/al.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Algeria",
          "code": "+213",
          "iso": "DZ",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/dz.svg",
          "mask": "##-###-####"
        },
        {
          "name": "American Samoa",
          "code": "+1",
          "iso": "AS",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/as.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Andorra",
          "code": "+376",
          "iso": "AD",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ad.svg",
          "mask": "###-###"
        },
        {
          "name": "Angola",
          "code": "+244",
          "iso": "AO",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ao.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Antarctica",
          "code": "+672",
          "iso": "AQ",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/aq.svg",
          "mask": "###-###"
        },
        {
          "name": "Antigua and Barbuda",
          "code": "+1",
          "iso": "AG",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ag.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Argentina",
          "code": "+54",
          "iso": "AR",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ar.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Armenia",
          "code": "+374",
          "iso": "AM",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/am.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Australia",
          "code": "+61",
          "iso": "AU",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/au.svg",
          "mask": "#-####-####"
        },
        {
          "name": "Austria",
          "code": "+43",
          "iso": "AT",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/at.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Azerbaijan",
          "code": "+994",
          "iso": "AZ",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/az.svg",
          "mask": "##-###-##-##"
        },
        {
          "name": "Bahamas",
          "code": "+1",
          "iso": "BS",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/bs.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Bahrain",
          "code": "+973",
          "iso": "BH",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/bh.svg",
          "mask": "####-####"
        },
        {
          "name": "Bangladesh",
          "code": "+880",
          "iso": "BD",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/bd.svg",
          "mask": "####-######"
        },
        {
          "name": "Barbados",
          "code": "+1",
          "iso": "BB",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/bb.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Belarus",
          "code": "+375",
          "iso": "BY",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/by.svg",
          "mask": "(##)###-##-##"
        },
        {
          "name": "Belgium",
          "code": "+32",
          "iso": "BE",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/be.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Bermuda",
          "code": "+1",
          "iso": "BM",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/bm.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Bolivia",
          "code": "+591",
          "iso": "BO",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/bo.svg",
          "mask": "#-###-####"
        },
        {
          "name": "Bosnia and Herzegovina",
          "code": "+387",
          "iso": "BA",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ba.svg",
          "mask": ["##-####", "##-#####"]
        },
        {
          "name": "Botswana",
          "code": "+267",
          "iso": "BW",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/bw.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Brazil",
          "code": "+55",
          "iso": "BR",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/br.svg",
          "mask": "(##)####-####"
        },
        {
          "name": "British Indian Ocean Territory",
          "code": "+246",
          "iso": "IO",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/io.svg",
          "mask": "###-####"
        },
        {
          "name": "Brunei Darussalam",
          "code": "+673",
          "iso": "BN",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/bn.svg",
          "mask": "###-####"
        },
        {
          "name": "Bulgaria",
          "code": "+359",
          "iso": "BG",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/bg.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Burkina Faso",
          "code": "+226",
          "iso": "BF",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/bf.svg",
          "mask": "##-##-####"
        },
        {
          "name": "Burundi",
          "code": "+257",
          "iso": "BI",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/bi.svg",
          "mask": "##-##-####"
        },
        {
          "name": "Cambodia",
          "code": "+855",
          "iso": "KH",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/kh.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Cameroon",
          "code": "+237",
          "iso": "CM",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/cm.svg",
          "mask": "####-####"
        },
        {
          "name": "Canada",
          "code": "+1",
          "iso": "CA",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ca.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Cape Verde",
          "code": "+238",
          "iso": "CV",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/cv.svg",
          "mask": "(###)##-##"
        },
        {
          "name": "Cayman Islands",
          "code": "+1",
          "iso": "KY",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ky.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Central African Republic",
          "code": "+236",
          "iso": "CF",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/cf.svg",
          "mask": "##-##-####"
        },
        {
          "name": "Chad",
          "code": "+235",
          "iso": "TD",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/td.svg",
          "mask": "##-##-##-##"
        },
        {
          "name": "Chile",
          "code": "+56",
          "iso": "CL",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/cl.svg",
          "mask": "#-####-####"
        },
        {
          "name": "China",
          "code": "+86",
          "iso": "CN",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/cn.svg",
          "mask": "(###)####-###"
        },
        {
          "name": "Christmas Island",
          "code": "+61",
          "iso": "CX",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/cx.svg",
          "mask": "#-####-####"
        },
        {
          "name": "Cocos (Keeling) Islands",
          "code": "+61",
          "iso": "CC",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/cc.svg",
          "mask": "#-####-####"
        },
        {
          "name": "Colombia",
          "code": "+57",
          "iso": "CO",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/co.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Congo",
          "code": "+242",
          "iso": "CG",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/cg.svg",
          "mask": "##-#####"
        },
        {
          "name": "Costa Rica",
          "code": "+506",
          "iso": "CR",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/cr.svg",
          "mask": "####-####"
        },
        {
          "name": "Croatia",
          "code": "+385",
          "iso": "HR",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/hr.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Cuba",
          "code": "+53",
          "iso": "CU",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/cu.svg",
          "mask": "#-###-####"
        },
        {
          "name": "Cyprus",
          "code": "+357",
          "iso": "CY",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/cy.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Czech Republic",
          "code": "+420",
          "iso": "CZ",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/cz.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Democratic Republic of the Congo",
          "code": "+243",
          "iso": "CD",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/cd.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Denmark",
          "code": "+45",
          "iso": "DK",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/dk.svg",
          "mask": "##-##-##-##"
        },
        {
          "name": "Djibouti",
          "code": "+253",
          "iso": "DJ",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/dj.svg",
          "mask": "##-##-##-##"
        },
        {
          "name": "Dominica",
          "code": "+1",
          "iso": "DM",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/dm.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Dominican Republic",
          "code": "+1",
          "iso": "DO",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/do.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Ecuador",
          "code": "+593",
          "iso": "EC",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ec.svg",
          "mask": "#-###-####"
        },
        {
          "name": "Egypt",
          "code": "+20",
          "iso": "EG",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/eg.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "El Salvador",
          "code": "+503",
          "iso": "SV",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/sv.svg",
          "mask": "##-##-####"
        },
        {
          "name": "Equatorial Guinea",
          "code": "+240",
          "iso": "GQ",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/gq.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Eritrea",
          "code": "+291",
          "iso": "ER",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/er.svg",
          "mask": "#-###-###"
        },
        {
          "name": "Estonia",
          "code": "+372",
          "iso": "EE",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ee.svg",
          "mask": "###-####"
        },
        {
          "name": "Eswatini",
          "code": "+268",
          "iso": "SZ",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/sz.svg",
          "mask": "##-##-####"
        },
        {
          "name": "Ethiopia",
          "code": "+251",
          "iso": "ET",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/et.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Falkland Islands (Malvinas)",
          "code": "+500",
          "iso": "FK",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/fk.svg",
          "mask": "#####"
        },
        {
          "name": "Faroe Islands",
          "code": "+298",
          "iso": "FO",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/fo.svg",
          "mask": "###-###"
        },
        {
          "name": "Fiji",
          "code": "+679",
          "iso": "FJ",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/fj.svg",
          "mask": "##-#####"
        },
        {
          "name": "Finland",
          "code": "+358",
          "iso": "FI",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/fi.svg",
          "mask": "(###)###-##-##"
        },
        {
          "name": "French Guiana",
          "code": "+594",
          "iso": "GF",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/gf.svg",
          "mask": "#####-####"
        },
        {
          "name": "French Polynesia",
          "code": "+689",
          "iso": "PF",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/pf.svg",
          "mask": "##-##-##"
        },
        {
          "name": "Gabon",
          "code": "+241",
          "iso": "GA",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ga.svg",
          "mask": "#-##-##-##"
        },
        {
          "name": "Gambia",
          "code": "+220",
          "iso": "GM",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/gm.svg",
          "mask": "(###)##-##"
        },
        {
          "name": "Georgia",
          "code": "+995",
          "iso": "GE",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ge.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Ghana",
          "code": "+233",
          "iso": "GH",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/gh.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Gibraltar",
          "code": "+350",
          "iso": "GI",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/gi.svg",
          "mask": "###-#####"
        },
        {
          "name": "Greece",
          "code": "+30",
          "iso": "GR",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/gr.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Greenland",
          "code": "+299",
          "iso": "GL",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/gl.svg",
          "mask": "##-##-##"
        },
        {
          "name": "Guadeloupe",
          "code": "+590",
          "iso": "GP",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/gp.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Guatemala",
          "code": "+502",
          "iso": "GT",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/gt.svg",
          "mask": "#-###-####"
        },
        {
          "name": "Guernsey",
          "code": "+44",
          "iso": "GG",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/gg.svg",
          "mask": "(####)######"
        },
        {
          "name": "Guinea",
          "code": "+224",
          "iso": "GN",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/gn.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Haiti",
          "code": "+509",
          "iso": "HT",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ht.svg",
          "mask": "##-##-####"
        },
        {
          "name": "Honduras",
          "code": "+504",
          "iso": "HN",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/hn.svg",
          "mask": "####-####"
        },
        {
          "name": "Hong Kong",
          "code": "+852",
          "iso": "HK",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/hk.svg",
          "mask": "####-####"
        },
        {
          "name": "Hungary",
          "code": "+36",
          "iso": "HU",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/hu.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Iceland",
          "code": "+354",
          "iso": "IS",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/is.svg",
          "mask": "###-####"
        },
        {
          "name": "India",
          "code": "+91",
          "iso": "IN",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/in.svg",
          "mask": "(####)###-###"
        },
        {
          "name": "Indonesia",
          "code": "+62",
          "iso": "ID",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/id.svg",
          "mask": "##-###-##"
        },
        {
          "name": "Iran",
          "code": "+98",
          "iso": "IR",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ir.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Iraq",
          "code": "+924",
          "iso": "IQ",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/iq.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Ireland",
          "code": "+353",
          "iso": "IE",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ie.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Isle of Man",
          "code": "+44",
          "iso": "IM",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/im.svg",
          "mask": "(####)######"
        },
        {
          "name": "Israel",
          "code": "+972",
          "iso": "IL",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/il.svg",
          "mask": "#-###-####"
        },
        {
          "name": "Ivory Coast / Cote d'Ivoire",
          "code": "+225",
          "iso": "CI",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ci.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Jamaica",
          "code": "+1",
          "iso": "JM",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/jm.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Japan",
          "code": "+81",
          "iso": "JP",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/jp.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Jersey",
          "code": "+44",
          "iso": "JE",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/je.svg",
          "mask": "(####)####-######"
        },
        {
          "name": "Jordan",
          "code": "+962",
          "iso": "JO",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/jo.svg",
          "mask": "#-####-####"
        },
        {
          "name": "Kazakhstan",
          "code": "+77",
          "iso": "KZ",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/kz.svg",
          "mask": "(###)###-##-##",
        },
        {
          "name": "Kenya",
          "code": "+254",
          "iso": "KE",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ke.svg",
          "mask": "###-######"
        },
        {
          "name": "Korea, Republic of South Korea",
          "code": "+82",
          "iso": "KR",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/kr.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Kuwait",
          "code": "+965",
          "iso": "KW",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/kw.svg",
          "mask": "####-####"
        },
        {
          "name": "Kyrgyzstan",
          "code": "+996",
          "iso": "KG",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/kg.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Laos",
          "code": "+856",
          "iso": "LA",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/la.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Latvia",
          "code": "+371",
          "iso": "LV",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/lv.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Lesotho",
          "code": "+266",
          "iso": "LS",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ls.svg",
          "mask": "#-###-####"
        },
        {
          "name": "Liberia",
          "code": "+231",
          "iso": "LR",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/lr.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Libya",
          "code": "+218",
          "iso": "LY",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ly.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Liechtenstein",
          "code": "+423",
          "iso": "LI",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/li.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Lithuania",
          "code": "+370",
          "iso": "LT",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/lt.svg",
          "mask": "(###)##-###"
        },
        {
          "name": "Luxembourg",
          "code": "+352",
          "iso": "LU",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/lu.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Macau",
          "code": "+853",
          "iso": "MO",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/mo.svg",
          "mask": "####-####"
        },
        {
          "name": "Madagascar",
          "code": "+261",
          "iso": "MG",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/mg.svg",
          "mask": "##-##-#####"
        },
        {
          "name": "Malawi",
          "code": "+265",
          "iso": "MW",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/mw.svg",
          "mask": "#-####-####"
        },
        {
          "name": "Malaysia",
          "code": "+60",
          "iso": "MY",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/my.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Maldives",
          "code": "+960",
          "iso": "MV",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/mv.svg",
          "mask": "###-####"
        },
        {
          "name": "Mali",
          "code": "+223",
          "iso": "ML",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ml.svg",
          "mask": "##-##-####"
        },
        {
          "name": "Malta",
          "code": "+356",
          "iso": "MT",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/mt.svg",
          "mask": "####-####"
        },
        {
          "name": "Marshall Islands",
          "code": "+692",
          "iso": "MH",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/mh.svg",
          "mask": "###-####"
        },
        {
          "name": "Mauritania",
          "code": "+222",
          "iso": "MR",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/mr.svg",
          "mask": "##-##-####"
        },
        {
          "name": "Moldova",
          "code": "+373",
          "iso": "MD",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/md.svg",
          "mask": "####-####"
        },
        {
          "name": "Monaco",
          "code": "+377",
          "iso": "MC",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/mc.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Mongolia",
          "code": "+976",
          "iso": "MN",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/mn.svg",
          "mask": "##-##-####"
        },
        {
          "name": "Montenegro",
          "code": "+382",
          "iso": "ME",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/me.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Morocco",
          "code": "+212",
          "iso": "MA",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ma.svg",
          "mask": "##-####-###"
        },
        {
          "name": "Mozambique",
          "code": "+258",
          "iso": "MZ",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/mz.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Myanmar",
          "code": "+95",
          "iso": "MM",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/mm.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Namibia",
          "code": "+224",
          "iso": "NA",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/na.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Nauru",
          "code": "+674",
          "iso": "NR",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/nr.svg",
          "mask": "###-####"
        },
        {
          "name": "Nepal",
          "code": "+977",
          "iso": "NP",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/np.svg",
          "mask": "##-###-###"
        },
        {
          "name": "New Caledonia",
          "code": "+687",
          "iso": "NC",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/nc.svg",
          "mask": "##-####"
        },
        {
          "name": "New Zealand",
          "code": "+24",
          "iso": "NZ",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/nz.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Nicaragua",
          "code": "+505",
          "iso": "NI",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ni.svg",
          "mask": "####-####"
        },
        {
          "name": "Niger",
          "code": "+227",
          "iso": "NE",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ne.svg",
          "mask": "##-##-####"
        },
        {
          "name": "Nigeria",
          "code": "+234",
          "iso": "NG",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ng.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "North Macedonia",
          "code": "+389",
          "iso": "MK",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/mk.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Northern Mariana Islands",
          "code": "+1",
          "iso": "MP",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/mp.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Norway",
          "code": "+47",
          "iso": "NO",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/no.svg",
          "mask": "(###)##-###"
        },
        {
          "name": "Oman",
          "code": "+968",
          "iso": "OM",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/om.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Pakistan",
          "code": "+92",
          "iso": "PK",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/pk.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Palestine",
          "code": "+970",
          "iso": "PS",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ps.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Panama",
          "code": "+507",
          "iso": "PA",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/pa.svg",
          "mask": "###-####"
        },
        {
          "name": "Papua New Guinea",
          "code": "+675",
          "iso": "PG",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/pg.svg",
          "mask": "(###)##-###"
        },
        {
          "name": "Paraguay",
          "code": "+595",
          "iso": "PY",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/py.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Peru",
          "code": "+51",
          "iso": "PE",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/pe.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Philippines",
          "code": "+63",
          "iso": "PH",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ph.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Pitcairn",
          "code": "+870",
          "iso": "PN",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/pn.svg",
          "mask": "###-###-###"
        },
        {
          "name": "Poland",
          "code": "+48",
          "iso": "PL",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/pl.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Portugal",
          "code": "+351",
          "iso": "PT",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/pt.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Puerto Rico",
          "code": "+1",
          "iso": "PR",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/pr.svg",
          "mask": "(###) ### ####"
        },
        {
          "name": "Qatar",
          "code": "+974",
          "iso": "QA",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/qa.svg",
          "mask": "####-####"
        },
        {
          "name": "Romania",
          "code": "+40",
          "iso": "RO",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ro.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Russia",
          "code": "+7",
          "iso": "RU",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ru.svg",
          "mask": "(###)###-##-##"
        },
        {
          "name": "Saint Pierre and Miquelon",
          "code": "+508",
          "iso": "PM",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/pm.svg",
          "mask": "##-####"
        },
        {
          "name": "Saint Vincent and the Grenadines",
          "code": "+1",
          "iso": "VC",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/vc.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Samoa",
          "code": "+685",
          "iso": "WS",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ws.svg",
          "mask": "##-####"
        },
        {
          "name": "San Marino",
          "code": "+378",
          "iso": "SM",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/sm.svg",
          "mask": "####-######"
        },
        {
          "name": "Saudi Arabia",
          "code": "+966",
          "iso": "SA",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/sa.svg",
          "mask": "#-###-####",
        },
        {
          "name": "Senegal",
          "code": "+221",
          "iso": "SN",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/sn.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Serbia",
          "code": "+381",
          "iso": "RS",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/rs.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Seychelles",
          "code": "+248",
          "iso": "SC",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/sc.svg",
          "mask": "#-###-###"
        },
        {
          "name": "Sierra Leone",
          "code": "+232",
          "iso": "SL",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/sl.svg",
          "mask": "##-######"
        },
        {
          "name": "Singapore",
          "code": "+65",
          "iso": "SG",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/sg.svg",
          "mask": "####-####"
        },
        {
          "name": "Sint Maarten",
          "code": "+1",
          "iso": "SX",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/sx.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Slovakia",
          "code": "+421",
          "iso": "SK",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/sk.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Slovenia",
          "code": "+386",
          "iso": "SI",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/si.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Solomon Islands",
          "code": "+677",
          "iso": "SB",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/sb.svg",
          "mask": "###-####"
        },
        {
          "name": "South Africa",
          "code": "+27",
          "iso": "ZA",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/za.svg",
          "mask": "##-###-####"
        },
        {
          "name": "South Georgia and the South Sandwich Islands",
          "code": "+500",
          "iso": "GS",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/gs.svg",
          "mask": "#####"
        },
        {
          "name": "South Sudan",
          "code": "+211",
          "iso": "SS",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ss.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Sri Lanka",
          "code": "+94",
          "iso": "LK",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/lk.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Sudan",
          "code": "+249",
          "iso": "SD",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/sd.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Sweden",
          "code": "+46",
          "iso": "SE",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/se.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Switzerland",
          "code": "+41",
          "iso": "CH",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ch.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Syrian Arab Republic",
          "code": "+963",
          "iso": "SY",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/sy.svg",
          "mask": "##-####-###"
        },
        {
          "name": "Taiwan",
          "code": "+886",
          "iso": "TW",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/tw.svg",
          "mask": "#-####-####"
        },
        {
          "name": "Tajikistan",
          "code": "+992",
          "iso": "TJ",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/tj.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Tanzania, United Republic of Tanzania",
          "code": "+255",
          "iso": "TZ",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/tz.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Thailand",
          "code": "+66",
          "iso": "TH",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/th.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Togo",
          "code": "+228",
          "iso": "TG",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/tg.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Trinidad and Tobago",
          "code": "+1",
          "iso": "TT",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/tt.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Tunisia",
          "code": "+216",
          "iso": "TN",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/tn.svg",
          "mask": "##-###-###"
        },
        {
          "name": "Turkey",
          "code": "+90",
          "iso": "TR",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/tr.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Turkmenistan",
          "code": "+993",
          "iso": "TM",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/tm.svg",
          "mask": "#-###-####"
        },
        {
          "name": "Turks and Caicos Islands",
          "code": "+1",
          "iso": "TC",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/tc.svg",
          "mask": "(###)###-###"
        },
        {
          "name": "Ukraine",
          "code": "+380",
          "iso": "UA",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ua.svg",
          "mask": "(##)###-##-##"
        },
        {
          "name": "United Arab Emirates",
          "code": "+971",
          "iso": "AE",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ae.svg",
          "mask": "#-###-####"
        },
        {
          "name": "Uruguay",
          "code": "+598",
          "iso": "UY",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/uy.svg",
          "mask": "#-###-##-##"
        },
        {
          "name": "Uzbekistan",
          "code": "+998",
          "iso": "UZ",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/uz.svg",
          "mask": "##-###-####"
        },
        {
          "name": "Venezuela, Bolivarian Republic of Venezuela",
          "code": "+58",
          "iso": "VE",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/ve.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Vietnam",
          "code": "+84",
          "iso": "VN",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/vn.svg",
          "mask": "(###)####-###"
        },
        {
          "name": "Virgin Islands, British",
          "code": "+1",
          "iso": "VG",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/vg.svg",
          "mask": "(###)###-####"
        },
        {
          "name": "Virgin Islands, U.S.",
          "code": "+1",
          "iso": "VI",
          "flag": "https://cdn.kcak11.com/CountryFlags/countries/vi.svg",
          "mask": "(###)###-####"
        }
  ]
})

export const mutations = {
  setLoader(state, bool) {
    state.loader = bool
  },
}

export const actions = {
  addSubscriber({state, commit}){
    commit('setLoader', true)
    const sub = {
      campaignId: 10,
      product1_id: 67,
      product1_qty: 1,
      url: localStorage.httpReferer ? localStorage.httpReferer : window.location.href
    }
    const billing = JSON.parse(localStorage.billing)
    const payment = JSON.parse(localStorage.payment)
    const phone = billing.phone.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '')
    this.$axios.post(`${api}/konnektive?endpoint=/landers/clicks/import`, {
      headers: {'Content-Type': 'application/json'},
      params: {
        campaignId: sub.campaignId,
        pageType: "checkoutPage",
        requestUri: sub.url,
        httpReferer: sub.url
      }
    })
      .then(lander => {
        if (lander.data.result === 'SUCCESS') {
          sub.sessionId = lander.data.message.sessionId
          const data = {
            campaignId: sub.campaignId,
            pageType: 'leadPage',
            billShipSame: 1,
            firstName: billing.firstName,
            lastName: billing.lastName,
            emailAddress: billing.email,
            phoneNumber: phone,
            address1: 'undefined',
            city: 'test',
            country: state.countries[billing.country].iso,
            postalCode: '90210',
            state: 'test',
            sessionId: lander.data.message.sessionId
          }
          if(localStorage.affId)        data.affId   = localStorage.affId
          if(localStorage.utm_source)   data.custom1 = localStorage.utm_source
          if(localStorage.utm_medium)   data.custom2 = localStorage.utm_medium
          if(localStorage.utm_campaign) data.custom3 = localStorage.utm_campaign
          if(localStorage.utm_content)  data.custom4 = localStorage.utm_content
          if(localStorage.utm_term)     data.custom5 = localStorage.utm_term
          return this.$axios.post(`${api}/konnektive?endpoint=/leads/import`, { headers: {'Content-Type': 'application/json'}, params: data })
        } else if(lander.data.result === "ERROR"){
          throw lander.data.message
        }
      })
      .then(lead => {
        sub.orderId = lead.data.message.orderId

        const subImportData = {
          orderId: sub.orderId,
          sessionId: sub.sessionId,
          campaignId: sub.campaignId,
          cardNumber: payment.cardNumber,
          cardMonth: payment.cardMonth,
          cardYear: payment.cardYear,
          cardSecurityCode: payment.cardSecurityCode,
          paySource: 'CREDITCARD',
          product1_id: sub.product1_id,
          product1_qty: sub.product1_qty,
          httpReferer: sub.url
        }

        return this.$axios.post(`${api}/konnektive?endpoint=/order/import`, {
          headers: {'Content-Type': 'application/json'},
          params: subImportData
        })
      })
      .then(response => {
        if(response.data.result === "SUCCESS"){
          EF.conversion({
            offer_id: 175,
          })
          console.log('Subscription SUCCESS! Thank You for a submitting.');
          window.location.href = 'https://geekex.com/';
        } else if(response.data.result === "ERROR"){
          console.log('subscription ERROR');
          throw response.data.message
        } else {
          console.log('subscription ELSE');
          throw response.data.message
        }
      })
      .catch(err => {
        console.dir(err);
        alert('Error! '+err)
      })
      .finally(() => {
        commit('setLoader', false)
        localStorage.removeItem('billing')
        localStorage.removeItem('payment')
      })
  }
}

export const getters = {
  getLoader: state => state.loader,
  getCountries: state => state.countries,
}
