module.exports = {
  key: "react-components",
  name: "React Components",
  fetchPackageJson: true,
  description:
    "The building blocks of React apps. These are components that you can use in your own apps.",
  aka: ["React Component Libraries", "React UI Frameworks"],

  tags: [
    {
      name: "dataviz",
      description: "Charts, graphs, or other infographics for displaying data.",
      aka: ["datavis", "data visualization", "infographics", "charts", "graphs"]
    },
    {
      name: "calendar",
      description: "Allows the user to select a date or date range.",
      aka: ["date picker"]
    },
    {
      name: "grid",
      aka: ["layout"]
    },
    {
      name: "set",
      description:
        "A few components with a similar use-case. For instance color pickers or form components."
    },
    {
      name: "toolkit",
      description:
        "A large set of components in the same style that you can use to quickly bootstrap your project.",
      aka: ["library", "framework"]
    },
    {
      name: "abandoned",
      description:
        "The project has been discontinued / abandoned by the creators",
      aka: ["discontinued"]
    },
    {
      name: "native",
      description:
        "Components for react native - to be used in native iOS/Android apps (not the web)"
    },
    {
      name: "text editor",
      description: "Component for writing / editing rich text in the browser"
    }
  ],

  /**
   * TODO: see how these components are styled and add tags for that. Some people may not want to use
   * components that require a change to their webpack config.
   */
  projects: [
    {
      url: "https://github.com/mlaursen/react-md",
      tags: ["toolkit", "material design"]
    },
    {
      url: "https://github.com/react-toolbox/react-toolbox",
      tags: ["toolkit", "material design"]
    },
    { url: "https://github.com/fritz-c/react-sortable-tree", tags: ["list"] },
    { url: "https://github.com/andreasur/react-font-picker", tags: ["picker"] },
    { url: "https://github.com/jxnblk/reflexbox", tags: ["grid"] },
    { url: "https://github.com/chrvadala/react-svg-pan-zoom" },
    { url: "https://github.com/jacted/lead-form" },
    { url: "https://github.com/selvagsz/react-async-button", tags: ["button"] },
    { url: "https://github.com/zackargyle/react-bash" },
    { url: "https://github.com/kaivi/riek", tags: ["set", "form"] },
    { url: "https://github.com/uber/react-vis", tags: ["set", "dataviz"] },
    { url: "https://github.com/airbnb/react-dates", tags: ["calendar"] },
    {
      url: "https://github.com/clauderic/react-infinite-calendar",
      tags: ["calendar"]
    },
    { url: "https://github.com/troch/react-timer-hoc" },
    { url: "https://github.com/erikras/redux-form", tags: ["set", "form"] },
    { url: "https://github.com/clauderic/react-sortable-hoc", tags: ["list"] },
    {
      url: "https://github.com/mironov/react-redux-loading-bar",
      tags: ["spinner"]
    },
    { url: "https://github.com/sevenleaps/chat-template", tags: ["chat"] },
    { url: "https://github.com/alex3165/react-mapbox-gl", tags: ["map"] },
    { url: "https://github.com/mzabriskie/react-draggable" },
    {
      url: "https://github.com/patientslikeme/react-calendar-heatmap",
      tags: ["calendar"]
    },
    { url: "https://github.com/bvaughn/react-virtualized", tags: ["list"] },
    { url: "https://github.com/maisano/react-router-transition", tags: [] },
    { url: "https://github.com/chenglou/react-motion", tags: ["animation"] },
    { url: "https://github.com/dantrain/react-stonecutter", tags: ["grid"] },
    { url: "https://github.com/necolas/react-native-web", tags: ["toolkit"] },
    { url: "https://github.com/moarwick/react-mt-svg-lines" },
    { url: "https://github.com/facebook/draft-js", tags: ["text editor"] },
    {
      url: "https://github.com/draft-js-plugins/draft-js-plugins",
      tags: ["text editor"]
    },
    { url: "https://github.com/sstur/react-rte", tags: ["text editor"] },
    { url: "https://github.com/malte-wessel/react-matchmedia-connect" },
    {
      url: "https://github.com/seejamescode/draft-js-gutter",
      tags: ["text editor"]
    },
    { url: "https://github.com/bokuweb/react-balloon" },
    { url: "https://github.com/KtorZ/elm-react-component" },
    { url: "https://github.com/fatiherikli/react-designer", tags: ["set"] },
    {
      url: "https://github.com/joshwcomeau/react-flip-move",
      tags: ["animation"]
    },
    { url: "https://github.com/cameronbourke/react-cardstack" },
    { url: "https://github.com/conorhastings/react-emoji-react" },
    { url: "https://github.com/bokuweb/react-sortable-pane" },
    { url: "https://github.com/ccm-innovation/react-initicon", tags: ["icon"] },
    { url: "https://github.com/nathanstitt/dayz", tags: ["calendar"] },
    { url: "https://github.com/davidkpiano/react-redux-form", tags: ["form"] },
    { url: "https://github.com/conorhastings/react-syntax-highlighter" },
    { url: "https://github.com/abhijeetNmishra/react-password-strength-meter" },
    {
      url: "https://github.com/mozilla-services/react-jsonschema-form",
      tags: ["set"]
    },
    { url: "https://github.com/dogfessional/react-swipeable" },
    { url: "https://github.com/bokuweb/react-rnd" },
    { url: "https://github.com/burakcan/react-snowstorm" },
    { url: "https://github.com/clari/react-ios-switch", tags: ["button"] },
    { url: "https://github.com/wangzuo/input-moment" },
    { url: "https://github.com/neptunian/react-photo-gallery" },
    { url: "https://github.com/bokuweb/react-motion-menu", tags: ["menu"] },
    { url: "https://github.com/romainberger/react-portal-tooltip" },
    {
      url: "https://github.com/alexkuz/react-input-enhancements",
      tags: ["set"]
    },
    { url: "https://github.com/alexkuz/cake-chart", tags: ["dataviz"] },
    {
      url: "https://github.com/BelkaLab/react-yearly-calendar",
      tags: ["calendar"]
    },
    { url: "https://github.com/FormidableLabs/victory", tags: ["dataviz"] },
    { url: "https://github.com/dustingetz/react-chatview", tags: ["chat"] },
    { url: "https://github.com/arsich/react-redux-cats" },
    { url: "https://github.com/nosovsh/fifteen", tags: ["game"] },
    { url: "https://github.com/intljusticemission/react-big-calendar" },
    { url: "https://github.com/Swizec/space-invaders", tags: ["game"] },
    { url: "https://github.com/mderrick/react-html5video" },
    { url: "https://github.com/gorangajic/react-svg-morph", tags: ["set"] },
    { url: "https://github.com/alexcurtis/react-treebeard" },
    { url: "https://github.com/furqanZafar/react-selectize", tags: ["set"] },
    { url: "https://github.com/conorhastings/react-thermometer" },
    { url: "https://github.com/luqin/react-icheck" },
    { url: "https://github.com/orgsync/react-list", tags: ["list"] },
    { url: "https://github.com/socialtables/react-user-tour" },
    { url: "https://github.com/tomkp/react-split-pane" },
    { url: "https://github.com/nkbt/react-collapse" },
    { url: "https://github.com/jstejada/react-typist" },
    {
      url: "https://github.com/twitter-fabric/velocity-react",
      tags: ["animation"]
    },
    { url: "https://github.com/James-Oldfield/react-rpg" },
    { url: "https://github.com/gorangajic/react-icons", tags: ["set"] },
    {
      url: "https://github.com/tgecho/react-prosemirror",
      tags: ["text editor"]
    },
    { url: "https://github.com/formly-js/react-formly", tags: ["form"] },
    { url: "https://github.com/jossmac/react-images", tags: ["grid"] },
    { url: "https://github.com/sanniassin/react-input-mask", tags: ["input"] },
    { url: "https://github.com/saulhoward/react-evil-icons", tags: ["icon"] },
    { url: "https://github.com/IBM-Bluemix/election-insights" },
    {
      url: "https://github.com/alanrsoares/redux-game-of-life",
      tags: ["game"]
    },
    { url: "https://github.com/andyyou/react-coverflow" },
    {
      url: "https://github.com/peterKaleta/react-token-autocomplete",
      tags: ["autocomplete"]
    },
    { url: "https://github.com/whoisandy/react-rangeslider", tags: ["slider"] },
    { url: "https://github.com/andrepolischuk/react-rotation" },
    { url: "https://github.com/daviferreira/react-sanfona" },
    {
      url: "https://github.com/casesandberg/react-color",
      tags: ["set", "color", "picker"]
    },
    { url: "https://github.com/jquense/react-formal", tags: ["set", "form"] },
    { url: "https://github.com/KyleAMathews/react-spinkit", tags: ["spinner"] },
    { url: "https://github.com/gre/gl-react", tags: ["3d"] },
    { url: "https://github.com/andrewhathaway/Winterfell", tags: ["form"] },
    { url: "https://github.com/gilbarbara/react-joyride" },
    { url: "https://github.com/nkbt/react-copy-to-clipboard" },
    { url: "https://github.com/plouc/react-svg-buttons", tags: ["button"] },
    { url: "https://github.com/borisyankov/react-sparklines" },
    { url: "https://github.com/nikgraf/belle", tags: ["toolkit"] },
    {
      url: "https://github.com/adazzle/react-data-grid",
      tags: ["grid", "set"]
    },
    { url: "https://github.com/rsamec/react-pathjs-chart", tags: ["dataviz"] },
    { url: "https://github.com/nsisodiya/react-json-viewer", tags: ["icon"] },
    {
      url: "https://github.com/bharani91/react-select-popover",
      tags: ["autocomplete"]
    },
    {
      url: "https://github.com/mxstbr/sharingbuttons.io",
      tags: ["set", "button"]
    },
    {
      url: "https://github.com/AllenFang/react-bootstrap-table",
      tags: ["list"]
    },
    { url: "https://github.com/dreyescat/react-rating" },
    { url: "https://github.com/pqx/react-ui-tree" },
    { url: "https://github.com/wangzuo/react-progress-label" },
    { url: "https://github.com/negomi/react-burger-menu", tags: ["menu"] },
    {
      url: "https://github.com/wangzuo/react-input-color",
      tags: ["color", "picker"]
    },
    { url: "https://github.com/malte-wessel/react-custom-scrollbars" },
    {
      url: "https://github.com/wangzuo/react-medium-editor",
      tags: ["text editor"]
    },
    { url: "https://github.com/k4wo/react-notify", tags: ["notification"] },
    { url: "https://github.com/georgeOsdDev/react-draggable-tab" },
    { url: "https://github.com/arqex/react-json-table", tags: ["list"] },
    {
      url: "https://github.com/mathieudutour/react-progress-button",
      tags: ["button"]
    },
    {
      url: "https://github.com/Lapple/react-transitive-number",
      tags: ["animation"]
    },
    {
      url: "https://github.com/Lapple/react-json-inspector",
      tags: ["devtool"]
    },
    { url: "https://github.com/DropsOfSerenity/react-avatar-cropper" },
    {
      url: "https://github.com/RakanNimer/react-google-charts",
      tags: ["dataviz"]
    },
    {
      url: "https://github.com/LevInteractive/react-serial-forms",
      tags: ["form"]
    },
    { url: "https://github.com/effektif/react-mentions" },
    { url: "https://github.com/istarkov/google-map-react", tags: ["map"] },
    { url: "https://github.com/chrisui/react-hotkeys" },
    { url: "https://github.com/jakubzloczewski/react-steps" },
    { url: "https://github.com/whoisandy/react-blocks", tags: ["grid"] },
    {
      url: "https://github.com/jxnblk/react-fitter-happier-text",
      tags: ["text"]
    },
    { url: "https://github.com/jxnblk/rgx", tags: ["grid"] },
    { url: "https://github.com/xudafeng/autoresponsive-react", tags: ["grid"] },
    { url: "https://github.com/enkidevs/react-search-input", tags: ["search"] },
    {
      url: "https://github.com/FormidableLabs/component-playground",
      tags: ["devtool"]
    },
    { url: "https://github.com/jxnblk/react-geomicons", tags: ["icon"] },
    { url: "https://github.com/roadmanfong/react-cropper" },
    {
      url: "https://github.com/Evo-Forge/Essence",
      tags: ["toolkit", "material design", "abandoned"]
    },
    {
      url: "https://github.com/felixrieseberg/React-Spreadsheet-Component",
      tags: ["spreadsheet"]
    },
    {
      url: "https://github.com/javierbyte/react-number-easing",
      tags: ["animation"]
    },
    { url: "https://github.com/zenoamaro/react-quill", tags: ["text editor"] },
    {
      url: "https://github.com/igorprado/react-notification-system",
      tags: ["notification"]
    },
    { url: "https://github.com/prakhar1989/react-tags" },
    { url: "https://github.com/liferay/alloy-editor", tags: ["text editor"] },
    { url: "https://github.com/brigade/react-waypoint" },
    { url: "https://github.com/felixrieseberg/React-Dropzone-Component" },
    { url: "https://github.com/rexxars/react-markdown" },
    {
      url: "https://github.com/JedWatson/react-codemirror",
      tags: ["text editor"]
    },
    { url: "https://github.com/react-dnd/react-dnd" },
    {
      url: "https://github.com/developerdizzle/react-virtual-list",
      tags: ["list"]
    },
    { url: "https://github.com/javierbyte/react-textgradient", tags: ["text"] },
    {
      url: "https://github.com/davidguttman/react-pivot",
      tags: ["spreadsheet"]
    },
    { url: "https://github.com/andreypopp/react-fa", tags: ["icon"] },
    { url: "https://github.com/tajo/react-portal" },
    { url: "https://github.com/gcanti/tcomb-form-native", tags: ["form"] },
    { url: "https://github.com/corymsmith/react-native-icons", tags: ["icon"] },
    { url: "https://github.com/gilbox/react-track" },
    { url: "https://github.com/insin/react-maskedinput" },
    { url: "https://github.com/react-component/tooltip" },
    { url: "https://github.com/yuanyan/halogen", tags: ["spinner"] },
    { url: "https://github.com/oliviertassinari/react-swipeable-views" },
    { url: "https://github.com/FormidableLabs/nuka-carousel" },
    {
      url: "https://github.com/jrm2k6/react-markdown-editor",
      tags: ["text editor"]
    },
    {
      url: "https://github.com/brigade/react-simple-pie-chart",
      tags: ["dataviz"]
    },
    {
      url: "https://github.com/moroshko/react-autosuggest",
      tags: ["autocomplete"]
    },
    { url: "https://github.com/flipboard/react-canvas", tags: ["graphics"] },
    { url: "https://github.com/MicheleBertoli/react-gmaps", tags: ["map"] },
    { url: "https://github.com/insin/react-auto-form", tags: ["form"] },
    {
      url: "https://github.com/skratchdot/react-bootstrap-daterangepicker",
      tags: ["calendar"]
    },
    {
      url: "https://github.com/gfazioli/react-switch-button",
      tags: ["button"]
    },
    { url: "https://github.com/KyleAMathews/react-headroom" },
    {
      url: "https://github.com/codesuki/react-d3-components",
      tags: ["dataviz"]
    },
    { url: "https://github.com/javierbyte/react-blur" },
    { url: "https://github.com/Sitebase/react-avatar" },
    { url: "https://github.com/react-component/menu", tags: ["menu"] },
    {
      url: "https://github.com/Hacker0x01/react-datepicker",
      tags: ["calendar"]
    },
    { url: "https://github.com/marcio/react-skylight" },
    { url: "https://github.com/react-component/form", tags: ["form"] },
    { url: "https://github.com/ggordan/react-infinite-grid", tags: ["grid"] },
    { url: "https://github.com/facebook/fixed-data-table", tags: ["list"] },
    { url: "https://github.com/contra/react-responsive", tags: ["layout"] },
    { url: "https://github.com/wmira/react-sidenav", tags: ["layout"] },
    { url: "https://github.com/reactjs/react-chartjs", tags: ["dataviz"] },
    { url: "https://github.com/mozmorris/react-webcam" },
    { url: "https://github.com/STRML/react-resizable" },
    { url: "https://github.com/gianu/react-fittext", tags: ["text"] },
    { url: "https://github.com/fraserxu/react-dropdown", tags: ["dropdown"] },
    {
      url: "https://github.com/brigand/react-zeroclipboard",
      tags: ["wrapper"]
    },
    { url: "https://github.com/nmn/react-timeago" },
    { url: "https://github.com/STRML/react-grid-layout", tags: ["grid"] },
    { url: "https://github.com/gpbl/react-day-picker", tags: ["calendar"] },
    { url: "https://github.com/akiran/react-highlight", tags: ["text"] },
    { url: "https://github.com/akiran/react-slick" },
    { url: "https://github.com/olahol/react-tagsinput" },
    { url: "https://github.com/svenanders/react-breadcrumbs" },
    { url: "https://github.com/Srdjan/react-multistep", tags: ["form"] },
    { url: "https://github.com/palantir/blueprint", tags: ["toolkit"] }, // https://www.reddit.com/r/reactjs/comments/6n8pm4/anyone_use_blueprintjs_here_palantirs_react_based/
    {
      url: "https://github.com/react-bootstrap/react-bootstrap",
      tags: ["toolkit"]
    },
    { url: "https://github.com/reactstrap/reactstrap", tags: ["toolkit"] },
    {
      url: "https://github.com/callemall/material-ui",
      tags: ["toolkit", "material design"]
    },
    { url: "https://github.com/grommet/grommet", tags: ["toolkit"] },
    { url: "https://github.com/tomchentw/react-google-maps", tags: ["map"] },
    { url: "https://github.com/gabrielbull/react-desktop", tags: ["toolkit"] },
    { url: "https://github.com/leecade/react-native-swiper", tags: ["native"] },
    {
      url: "https://github.com/FaridSafi/react-native-gifted-chat",
      tags: ["native"]
    },
    { url: "https://github.com/GeekyAnts/NativeBase", tags: ["native"] },
    { url: "https://github.com/elementalui/elemental", tags: ["toolkit"] },
    { url: "https://github.com/ianstormtaylor/slate", tags: ["text editor"] },
    {
      url: "https://github.com/WhitestormJS/whs.js",
      tags: ["toolkit", "3d", "game"]
    }
  ]
};
