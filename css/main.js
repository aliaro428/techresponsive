import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,600,700,300,800)',
  // ************************
*******Typography******
*************************
  'body': {
    'background': '#fff',
    'fontFamily': ''Open Sans', sans-serif',
    'color': '#4e4e4e',
    'lineHeight': [{ 'unit': 'px', 'value': 22 }]
  },
  'h1': {
    'fontWeight': '600',
    'fontFamily': ''Open Sans', sans-serif',
    'color': '#4e4e4e'
  },
  'h2': {
    'fontWeight': '600',
    'fontFamily': ''Open Sans', sans-serif',
    'color': '#4e4e4e'
  },
  'h3': {
    'fontWeight': '600',
    'fontFamily': ''Open Sans', sans-serif',
    'color': '#4e4e4e'
  },
  'h4': {
    'fontWeight': '600',
    'fontFamily': ''Open Sans', sans-serif',
    'color': '#4e4e4e'
  },
  'h5': {
    'fontWeight': '600',
    'fontFamily': ''Open Sans', sans-serif',
    'color': '#4e4e4e'
  },
  'h6': {
    'fontWeight': '600',
    'fontFamily': ''Open Sans', sans-serif',
    'color': '#4e4e4e'
  },
  'h1': {
    'fontSize': [{ 'unit': 'px', 'value': 36 }]
  },
  'h2': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }]
  },
  'h3': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#787878',
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'h4': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'a': {
    'color': 'black',
    'WebkitTransition': 'color 300ms, background-color 300ms',
    'MozTransition': 'color 300ms, background-color 300ms',
    'OTransition': 'color 300ms, background-color 300ms',
    'transition': 'color 300ms, background-color 300ms'
  },
  'a:hover': {
    'color': '#d43133'
  },
  'a:focus': {
    'color': '#d43133'
  },
  'hr': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e5e5e5' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }]
  },
  'btn-primary': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 20 }],
    'color': '#fff',
    'borderRadius': '4px',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'btn-primary:hover': {
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btn-primary:focus': {
    'outline': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btn-transparent': {
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'background': 'transparent',
    'color': '#fff'
  },
  'btn-transparent:hover': {
    'borderColor': 'rgba(255, 255, 255, 0.5)'
  },
  'a:hover': {
    'color': '#111',
    'textDecoration': 'none',
    'outline': 'none'
  },
  'a:focus': {
    'color': '#111',
    'textDecoration': 'none',
    'outline': 'none'
  },
  'dropdown-menu': {
    'marginTop': [{ 'unit': 'px', 'value': -1 }],
    'minWidth': [{ 'unit': 'px', 'value': 180 }]
  },
  'center h2': {
    'fontSize': [{ 'unit': 'px', 'value': 36 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'media>pull-left': {
    'marginRight': [{ 'unit': 'px', 'value': 20 }]
  },
  'media>pull-right': {
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'body > section': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'center': {
    'textAlign': 'center',
    'paddingBottom': [{ 'unit': 'px', 'value': 55 }]
  },
  'scaleIn': {
    'WebkitAnimationName': 'scaleIn',
    'animationName': 'scaleIn'
  },
  'lead': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'fontWeight': '400'
  },
  'transparent-bg': {
    'backgroundColor': 'transparent !important',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  // ************************
*******Header******
*************************
  '#header search': {
    'display': 'inline-block'
  },
  'navbar>container navbar-brand': {
    'marginLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'top-bar': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'background': '#f3f3f3 none repeat scroll 0 0',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'lineHeight': [{ 'unit': 'px', 'value': 28 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  'top-number': {
    'color': '#fff'
  },
  'top-number p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'social': {
    'textAlign': 'right'
  },
  'social-share': {
    'display': 'inline-block',
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ulsocial-share li': {
    'display': 'inline-block'
  },
  'ulsocial-share li a': {
    'display': 'inline-block',
    'color': '#fff',
    'background': '#404040',
    'width': [{ 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'textAlign': 'center',
    'borderRadius': '2px'
  },
  'ulsocial-share li a:hover': {
    'background': '#c52d2f',
    'color': '#fff'
  },
  'search i': {
    'color': '#fff'
  },
  'inputsearch-form': {
    'background': 'transparent',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'width': [{ 'unit': 'px', 'value': 60 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    'color': '#FFF',
    'WebkitTransition': 'all 400ms',
    'MozTransition': 'all 400ms',
    'MsTransition': 'all 400ms',
    'OTransition': 'all 400ms',
    'transition': 'all 400ms'
  },
  'inputsearch-form::-webkit-input-placeholder': {
    'color': 'transparent'
  },
  'inputsearch-form:hover::-webkit-input-placeholder': {
    'color': '#fff'
  },
  'inputsearch-form:hover': {
    'width': [{ 'unit': 'px', 'value': 180 }]
  },
  'navbar-brand': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'navbar': {
    'borderRadius': '0',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'background': '#151515',
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar-nav': {
    'marginTop': [{ 'unit': 'px', 'value': 12 }]
  },
  'navbar-nav>li': {
    'paddingBottom': [{ 'unit': 'px', 'value': 5 }]
  },
  'navbar-inverse navbar-nav > li > a': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '3px',
    'color': '#fff',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'display': 'inline-block',
    'font': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'string', 'value': 'Robot' }]
  },
  'navbar-inverse navbar-nav > li > a:hover': {
    'backgroundColor': 'black',
    'color': '#fff'
  },
  'navbar-inverse': {
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'navbar-inverse navbar-brand': {
    'fontSize': [{ 'unit': 'px', 'value': 36 }],
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'color': '#fff'
  },
  'navbar-inverse navbar-nav > active > a': {
    'backgroundColor': '#c52d2f',
    'color': '#fff'
  },
  'navbar-inverse navbar-nav > active > a:hover': {
    'backgroundColor': '#c52d2f',
    'color': '#fff'
  },
  'navbar-inverse navbar-nav > active > a:focus': {
    'backgroundColor': '#c52d2f',
    'color': '#fff'
  },
  'navbar-inverse navbar-nav > open > a': {
    'backgroundColor': '#c52d2f',
    'color': '#fff'
  },
  'navbar-inverse navbar-nav > open > a:hover': {
    'backgroundColor': '#c52d2f',
    'color': '#fff'
  },
  'navbar-inverse navbar-nav > open > a:focus': {
    'backgroundColor': '#c52d2f',
    'color': '#fff'
  },
  'navbar-inverse navbar-nav dropdown-menu': {
    'backgroundColor': 'rgba(0,0,0,.85)',
    'WebkitBoxShadow': '0 3px 8px rgba(0, 0, 0, 0.125)',
    'MozBoxShadow': '0 3px 8px rgba(0, 0, 0, 0.125)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.125)' }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'borderTop': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '0',
    'left': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar-inverse navbar-nav dropdown-menu:before': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar-inverse navbar-nav dropdown-menu > li > a': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 15 }],
    'color': '#fff'
  },
  'navbar-inverse navbar-nav dropdown-menu > li:hover > a': {
    'backgroundColor': '#c52d2f',
    'color': '#fff'
  },
  'navbar-inverse navbar-nav dropdown-menu > li:focus > a': {
    'backgroundColor': '#c52d2f',
    'color': '#fff'
  },
  'navbar-inverse navbar-nav dropdown-menu > liactive > a': {
    'backgroundColor': '#c52d2f',
    'color': '#fff'
  },
  'navbar-inverse navbar-nav dropdown-menu > li:last-child > a': {
    'borderRadius': '0 0 3px 3px'
  },
  'navbar-inverse navbar-nav dropdown-menu > lidivider': {
    'backgroundColor': 'transparent'
  },
  'navbar-inverse navbar-collapse': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'navbar-inverse navbar-form': {
    'borderTop': [{ 'unit': 'px', 'value': 0 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  // ************************
*******Home Page******
*************************
  '#main-slider': {
    'position': 'relative'
  },
  'no-margin': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#main-slider carousel carousel-content': {
    'marginTop': [{ 'unit': 'px', 'value': 150 }]
  },
  '#main-slider carousel slide-margin': {
    'marginTop': [{ 'unit': 'px', 'value': 140 }]
  },
  '#main-slider carousel h2': {
    'color': '#fff'
  },
  '#main-slider carousel btn-slide': {
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 20 }],
    'background': '#c52d2f',
    'color': '#fff',
    'borderRadius': '4px',
    'marginTop': [{ 'unit': 'px', 'value': 25 }],
    'display': 'inline-block'
  },
  '#main-slider carousel slider-img': {
    'textAlign': 'right',
    'position': 'absolute'
  },
  '#main-slider carousel item': {
    'backgroundPosition': '50%',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'left': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }],
    'opacity': '0',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'display': 'block !important',
    'height': [{ 'unit': 'px', 'value': 730 }],
    'WebkitTransition': 'opacity ease-in-out 500ms',
    'MozTransition': 'opacity ease-in-out 500ms',
    'OTransition': 'opacity ease-in-out 500ms',
    'transition': 'opacity ease-in-out 500ms'
  },
  '#main-slider carousel item:first-child': {
    'top': [{ 'unit': 'string', 'value': 'auto' }],
    'position': 'relative'
  },
  '#main-slider carousel itemactive': {
    'opacity': '1',
    'WebkitTransition': 'opacity ease-in-out 500ms',
    'MozTransition': 'opacity ease-in-out 500ms',
    'OTransition': 'opacity ease-in-out 500ms',
    'transition': 'opacity ease-in-out 500ms',
    'zIndex': '1'
  },
  '#main-slider prev': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'backgroundColor': '#c52d2f',
    'color': '#fff',
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'px', 'value': -25 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'textAlign': 'center',
    'borderRadius': '4px',
    'zIndex': '5'
  },
  '#main-slider next': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'backgroundColor': '#c52d2f',
    'color': '#fff',
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'px', 'value': -25 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'textAlign': 'center',
    'borderRadius': '4px',
    'zIndex': '5'
  },
  '#main-slider prev:hover': {
    'backgroundColor': '#000'
  },
  '#main-slider next:hover': {
    'backgroundColor': '#000'
  },
  '#main-slider prev': {
    'left': [{ 'unit': 'px', 'value': 10 }]
  },
  '#main-slider next': {
    'right': [{ 'unit': 'px', 'value': 10 }]
  },
  '#main-slider carousel-indicators li': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#fff',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative'
  },
  '#main-slider carousel-indicators li:after': {
    'position': 'absolute',
    'content': '""',
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'borderRadius': '100%',
    'background': 'rgba(0, 0, 0, 0)',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFF' }],
    'left': [{ 'unit': 'px', 'value': -3 }],
    'top': [{ 'unit': 'px', 'value': -3 }]
  },
  '#main-slider carousel-indicators active': {
    'width': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'backgroundColor': '#c52d2f',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c52d2f' }],
    'position': 'relative'
  },
  '#main-slider carousel-indicators active:after': {
    'position': 'absolute',
    'content': '""',
    'width': [{ 'unit': 'px', 'value': 24 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'borderRadius': '100%',
    'background': '#c52d2f',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c52d2f' }],
    'left': [{ 'unit': 'px', 'value': -3 }],
    'top': [{ 'unit': 'px', 'value': -3 }]
  },
  '#main-slider active animationanimated-item-1': {
    'WebkitAnimation': 'fadeInUp 300ms linear 300ms both',
    'MozAnimation': 'fadeInUp 300ms linear 300ms both',
    'OAnimation': 'fadeInUp 300ms linear 300ms both',
    'MsAnimation': 'fadeInUp 300ms linear 300ms both',
    'animation': 'fadeInUp 300ms linear 300ms both'
  },
  '#main-slider active animationanimated-item-2': {
    'WebkitAnimation': 'fadeInUp 300ms linear 600ms both',
    'MozAnimation': 'fadeInUp 300ms linear 600ms both',
    'OAnimation': 'fadeInUp 300ms linear 600ms both',
    'MsAnimation': 'fadeInUp 300ms linear 600ms both',
    'animation': 'fadeInUp 300ms linear 600ms both'
  },
  '#main-slider active animationanimated-item-3': {
    'WebkitAnimation': 'fadeInUp 300ms linear 900ms both',
    'MozAnimation': 'fadeInUp 300ms linear 900ms both',
    'OAnimation': 'fadeInUp 300ms linear 900ms both',
    'MsAnimation': 'fadeInUp 300ms linear 900ms both',
    'animation': 'fadeInUp 300ms linear 900ms both'
  },
  '#main-slider active animationanimated-item-4': {
    'WebkitAnimation': 'fadeInUp 300ms linear 1200ms both',
    'MozAnimation': 'fadeInUp 300ms linear 1200ms both',
    'OAnimation': 'fadeInUp 300ms linear 1200ms both',
    'MsAnimation': 'fadeInUp 300ms linear 1200ms both',
    'animation': 'fadeInUp 300ms linear 1200ms both'
  },
  '#feature': {
    'background': '#f2f2f2',
    'paddingBottom': [{ 'unit': 'px', 'value': 40 }]
  },
  'features': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'feature-wrap': {
    'marginBottom': [{ 'unit': 'px', 'value': 35 }],
    'overflow': 'hidden'
  },
  'feature-wrap h2': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'feature-wrap pull-left': {
    'marginRight': [{ 'unit': 'px', 'value': 25 }]
  },
  'feature-wrap i': {
    'fontSize': [{ 'unit': 'px', 'value': 48 }],
    'height': [{ 'unit': 'px', 'value': 110 }],
    'width': [{ 'unit': 'px', 'value': 110 }],
    'margin': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }],
    'borderRadius': '100%',
    'lineHeight': [{ 'unit': 'px', 'value': 110 }],
    'textAlign': 'center',
    'background': '#ffffff',
    'color': '#c52d2f',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ffffff' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '#f2f2f2' }],
    'WebkitBoxShadow': 'inset 0 0 0 5px #f2f2f2',
    'WebkitTransition': '500ms',
    'MozTransition': '500ms',
    'OTransition': '500ms',
    'transition': '500ms',
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 25 }]
  },
  'feature-wrap i:hover': {
    'background': '#c52d2f',
    'color': '#fff',
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': '#c52d2f' }],
    'WebkitBoxShadow': 'inset 0 0 0 5px #c52d2f',
    'border': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c52d2f' }]
  },
  '#recent-works col-xs-12col-sm-4col-md-3': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#recent-works': {
    'paddingBottom': [{ 'unit': 'px', 'value': 70 }]
  },
  'recent-work-wrap': {
    'position': 'relative'
  },
  'recent-work-wrap img': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'recent-work-wrap recent-work-inner': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'background': 'transparent',
    'opacity': '.8',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderRadius': '0',
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'recent-work-wrap recent-work-inner h3': {
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'recent-work-wrap recent-work-inner h3 a': {
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'color': '#fff'
  },
  'recent-work-wrap overlay': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'opacity': '0',
    'borderRadius': '0',
    'background': '#c52d2f',
    'color': '#fff',
    'verticalAlign': 'middle',
    'WebkitTransition': 'opacity 500ms',
    'MozTransition': 'opacity 500ms',
    'OTransition': 'opacity 500ms',
    'transition': 'opacity 500ms',
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }]
  },
  'recent-work-wrap overlay preview': {
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 35 }],
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'borderRadius': '0',
    'background': 'transparent',
    'textAlign': 'center',
    'color': '#fff'
  },
  'recent-work-wrap:hover overlay': {
    'opacity': '1'
  },
  '#services': {
    'background': '#000 url(../images/services/bg_services.png)',
    'backgroundSize': 'cover'
  },
  '#services lead': {
    'color': '#fff'
  },
  '#services h2': {
    'color': '#fff'
  },
  'services-wrap': {
    'padding': [{ 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 30 }],
    'background': '#fff',
    'borderRadius': '4px',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }]
  },
  'services-wrap h3': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'services-wrap pull-left': {
    'marginRight': [{ 'unit': 'px', 'value': 20 }]
  },
  '#middle': {
    'background': '#f2f2f2'
  },
  'skill h2': {
    'marginBottom': [{ 'unit': 'px', 'value': 25 }]
  },
  'progress-wrap': {
    'position': 'relative'
  },
  'progress color1': {
    'background': '#2d7da4'
  },
  'progress color1 bar-width': {
    'background': '#2d7da4'
  },
  'progress color2': {
    'background': '#6aa42f'
  },
  'progress color2 bar-width': {
    'background': '#6aa42f'
  },
  'progress color3': {
    'background': '#ffcc33'
  },
  'progress color3 bar-width': {
    'background': '#ffcc33'
  },
  'progress color4': {
    'background': '#db3615'
  },
  'progress color4 bar-width': {
    'background': '#db3615'
  },
  'progress': {
    'height': [{ 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 15 }],
    'background': '#e6e6e6',
    'WebkitBoxShadow': 'none',
    'MozBoxShadow': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0',
    'overflow': 'visible',
    'textAlign': 'right'
  },
  'progress-bar': {
    'height': [{ 'unit': 'px', 'value': 15 }],
    'lineHeight': [{ 'unit': 'px', 'value': 15 }],
    'background': '#e6e6e6',
    'WebkitBoxShadow': 'none',
    'MozBoxShadow': 'none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'borderRadius': '0',
    'overflow': 'visible',
    'textAlign': 'right'
  },
  'progress': {
    'position': 'relative'
  },
  'progress bar-width': {
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': '700',
    'top': [{ 'unit': 'px', 'value': -30 }],
    'borderRadius': '2px',
    'marginLeft': [{ 'unit': 'px', 'value': -30 }]
  },
  'progress span': {
    'position': 'relative'
  },
  'progress span:before': {
    'content': '" "',
    'position': 'absolute',
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'borderWidth': '8px 5px',
    'borderStyle': 'solid',
    'bottom': [{ 'unit': 'px', 'value': -15 }],
    'right': [{ 'unit': 'px', 'value': 8 }]
  },
  'progress color1 span:before': {
    'borderColor': '#2d7da4 transparent transparent transparent'
  },
  'progress color2 span:before': {
    'borderColor': '#6aa42f transparent transparent transparent'
  },
  'progress color3 span:before': {
    'borderColor': '#ffcc33 transparent transparent transparent'
  },
  'progress color4 span:before': {
    'borderColor': '#db3615 transparent transparent transparent'
  },
  'accordion h2': {
    'marginBottom': [{ 'unit': 'px', 'value': 25 }]
  },
  'panel-default': {
    'borderColor': 'transparent'
  },
  'panel-default>panel-heading': {
    'backgroundColor': '#e6e6e6',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'panel': {
    'backgroundColor': '#e6e6e6',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'panel-default>panel-heading+panel-collapse panel-body': {
    'background': '#fff',
    'color': '#858586'
  },
  'panel-body': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }]
  },
  'panel-group panel+panel': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d9d9d9' }]
  },
  'panel-group panel': {
    'borderRadius': '0'
  },
  'panel-heading': {
    'borderRadius': '0'
  },
  'panel-title>a': {
    'color': '#4e4e4e'
  },
  'accordion-inner img': {
    'borderRadius': '4px'
  },
  'accordion-inner h4': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'panel-headingactive': {
    'background': '#1f1f20'
  },
  'panel-headingactive panel-title>a': {
    'color': '#fff'
  },
  'aaccordion-toggle i': {
    'width': [{ 'unit': 'px', 'value': 45 }],
    'lineHeight': [{ 'unit': 'px', 'value': 44 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'marginTop': [{ 'unit': 'px', 'value': -10 }],
    'textAlign': 'center',
    'marginRight': [{ 'unit': 'px', 'value': -15 }],
    'background': '#c9c9c9'
  },
  'panel-headingactive aaccordion-toggle i': {
    'background': '#c52d2f',
    'color': '#fff'
  },
  'panel-headingactive aaccordion-togglecollapsed i': {
    'background': '#c52d2f',
    'color': '#fff'
  },
  'nav-tabs>li': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e6e6e6' }]
  },
  'nav-tabs': {
    'borderBottom': [{ 'unit': 'string', 'value': 'transparent' }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e6e6e6' }]
  },
  'nav-tabs>li>a': {
    'background': '#f5f5f5',
    'color': '#666',
    'borderRadius': '0',
    'border': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'marginRight': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 15 }]
  },
  'nav-tabs li:last-child': {
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  'nav-stacked>li+li': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'nav-tabs>li>a:hover': {
    'background': '#1f1f20',
    'color': '#fff'
  },
  'nav-tabs>liactive>a': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'color': '#fff',
    'background': '#1f1f20',
    'position': 'relative'
  },
  'nav-tabs>liactive>a:hover': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'color': '#fff',
    'background': '#1f1f20',
    'position': 'relative'
  },
  'nav-tabs>liactive>a:focus': {
    'border': [{ 'unit': 'px', 'value': 0 }],
    'color': '#fff',
    'background': '#1f1f20',
    'position': 'relative'
  },
  'nav-tabs>liactive>a:after': {
    'position': 'absolute',
    'content': '""',
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'borderStyle': 'solid',
    'borderColor': 'transparent transparent transparent #1f1f20',
    'borderWidth': '25px 22px',
    'right': [{ 'unit': 'px', 'value': -44 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'tab-wrap': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e6e6e6' }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'tab-content': {
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'tab-content h2': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'tab-content img': {
    'borderRadius': '4px'
  },
  'testimonial h2': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'testimonial-inner': {
    'color': '#858586',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'testimonial-inner pull-left': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7e7e7' }],
    'paddingRight': [{ 'unit': 'px', 'value': 15 }],
    'position': 'relative'
  },
  'testimonial-inner pull-left:after': {
    'content': '""',
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 9 }],
    'height': [{ 'unit': 'px', 'value': 9 }],
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -5 }],
    'background': '#FFF',
    'WebkitTransform': 'rotate(45deg)',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7e7e7' }],
    'right': [{ 'unit': 'px', 'value': -5 }],
    'borderLeft': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }],
    'borderBottom': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'none' }]
  },
  '#partner': {
    'background': 'url(../images/partners/partner_bg.png) 50% 50% no-repeat',
    'backgroundSize': 'cover'
  },
  '#partner': {
    'color': '#fff',
    'textAlign': 'center'
  },
  '#partner h2': {
    'color': '#fff'
  },
  '#partner h3': {
    'color': '#fff'
  },
  'partners ul': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'partners ul li': {
    'display': 'inline-block',
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.2 }]
  },
  '#conatcat-info': {
    'background': '#fff url(../images/contact.png) no-repeat 90% 0',
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }]
  },
  'contact-info i': {
    'width': [{ 'unit': 'px', 'value': 60 }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'fontSize': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 60 }],
    'color': '#fff',
    'background': '#000',
    'textAlign': 'center',
    'borderRadius': '10px'
  },
  'contact-info h2': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'color': '#000'
  },
  'contact-info': {
    'color': '#000'
  },
  // ************************
********* About Us Page CSS ******
*************************
  'about-us': {
    'marginTop': [{ 'unit': 'px', 'value': 110 }],
    'marginBottom': [{ 'unit': 'px', 'value': -110 }]
  },
  'about-us h2': {
    'color': '#4e4e4e',
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'fontWeight': '600'
  },
  'skill_text h2': {
    'color': '#4e4e4e',
    'fontSize': [{ 'unit': 'px', 'value': 30 }],
    'fontWeight': '600'
  },
  'about-us p': {
    'color': '#4e4e4e'
  },
  '#carousel-slider': {
    'position': 'relative'
  },
  '#carousel-slider carousel-indicators': {
    'bottom': [{ 'unit': 'px', 'value': -25 }]
  },
  '#carousel-slider carousel-indicators li': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ffbd20' }]
  },
  '#carousel-slider a i': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#777' }],
    'borderRadius': '50%',
    'fontSize': [{ 'unit': 'px', 'value': 28 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'width': [{ 'unit': 'px', 'value': 50 }],
    'color': '#777'
  },
  '#carousel-slider a i:hover': {
    'background': '#bfbfbf',
    'color': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#bfbfbf' }]
  },
  '#carousel-slider carousel-control': {
    'width': [{ 'unit': 'string', 'value': 'inherit' }]
  },
  '#carousel-slider carousel-controlleft i': {
    'left': [{ 'unit': 'px', 'value': -25 }]
  },
  '#carousel-slider carousel-controlright i': {
    'right': [{ 'unit': 'px', 'value': -25 }]
  },
  '#carousel-slider carousel-controlleft': {
    'background': 'none'
  },
  '#carousel-slider carousel-controlright': {
    'background': 'none'
  },
  'skill_text': {
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 60 }],
    'marginTop': [{ 'unit': 'px', 'value': 25 }],
    'overflow': 'hidden'
  },
  'sinlge-skill': {
    'background': '#f2f2f2',
    'borderRadius': '100%',
    'color': '#FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'fontWeight': 'bold',
    'height': [{ 'unit': 'px', 'value': 200 }],
    'position': 'relative',
    'width': [{ 'unit': 'px', 'value': 200 }],
    'textTransform': 'uppercase',
    'overflow': 'hidden',
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 0 }]
  },
  'sinlge-skill p em': {
    'color': '#FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 38 }]
  },
  'sinlge-skill p': {
    'lineHeight': [{ 'unit': 'px', 'value': 1 }]
  },
  'joomla-skill': {
    'position': 'absolute',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderRadius': '100%',
    'padding': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'html-skill': {
    'position': 'absolute',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderRadius': '100%',
    'padding': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'css-skill': {
    'position': 'absolute',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderRadius': '100%',
    'padding': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'wp-skill': {
    'position': 'absolute',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'borderRadius': '100%',
    'padding': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'joomla-skill': {
    'background': 'rgb(242,242,242)',
    // Old browsers
    'background': '-moz-linear-gradient(top, rgba(242,242,242,1) 0%, rgba(242,242,242,1) 28%, rgba(45,125,164,1) 28%)',
    // FF3.6+
    'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(242,242,242,1)), color-stop(28%,rgba(242,242,242,1)), color-stop(28%,rgba(45,125,164,1)))',
    // Chrome,Safari4+
    'background': '-webkit-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 28%,rgba(45,125,164,1) 28%)',
    // Chrome10+,Safari5.1+
    'background': '-o-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 28%,rgba(45,125,164,1) 28%)',
    // Opera 11.10+
    'background': '-ms-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 28%,rgba(45,125,164,1) 28%)',
    // IE10+
    'background': 'linear-gradient(to bottom, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 28%,rgba(45,125,164,1) 28%)',
    // W3C
    'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f2f2', endColorstr='#2d7da4',GradientType=0 )',
    // IE6-9
  },
  'html-skill': {
    'background': 'rgb(242,242,242)',
    // Old browsers
    'background': '-moz-linear-gradient(top, rgba(242,242,242,1) 0%, rgba(242,242,242,1) 9%, rgba(106,164,47,1) 9%)',
    // FF3.6+
    'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(242,242,242,1)), color-stop(9%,rgba(242,242,242,1)), color-stop(9%,rgba(106,164,47,1)))',
    // Chrome,Safari4+
    'background': '-webkit-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 9%,rgba(106,164,47,1) 9%)',
    // Chrome10+,Safari5.1+
    'background': '-o-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 9%,rgba(106,164,47,1) 9%)',
    // Opera 11.10+
    'background': '-ms-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 9%,rgba(106,164,47,1) 9%)',
    // IE10+
    'background': 'linear-gradient(to bottom, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 9%,rgba(106,164,47,1) 9%)',
    // W3C
    'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f2f2', endColorstr='#6aa42f',GradientType=0 )',
    // IE6-9
  },
  'css-skill': {
    'background': 'rgb(242,242,242)',
    // Old browsers
    'background': '-moz-linear-gradient(top, rgba(242,242,242,1) 0%, rgba(242,242,242,1) 32%, rgba(255,189,32,1) 32%)',
    // FF3.6+
    'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(242,242,242,1)), color-stop(32%,rgba(242,242,242,1)), color-stop(32%,rgba(255,189,32,1)))',
    // Chrome,Safari4+
    'background': '-webkit-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 32%,rgba(255,189,32,1) 32%)',
    // Chrome10+,Safari5.1+
    'background': '-o-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 32%,rgba(255,189,32,1) 32%)',
    // Opera 11.10+
    'background': '-ms-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 32%,rgba(255,189,32,1) 32%)',
    // IE10+
    'background': 'linear-gradient(to bottom, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 32%,rgba(255,189,32,1) 32%)',
    // W3C
    'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f2f2', endColorstr='#ffbd20',GradientType=0 )',
    // IE6-9
  },
  'wp-skill': {
    'background': 'rgb(242,242,242)',
    // Old browsers
    'background': '-moz-linear-gradient(top, rgba(242,242,242,1) 0%, rgba(242,242,242,1) 19%, rgba(219,54,21,1) 19%)',
    // FF3.6+
    'background': '-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(242,242,242,1)), color-stop(19%,rgba(242,242,242,1)), color-stop(19%,rgba(219,54,21,1)))',
    // Chrome,Safari4+
    'background': '-webkit-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 19%,rgba(219,54,21,1) 19%)',
    // Chrome10+,Safari5.1+
    'background': '-o-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 19%,rgba(219,54,21,1) 19%)',
    // Opera 11.10+
    'background': '-ms-linear-gradient(top, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 19%,rgba(219,54,21,1) 19%)',
    // IE10+
    'background': 'linear-gradient(to bottom, rgba(242,242,242,1) 0%,rgba(242,242,242,1) 19%,rgba(219,54,21,1) 19%)',
    // W3C
    'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f2f2', endColorstr='#db3615',GradientType=0 )',
    // IE6-9
  },
  'skill-wrap': {
    'display': 'block',
    'overflow': 'hidden',
    'margin': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 0 }]
  },
  'team h4': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'textTransform': 'uppercase'
  },
  'team h5': {
    'fontWeight': '300'
  },
  'single-profile-top': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'single-profile-bottom': {
    'fontWeight': '400',
    'lineHeight': [{ 'unit': 'px', 'value': 24 }]
  },
  'single-profile-top': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'position': 'relative'
  },
  'single-profile-bottom': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 15 }],
    'position': 'relative'
  },
  'media_image': {
    'marginBottom': [{ 'unit': 'px', 'value': 10 }]
  },
  'team btn': {
    'background': 'transparent',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': '300',
    'marginBottom': [{ 'unit': 'px', 'value': 3 }],
    'padding': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 5 }],
    'textTransform': 'uppercase',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid#ddd' }],
    'marginRight': [{ 'unit': 'px', 'value': 3 }]
  },
  'ulsocial_icons': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'display': 'block'
  },
  'ultag': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'display': 'block'
  },
  'ulsocial_icons li': {
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'ultag li': {
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'ulsocial_icons li a i': {
    'borderRadius': '50%',
    'color': '#FFFFFF',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'width': [{ 'unit': 'px', 'value': 25 }],
    'opacity': '.8'
  },
  'team social_icons fa-facebook:hover': {
    'transform': 'rotate(360deg)',
    'MsTransform': 'rotate(360deg)',
    'WebkitTransform': 'rotate(360deg)',
    'transitionDuration': '2s',
    'transitionProperty': 'all',
    'transitionTimingFunction': 'ease',
    'opacity': '1',
    'transition': 'all 0.9s ease 0s',
    'MozTransition': 'all 0.9s ease 0s',
    'WebkitTransition': 'all 0.9s ease 0s',
    'OTransition': 'all 0.9s ease 0s'
  },
  'team social_icons fa-twitter:hover': {
    'transform': 'rotate(360deg)',
    'MsTransform': 'rotate(360deg)',
    'WebkitTransform': 'rotate(360deg)',
    'transitionDuration': '2s',
    'transitionProperty': 'all',
    'transitionTimingFunction': 'ease',
    'opacity': '1',
    'transition': 'all 0.9s ease 0s',
    'MozTransition': 'all 0.9s ease 0s',
    'WebkitTransition': 'all 0.9s ease 0s',
    'OTransition': 'all 0.9s ease 0s'
  },
  'team social_icons fa-google-plus:hover': {
    'transform': 'rotate(360deg)',
    'MsTransform': 'rotate(360deg)',
    'WebkitTransform': 'rotate(360deg)',
    'transitionDuration': '2s',
    'transitionProperty': 'all',
    'transitionTimingFunction': 'ease',
    'opacity': '1',
    'transition': 'all 0.9s ease 0s',
    'MozTransition': 'all 0.9s ease 0s',
    'WebkitTransition': 'all 0.9s ease 0s',
    'OTransition': 'all 0.9s ease 0s'
  },
  'team social_icons fa-facebook': {
    'background': '#0182c4'
  },
  'team social_icons fa-twitter': {
    'background': '#20B8FF'
  },
  'team social_icons fa-google-plus': {
    'background': '#D34836'
  },
  'team-bar first-one-arrow': {
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 30 }],
    'width': [{ 'unit': '%H', 'value': 0.02 }]
  },
  'team-bar first-arrow': {
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': 5 }],
    'marginRight': [{ 'unit': 'px', 'value': 35 }],
    'width': [{ 'unit': '%H', 'value': 0.22 }]
  },
  'team-bar second-arrow': {
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': '%H', 'value': 0.21 }]
  },
  'team-bar third-arrow': {
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': 40 }],
    'marginRight': [{ 'unit': 'px', 'value': 12 }],
    'width': [{ 'unit': '%H', 'value': 0.22 }]
  },
  'team-bar fourth-arrow': {
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': 25 }],
    'width': [{ 'unit': '%H', 'value': 0.2 }]
  },
  'team-bar first-one-arrow hr': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2D7DA4' }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2D7DA4' }]
  },
  'team-bar first-arrow hr': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2D7DA4' }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#2D7DA4' }]
  },
  'team-bar second-arrow hr': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#6aa42f' }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#6aa42f' }]
  },
  'team-bar third-arrow hr': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFBD20' }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#FFBD20' }]
  },
  'team-bar fourth-arrow hr': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#db3615' }],
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#db3615' }]
  },
  'team-bar': {
    'marginBottom': [{ 'unit': 'px', 'value': 15 }],
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'position': 'relative'
  },
  'team-bar i': {
    'borderRadius': '50%',
    'color': '#FFFFFF',
    'display': 'block',
    'height': [{ 'unit': 'px', 'value': 24 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'marginTop': [{ 'unit': 'px', 'value': -32 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center',
    'width': [{ 'unit': 'px', 'value': 24 }],
    'position': 'absolute'
  },
  'team-bar first-arrow fa-angle-up': {
    'background': '#2D7DA4',
    'marginLeft': [{ 'unit': 'px', 'value': -33 }]
  },
  'team-bar second-arrow fa-angle-down': {
    'background': '#6AA42F',
    'marginLeft': [{ 'unit': 'px', 'value': -33 }]
  },
  'team-bar third-arrow fa-angle-up': {
    'background': '#FFBD20',
    'marginLeft': [{ 'unit': 'px', 'value': -32 }]
  },
  'team-bar fourth-arrow fa-angle-down': {
    'background': '#db3615',
    'marginLeft': [{ 'unit': 'px', 'value': -32 }]
  },
  'team single-profile-top:before': {
    'content': '""',
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'borderStyle': 'solid'
  },
  'team single-profile-top:after': {
    'content': '""',
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'borderStyle': 'solid'
  },
  'team single-profile-top:before': {
    'left': [{ 'unit': 'px', 'value': 26 }],
    'bottom': [{ 'unit': 'px', 'value': -20 }],
    'borderWidth': '10px',
    'borderColor': '#fff transparent transparent transparent',
    'zIndex': '1'
  },
  'team single-profile-top:after': {
    'left': [{ 'unit': 'px', 'value': 25 }],
    'bottom': [{ 'unit': 'px', 'value': -22 }],
    'borderStyle': 'solid',
    'borderWidth': '11px',
    'borderColor': '#ddd transparent transparent transparent',
    'zIndex': '0'
  },
  'team single-profile-bottom:before': {
    'position': 'absolute',
    'content': '""',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'borderStyle': 'solid'
  },
  'team single-profile-bottom:after': {
    'position': 'absolute',
    'content': '""',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'borderStyle': 'solid'
  },
  'team single-profile-bottom:before': {
    'left': [{ 'unit': 'px', 'value': 30 }],
    'top': [{ 'unit': 'px', 'value': -20 }],
    'borderWidth': '10px',
    'borderColor': 'transparent transparent #fff transparent',
    'zIndex': '1'
  },
  'team single-profile-bottom:after': {
    'left': [{ 'unit': 'px', 'value': 29 }],
    'top': [{ 'unit': 'px', 'value': -22 }],
    'borderStyle': 'solid',
    'borderWidth': '11px',
    'borderColor': 'transparent transparent #DDD transparent',
    'zIndex': '0'
  },
  // **********************
****Service page css****
**********************
  'services': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'get-started': {
    'background': 'none repeat scroll 0 0 #F3F3F3',
    'borderRadius': '3px',
    'paddingBottom': [{ 'unit': 'px', 'value': 30 }],
    'position': 'relative',
    'marginBottom': [{ 'unit': 'px', 'value': 18 }],
    'marginTop': [{ 'unit': 'px', 'value': 60 }]
  },
  'get-started h2': {
    'paddingTop': [{ 'unit': 'px', 'value': 30 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'request': {
    'bottom': [{ 'unit': 'px', 'value': -15 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'position': 'absolute',
    'marginLeft': [{ 'unit': 'px', 'value': -110 }]
  },
  'request h4': {
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 220 }],
    'position': 'relative'
  },
  'request h4 a': {
    'background': '#c52d2f',
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'normal',
    'borderRadius': '3px',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }]
  },
  'request h4:after': {
    'borderColor': '#c52d2f transparent transparent',
    'borderStyle': 'solid',
    'borderWidth': '12px',
    'bottom': [{ 'unit': 'px', 'value': -18 }],
    'content': '""',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 13 }],
    'zIndex': '-99999'
  },
  'request h4:before': {
    'borderColor': '#c52d2f transparent transparent',
    'borderStyle': 'solid',
    'borderWidth': '12px',
    'bottom': [{ 'unit': 'px', 'value': -18 }],
    'content': '""',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 13 }],
    'position': 'absolute',
    'zIndex': '-99999'
  },
  'clients-area': {
    'padding': [{ 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'px', 'value': 60 }]
  },
  'clients-comments': {
    'backgroundImage': 'url("../images/image_bg.png")',
    'backgroundPosition': 'center 118px',
    'backgroundRepeat': 'no-repeat',
    'marginBottom': [{ 'unit': 'px', 'value': 100 }]
  },
  'clients-comments img': {
    'background': '#DDDDDD',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#DDDDDD' }],
    'height': [{ 'unit': 'px', 'value': 182 }],
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }],
    'width': [{ 'unit': 'px', 'value': 182 }],
    'transition': 'all 0.9s ease 0s',
    'MozTransition': 'all 0.9s ease 0s',
    'WebkitTransition': 'all 0.9s ease 0s',
    'OTransition': 'all 0.9s ease 0s'
  },
  'clients-comments h3': {
    'marginTop': [{ 'unit': 'px', 'value': 55 }],
    'fontWeight': '300',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }]
  },
  'clients-comments h4': {
    'fontWeight': '300',
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'clients-comments h4 span': {
    'fontWeight': '700',
    'fontStyle': 'oblique'
  },
  'footer': {
    'background': 'none repeat scroll 0 0 #2E2E2E',
    'borderTop': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#C52D2F' }],
    'height': [{ 'unit': 'px', 'value': 84 }],
    'marginTop': [{ 'unit': 'px', 'value': 110 }],
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'footer_left': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'text-left': {
    'color': '#FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  // ************************
********* Portfolio CSS ******
*************************
  '#portfolio_page': {
    'marginTop': [{ 'unit': 'px', 'value': 115 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'portfolio-items': {
    'listStyle': 'none outside none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'portfolio-filter': {
    'listStyle': 'none outside none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'portfolio-filter > li': {
    'display': 'inline-block'
  },
  'portfolio-filter > li a': {
    'background': 'none repeat scroll 0 0 #FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': '400',
    'marginRight': [{ 'unit': 'px', 'value': 20 }],
    'textTransform': 'uppercase',
    'transition': 'all 0.9s ease 0s',
    'MozTransition': 'all 0.9s ease 0s',
    'WebkitTransition': 'all 0.9s ease 0s',
    'OTransition': 'all 0.9s ease 0s',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F2F2F2' }],
    'outline': 'none',
    'borderRadius': '3px'
  },
  'portfolio-filter > li a:hover': {
    'color': '#fff',
    'background': '#c52d2f',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c52d2f' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'WebkitBoxShadow': 'none'
  },
  'portfolio-filter > li aactive': {
    'color': '#fff',
    'background': '#c52d2f',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c52d2f' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'WebkitBoxShadow': 'none'
  },
  'portfolio-items > li': {
    'float': 'left',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'WebkitBoxSizing': 'border-box',
    'MozBoxSizing': 'border-box',
    'boxSizing': 'border-box'
  },
  'portfolio-item': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // Start: Recommended Isotope styles
  // *** Isotope Filtering ***
  'isotope-item': {
    'zIndex': '2'
  },
  'isotope-hiddenisotope-item': {
    'pointerEvents': 'none',
    'zIndex': '1'
  },
  // *** Isotope CSS3 transitions ***
  'isotope': {
    'WebkitTransitionDuration': '0.8s',
    'MozTransitionDuration': '0.8s',
    'MsTransitionDuration': '0.8s',
    'OTransitionDuration': '0.8s',
    'transitionDuration': '0.8s'
  },
  'isotope isotope-item': {
    'WebkitTransitionDuration': '0.8s',
    'MozTransitionDuration': '0.8s',
    'MsTransitionDuration': '0.8s',
    'OTransitionDuration': '0.8s',
    'transitionDuration': '0.8s'
  },
  'isotope': {
    'WebkitTransitionProperty': 'height, width',
    'MozTransitionProperty': 'height, width',
    'MsTransitionProperty': 'height, width',
    'OTransitionProperty': 'height, width',
    'transitionProperty': 'height, width'
  },
  'isotope isotope-item': {
    'WebkitTransitionProperty': '-webkit-transform, opacity',
    'MozTransitionProperty': '-moz-transform, opacity',
    'MsTransitionProperty': '-ms-transform, opacity',
    'OTransitionProperty': '-o-transform, opacity',
    'transitionProperty': 'transform, opacity'
  },
  // *** disabling Isotope CSS3 transitions ***
  'isotopeno-transition': {
    'WebkitTransitionDuration': '0s',
    'MozTransitionDuration': '0s',
    'MsTransitionDuration': '0s',
    'OTransitionDuration': '0s',
    'transitionDuration': '0s'
  },
  'isotopeno-transition isotope-item': {
    'WebkitTransitionDuration': '0s',
    'MozTransitionDuration': '0s',
    'MsTransitionDuration': '0s',
    'OTransitionDuration': '0s',
    'transitionDuration': '0s'
  },
  'isotope isotope-itemno-transition': {
    'WebkitTransitionDuration': '0s',
    'MozTransitionDuration': '0s',
    'MsTransitionDuration': '0s',
    'OTransitionDuration': '0s',
    'transitionDuration': '0s'
  },
  // End: Recommended Isotope styles
  // disable CSS transitions for containers with infinite scrolling
  'isotopeinfinite-scrolling': {
    'WebkitTransition': 'none',
    'MozTransition': 'none',
    'MsTransition': 'none',
    'OTransition': 'none',
    'transition': 'none'
  },
  // *************************
********* Pricing Table CSS *
*************************
  'pricing_heading': {
    'marginTop': [{ 'unit': 'px', 'value': 120 }]
  },
  'pricing_heading h2': {
    'color': '#4e4e4e'
  },
  'pricing_heading p': {
    'color': '#4e4e4e'
  },
  'pricing-area h1': {
    'fontWeight': '300',
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'pricing-area span': {
    'fontWeight': '700',
    'fontSize': [{ 'unit': 'px', 'value': 18 }]
  },
  'pricing-area h3': {
    'color': '#fff'
  },
  'pricing-area span': {
    'color': '#fff'
  },
  'plan': {
    'position': 'relative',
    'marginBottom': [{ 'unit': 'px', 'value': 70 }]
  },
  'pricing-area ul': {
    'background': '#FAFAFA',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'pricing-area ul li': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': '400'
  },
  'pricing-area ul li:nth-child(even)': {
    'background': '#f5f5f5'
  },
  'pricing-area price-three img': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 15 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'pricing-area price-six img': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 15 }],
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'pricing-area heading-one': {
    'padding': [{ 'unit': 'px', 'value': 17 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 17 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '2px 2px 0 0'
  },
  'pricing-area heading-two': {
    'padding': [{ 'unit': 'px', 'value': 17 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 17 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '2px 2px 0 0'
  },
  'pricing-area heading-three': {
    'padding': [{ 'unit': 'px', 'value': 17 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 17 }, { 'unit': 'px', 'value': 0 }],
    'borderRadius': '2px 2px 0 0'
  },
  'pricing-area heading-one': {
    'marginLeft': [{ 'unit': 'px', 'value': -10 }]
  },
  'pricing-area heading-two': {
    'marginLeft': [{ 'unit': 'px', 'value': -10 }]
  },
  'pricing-area heading-three': {
    'marginLeft': [{ 'unit': 'px', 'value': -10 }]
  },
  'pricing-area heading-four': {
    'marginLeft': [{ 'unit': 'px', 'value': -10 }]
  },
  'pricing-area heading-five': {
    'marginLeft': [{ 'unit': 'px', 'value': -10 }]
  },
  'pricing-area heading-six': {
    'marginLeft': [{ 'unit': 'px', 'value': -10 }]
  },
  'pricing-area heading-seven': {
    'marginLeft': [{ 'unit': 'px', 'value': -10 }]
  },
  'pricing-area heading-one': {
  },
  'pricing-area price-one plan-action btn-primary': {
  },
  'pricing-area heading-two': {
    'background': '#27AE60'
  },
  'pricing-area price-two plan-action btn-primary': {
    'background': '#27AE60'
  },
  'pricing-area heading-three': {
    'background': '#f39c12'
  },
  'pricing-area price-three plan-action btn-primary': {
    'background': '#f39c12'
  },
  'pricing-area heading-four': {
    'background': '#5c5c5c'
  },
  'pricing-area price-four plan-action btn-primary': {
    'background': '#5c5c5c'
  },
  'pricing-area heading-five': {
    'background': '#5c5c5c'
  },
  'pricing-area price-five plan-action btn-primary': {
    'background': '#5c5c5c'
  },
  'pricing-area heading-six': {
    'background': '#e24f43'
  },
  'pricing-area price-six plan-action btn-primary': {
    'background': '#e24f43'
  },
  'pricing-area heading-seven': {
    'background': '#5c5c5c'
  },
  'pricing-area price-seven plan-action btn-primary': {
    'background': '#5c5c5c'
  },
  'pricing-area bg': {
    'background': '#fafafa'
  },
  'pricing-area heading-one h3:before': {
    'borderColor': '#bf4539 transparent transparent'
  },
  'pricing-area heading-two h3:before': {
    'borderColor': '#1f8c4d transparent transparent'
  },
  'pricing-area heading-three h3:before': {
    'borderColor': '#d4880f transparent transparent'
  },
  'pricing-area heading-four h3:before': {
    'borderColor': '#424242 transparent transparent'
  },
  'pricing-area heading-five h3:before': {
    'borderColor': '#424242 transparent transparent'
  },
  'pricing-area heading-six h3:before': {
    'borderColor': '#bf4539 transparent transparent'
  },
  'pricing-area heading-seven h3:before': {
    'borderColor': '#424242 transparent transparent'
  },
  'pricing-area h3:before': {
    'borderColor': '#D4880F transparent transparent',
    'borderRadius': '5px 0 0 0px',
    'borderStyle': 'solid',
    'borderWidth': '12px',
    'content': '""',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 4 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 78 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '-999'
  },
  'small-pricing h3:after': {
    'height': [{ 'unit': 'px', 'value': 94 }]
  },
  'small-pricing h3:before': {
    'top': [{ 'unit': 'px', 'value': 74 }]
  },
  'plan-action': {
    'height': [{ 'unit': 'px', 'value': 40 }]
  },
  'pricing-area plan-action btn-primary': {
    'position': 'relative',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 20 }],
    'color': '#fff',
    'marginTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'pricing-area plan-action btn-primary:before': {
    'borderColor': '#E24F43 transparent transparent',
    'borderRadius': '5px 0 0 0',
    'borderStyle': 'solid',
    'borderWidth': '12px',
    'bottom': [{ 'unit': 'px', 'value': -12 }],
    'content': '""',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': -9 }],
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '-1'
  },
  'pricing-area plan-action btn-primary:after': {
    'borderColor': '#E24F43 transparent transparent',
    'borderRadius': '5px 0 0 0',
    'borderStyle': 'solid',
    'borderWidth': '12px',
    'bottom': [{ 'unit': 'px', 'value': -12 }],
    'content': '""',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': -9 }],
    'width': [{ 'unit': 'px', 'value': 0 }],
    'zIndex': '-1'
  },
  'pricing-area price-two plan-action btn-primary:before': {
    'borderColor': '#1f8c4d transparent transparent'
  },
  'pricing-area price-two plan-action btn-primary:after': {
    'borderColor': '#1f8c4d transparent transparent'
  },
  'pricing-area price-three plan-action btn-primary:before': {
    'borderColor': '#d4880f transparent transparent'
  },
  'pricing-area price-three plan-action btn-primary:after': {
    'borderColor': '#d4880f transparent transparent'
  },
  'pricing-area price-four plan-action btn-primary:before': {
    'borderColor': '#424242 transparent transparent',
    'right': [{ 'unit': 'px', 'value': -9 }]
  },
  'pricing-area price-four plan-action btn-primary:after': {
    'borderColor': '#424242 transparent transparent',
    'right': [{ 'unit': 'px', 'value': -9 }]
  },
  'pricing-area price-five plan-action btn-primary:before': {
    'borderColor': '#424242 transparent transparent',
    'right': [{ 'unit': 'px', 'value': -9 }]
  },
  'pricing-area price-five plan-action btn-primary:after': {
    'borderColor': '#424242 transparent transparent',
    'right': [{ 'unit': 'px', 'value': -9 }]
  },
  'pricing-area price-seven plan-action btn-primary:before': {
    'borderColor': '#424242 transparent transparent',
    'right': [{ 'unit': 'px', 'value': -9 }]
  },
  'pricing-area price-seven plan-action btn-primary:after': {
    'borderColor': '#424242 transparent transparent',
    'right': [{ 'unit': 'px', 'value': -9 }]
  },
  'pricing-area price-six plan-action btn-primary:before': {
    'borderColor': '#bf4539 transparent transparent',
    'right': [{ 'unit': 'px', 'value': -9 }]
  },
  'pricing-area price-six plan-action btn-primary:after': {
    'borderColor': '#bf4539 transparent transparent',
    'right': [{ 'unit': 'px', 'value': -9 }]
  },
  // ************************
********* Contact Us CSS ******
*************************
  'gmap-area': {
    'backgroundImage': 'url("../images/map.jpg")',
    'backgroundPosition': '0 0',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'padding': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }]
  },
  'gmap-area gmap iframe': {
    'borderRadius': '50%',
    'height': [{ 'unit': 'px', 'value': 280 }],
    'width': [{ 'unit': 'px', 'value': 300 }]
  },
  'gmap': {
    'border': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f6f5f0' }],
    'borderRadius': '50%',
    'height': [{ 'unit': 'px', 'value': 300 }],
    'width': [{ 'unit': 'px', 'value': 300 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': '#e7e4dc' }],
    'overflow': 'hidden',
    'position': 'relative',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'gmap-area map-content ul': {
    'listStyle': 'none'
  },
  'gmap-area map-content address h5': {
    'fontWeight': '700',
    // font-size: 16px;
  },
  '#contact-page': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  '#contact-page contact-form form-group label': {
    'color': '#4E4E4E',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'fontWeight': '300'
  },
  'form-group form-control': {
    'padding': [{ 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 7 }, { 'unit': 'px', 'value': 12 }],
    'borderColor': '#f2f2f2',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  '#contact': {
    'backgroundPosition': '0px -275px!important',
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 109 }],
    'height': [{ 'unit': 'px', 'value': 37 }],
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': 30 }],
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'textarea#message': {
    'resize': 'none',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  '#contact-page contact-wrap': {
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  // ********************
****blog page css*****
*********************
  'widget': {
    'marginBottom': [{ 'unit': 'px', 'value': 60 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 0 }]
  },
  'single_comments': {
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'single_comments img': {
    'float': 'left',
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'single_comments p': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'widget entry-meta span': {
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'widget h3': {
    'color': '#000',
    'textTransform': 'uppercase',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'blog_category': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'blog_category li': {
    'float': 'none',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'blog_category li a': {
    'background': '#f5f5f5',
    'borderRadius': '4px',
    'color': '#888',
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }]
  },
  'blog_category li a:hover': {
    'background': '#c52d2f',
    'color': '#fff'
  },
  'badge:before': {
    'borderColor': 'transparent transparent transparent #c52d2f',
    'borderStyle': 'solid',
    'borderWidth': '10px',
    'bottom': [{ 'unit': 'px', 'value': -8 }],
    'content': '""',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 5 }],
    'position': 'absolute',
    'zIndex': '-99999'
  },
  'badge': {
    'backgroundColor': '#c52d2f',
    'borderRadius': '5px',
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 8 }],
    'position': 'relative',
    'left': [{ 'unit': 'px', 'value': 60 }],
    'top': [{ 'unit': 'px', 'value': -18 }],
    'fontWeight': 'normal'
  },
  'blog_archieve': {
    'listStyle': 'none outside none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'blog_archieve li': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f5f5f5' }]
  },
  'blog_archieve li:first-child': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'ulgallery': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ulgallery li': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 60 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 0 }],
    'float': 'left'
  },
  'ulfaq': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ulfaq li': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'ulfaq li:first-child': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'ulfaq li spannumber': {
    'display': 'block',
    'float': 'left',
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'textAlign': 'center',
    'background': '#34495e',
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 24 }]
  },
  'ulfaq li > div': {
    'marginLeft': [{ 'unit': 'px', 'value': 70 }]
  },
  'ulfaq li > div h3': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'embed-container': {
    'position': 'relative',
    'paddingBottom': [{ 'unit': '%V', 'value': 0.5625 }],
    'paddingTop': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden'
  },
  'embed-container iframe': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'embed-container object': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'embed-container embed': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  'blog-item': {
    'borderRadius': '0',
    'overflow': 'hidden',
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'blog blog-item img-blog': {
    'borderRadius': '5px',
    'marginBottom': [{ 'unit': 'px', 'value': 45 }]
  },
  'blog blog-item blog-content': {
    'paddingBottom': [{ 'unit': 'px', 'value': 25 }]
  },
  'blog blog-item blog-content h2': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 30 }]
  },
  'readmore': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'blog blog-item blog-content h3': {
    'color': '#858586',
    'marginBottom': [{ 'unit': 'px', 'value': 40 }],
    // font-weight: 300
  },
  'blog blog-item blog-content h4': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'post-tags': {
  },
  'blog blog-item entry-meta': {
    'borderRadius': '5px',
    'overflow': 'hidden'
  },
  'blog blog-item entry-meta > span': {
    'background': '#f5f5f5',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }],
    'display': 'block',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'textAlign': 'left'
  },
  '#publish_date': {
    'background': '#c52d2f',
    'borderBottom': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#4e4e4e' }],
    'color': '#fff',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'textAlign': 'center'
  },
  'blog blog-item entry-meta > span': {
    'color': '#ccc'
  },
  'blog blog-item entry-meta > span a': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'marginLeft': [{ 'unit': 'px', 'value': 3 }],
    'fontWeight': '300',
    'color': '#888'
  },
  'ulpagination > li > a': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#F1F1F1' }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }],
    'borderRadius': '5px',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 14 }]
  },
  'ulpagination > li > a i': {
    'marginLeft': [{ 'unit': 'px', 'value': 5 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'ulpagination > liactive > a': {
    'backgroundColor': '#c52d2f !important',
    'borderColor': '#c52d2f !important',
    'color': '#fff'
  },
  'ulpagination > li:hover > a': {
    'backgroundColor': '#c52d2f !important',
    'borderColor': '#c52d2f !important',
    'color': '#fff'
  },
  'search_box': {
    'backgroundImage': 'url("../images/search_icon.png")',
    'backgroundPosition': '314px 15px',
    'backgroundRepeat': 'no-repeat',
    'borderColor': '#DEDEDE',
    'height': [{ 'unit': 'px', 'value': 48 }],
    'outline': 'medium none',
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'form-control:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }],
    'outline': '0 none'
  },
  'ultag-cloud': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ulsidebar-gallery': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'tag-cloud li': {
    'display': 'inline-block',
    'marginBottom': [{ 'unit': 'px', 'value': 3 }]
  },
  'tag-cloud li a': {
    'background': '#f5f5f5',
    'color': '#888',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '4px',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 15 }]
  },
  'tag-cloud li a:hover': {
    'background': '#c52d2f',
    'color': '#fff'
  },
  'sidebar-gallery li': {
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'sidebar-gallery li a': {
    'borderRadius': '4px',
    'display': 'inline-block'
  },
  // *********************
**blog single page css*
*********************
  'reply_section': {
    'background': '#f5f5f5',
    'borderRadius': '5px'
  },
  'post_reply': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': 45 }]
  },
  'post_reply img': {
    'width': [{ 'unit': 'px', 'value': 85 }],
    'height': [{ 'unit': 'px', 'value': 85 }],
    'border': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#D5D8DD' }]
  },
  'post_reply ul': {
    'listStyle': 'none outside none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'post_reply ul li': {
    'float': 'left'
  },
  'post_reply ul li a': {
    'display': 'block'
  },
  'post_reply ul li a i': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#DDDDDD' }],
    'borderRadius': '39px',
    'color': '#FFFFFF',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'marginRight': [{ 'unit': 'px', 'value': 3 }],
    'paddingTop': [{ 'unit': 'px', 'value': 7 }],
    'textAlign': 'center',
    'width': [{ 'unit': 'px', 'value': 30 }]
  },
  'post_reply ul li a ifa-facebook': {
    'background': '#0182C4'
  },
  'post_reply ul li a ifa-twitter': {
    'background': 'none repeat scroll 0 0 #3FC1FE'
  },
  'post_reply ul li a ifa-google-plus': {
    'background': 'none repeat scroll 0 0 #D34836'
  },
  'post_reply ul li a i:hover': {
    'opacity': '.5'
  },
  'post_reply_content': {
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }]
  },
  'post_reply_content h1 a:hover': {
    'color': '#FFC800'
  },
  'post_reply_content h4': {
    'marginBottom': [{ 'unit': 'px', 'value': 50 }]
  },
  'reply_section media-body': {
    'display': 'inherit'
  },
  'comment_section media-body': {
    'display': 'inherit'
  },
  '#comments_title': {
    'color': '#4e4e4e',
    'fontWeight': '700px',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'marginTop': [{ 'unit': 'px', 'value': 60 }],
    'marginBottom': [{ 'unit': 'px', 'value': 40 }]
  },
  'comment_section': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'position': 'relative'
  },
  'post_comments img': {
    'width': [{ 'unit': 'px', 'value': 85 }],
    'height': [{ 'unit': 'px', 'value': 85 }],
    'marginTop': [{ 'unit': 'px', 'value': 35 }]
  },
  'post_reply_comments': {
    'background': '#f5f5f5',
    'borderRadius': '4px',
    'padding': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 30 }]
  },
  'post_reply_comments:before': {
    'borderColor': 'transparent #F0F0F0 transparent transparent',
    'borderStyle': 'solid',
    'borderWidth': '15px',
    'content': '" "',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 75 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 20 }]
  },
  'post_reply_comments h3': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'post_reply_content h3': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'post_reply_comments h1 a:hover': {
    'color': '#c52d2f'
  },
  'post_reply_comments h4': {
    'color': '#c4c4c5',
    'fontWeight': '400'
  },
  'post_reply_comments p': {
    'paddingBottom': [{ 'unit': 'px', 'value': 30 }]
  },
  'post_reply_comments a': {
    'bottom': [{ 'unit': 'px', 'value': 15 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 30 }],
    'background': '#c52d2f',
    'color': '#fff',
    'borderRadius': '5px',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 20 }]
  },
  'post_reply_comments a:before': {
    'borderColor': '#c52d2f transparent transparent',
    'borderStyle': 'solid',
    'borderWidth': '16px',
    'bottom': [{ 'unit': 'px', 'value': -11 }],
    'content': '""',
    'height': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': -12 }],
    'position': 'absolute',
    'zIndex': '99999'
  },
  'post_reply_comments h2 a': {
  },
  'message_heading': {
    'marginBottom': [{ 'unit': 'px', 'value': 50 }],
    'marginTop': [{ 'unit': 'px', 'value': 60 }]
  },
  // *****************
 404 page css
 *****************
  '#error btn-success:hover': {
    'backgroundColor': '#EBEBEB',
    'borderColor': '#EBEBEB',
    'color': '#4E4E4E'
  },
  'btn-success:focus': {
    'backgroundColor': '#EBEBEB',
    'borderColor': '#EBEBEB',
    'color': '#4E4E4E'
  },
  'btn-success:active': {
    'backgroundColor': '#EBEBEB',
    'borderColor': '#EBEBEB',
    'color': '#4E4E4E'
  },
  'btn-successactive': {
    'backgroundColor': '#EBEBEB',
    'borderColor': '#EBEBEB',
    'color': '#4E4E4E'
  },
  'open dropdown-togglebtn-success:hover': {
    'backgroundColor': '#EBEBEB',
    'borderColor': '#EBEBEB',
    'color': '#4E4E4E'
  },
  '#error h1': {
    'color': '#4e4e4e',
    'textTransform': 'uppercase'
  },
  // *****************
shortcodes page css
*****************
  'shortcode-item': {
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'shortcode-item h2': {
    'color': '#4E4E4E',
    'fontSize': [{ 'unit': 'px', 'value': 24 }],
    'marginBottom': [{ 'unit': 'px', 'value': 22 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'fontWeight': '600'
  },
  // **********************
********* Footer ******
***********************
  '#bottom': {
    'background': '#f5f5f5',
    'borderBottom': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#c52d2f' }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  '#bottom h3': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'textTransform': 'uppercase',
    'fontSize': [{ 'unit': 'px', 'value': 22 }],
    'color': '#000'
  },
  '#bottom ul': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#bottom ul li': {
    'display': 'block',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  '#bottom ul li a': {
    'color': '#808080'
  },
  '#bottom ul li a:hover': {
    'color': '#c52d2f'
  },
  '#bottom widget': {
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  '#footer': {
    'paddingTop': [{ 'unit': 'px', 'value': 30 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 30 }],
    'color': '#fff',
    'background': '#2e2e2e'
  },
  '#footer a': {
    'color': '#fff'
  },
  '#footer a:hover': {
    'color': '#c52d2f'
  },
  '#footer ul': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#footer ul > li': {
    'display': 'inline-block',
    'marginLeft': [{ 'unit': 'px', 'value': 15 }]
  },
  'navbar-inverse': {
    'background': 'rgba(25,171,232,0.9) repeat scroll 0 0'
  },
  'imgcrop': {
    'height': [{ 'unit': 'px', 'value': 200 }]
  },
  // css for slider
  'selectbox': {
    'background': '#000 url(../images/services/bg_services.png)',
    'backgroundSize': 'cover'
  },
  'center-block': {
    'textAlign': 'center',
    'color': 'white'
  },
  'carousel-indicators': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'display': 'none'
  },
  // csss
  'topmenu > a': {
    'color': '#666'
  },
  'topmenu': {
    'display': 'inline-block',
    'textDecoration': 'none',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }]
  },
  'dropdown-menu': {
    'opacity': '0'
  },
  'deals:hover>dropdown-menu': {
    'opacity': '1'
  },
  'pb': {
    'background': '#fff',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'pb': {
    'background': '#fff',
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'fullbox': {
    'background': '#fff',
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'mensclothing': {
    'borderTop': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#0099ff' }]
  },
  'mensclothing>secondmidrow': {
    'borderLeft': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#0099ff' }]
  },
  'secondmidrow': {
    'width': [{ 'unit': '%H', 'value': 0.135 }],
    'float': 'left'
  },
  'mensclothing>secondmidrow>menu_title': {
    'background': 'rgba(0,153,255,1)'
  },
  'menu_title': {
    'color': '#555',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': 'px', 'value': 180 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 1 }],
    'borderRadius': '0px 0px 20px 0px'
  },
  'box-header-icon': {
    'float': 'right',
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 3 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'background': 'rgba(255,255,255,0.5) none repeat scroll 0px 0px',
    'borderRadius': '18px 0px',
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'marginRight': [{ 'unit': 'px', 'value': -7 }]
  },
  'menu_title c': {
    'fontSize': [{ 'unit': 'em', 'value': 1 }]
  },
  'mensclothing mn': {
    'background': 'rgba(0,153,255,0.1)',
    'borderRadius': '0px 20px 20px 0px'
  },
  'mn': {
    'listStyle': 'none outside none',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }],
    'background': '#f9f9f9',
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'width': [{ 'unit': 'px', 'value': 180 }]
  },
  'floater': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.6 }]
  },
  'ul': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'li': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'mensclothing active': {
    'color': 'rgba(0,153,255,1)',
    'background': 'rgba(0,153,255,0.1)'
  },
  'active': {
    'background': 'rgba(255,255,255,0.8)',
    'color': '#817a7a'
  },
  'topsellers': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 155 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'em', 'value': 0.9 }],
    'borderRadius': '2px'
  },
  'products-box': {
    'position': 'relative',
    'display': 'inline-block',
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }]
  },
  'browsemore': {
    'fontSize': [{ 'unit': 'em', 'value': 1.1 }],
    'lineHeight': [{ 'unit': 'px', 'value': 32 }],
    'textAlign': 'center',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'float': 'left',
    'marginTop': [{ 'unit': 'px', 'value': 5 }]
  },
  'ad-box': {
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgb(51,51,51)' }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'borderRadius': '0px',
    'float': 'left',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }]
  },
  'floaterbox': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.15 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'height': [{ 'unit': '%V', 'value': 0.2 }]
  },
  'productdetails': {
    'height': [{ 'unit': 'px', 'value': 44 }],
    'overflow': 'hidden',
    'fontSize': [{ 'unit': 'px', 'value': 12 }]
  },
  'price': {
    'color': '#666',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 18 }]
  },
  'price discount': {
    'color': '#333',
    'fontWeight': 'normal',
    'lineHeight': [{ 'unit': 'px', 'value': 18 }]
  },
  'discount': {
    'textDecoration': 'line-through'
  },
  'mp div a div>span:nth-child(1)': {
    'backgroundColor': '#28aae1',
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'fontWeight': 'bold',
    'left': [{ 'unit': 'px', 'value': 87 }],
    'opacity': '0.8',
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 6 }],
    'position': 'absolute',
    'textTransform': 'uppercase',
    'width': [{ 'unit': 'px', 'value': 60 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#fff' }]
  },
  'homenkitchen': {
    'borderTop': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgb(194,211,35)' }]
  },
  'homenkitchen>secondmidrow': {
    'borderLeft': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgb(194,211,35)' }]
  },
  'secondmidrow': {
    'width': [{ 'unit': '%H', 'value': 0.135 }],
    'float': 'left'
  },
  'homenkitchen>secondmidrow>menu_title': {
    'background': 'rgba(194,211,35,1)'
  },
  'icon-television:before': {
    'content': '"\65"'
  },
  'homenkitchen mn': {
    'background': 'rgba(194,211,35,0.1)',
    'borderRadius': '0px 20px 20px 0px'
  },
  'mn li>sub': {
    'marginTop': [{ 'unit': 'px', 'value': -10 }],
    'fontWeight': '300'
  },
  'topsellerssub': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 145 }]
  },
  'topsellers': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 155 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }],
    'borderRadius': '2px'
  },
  'footwear>secondmidrow': {
    'borderLeft': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgb(255,134,0)' }]
  },
  'footwear>secondmidrow>menu_title': {
    'background': 'rgba(255,134,0,1)'
  },
  'footwear>secondmidrow>menu_title': {
  },
  'footwear>secondmidrow>menu_title': {
  },
  'footwear mn': {
    'background': 'rgba(255,134,0,0.1) none repeat scroll 0px 0px',
    'borderRadius': '0px 20px 20px 0px',
    'lineHeight': [{ 'unit': 'px', 'value': 35 }]
  },
  'footwear': {
    'borderTop': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgb(255,134,0)' }]
  },
  'ladiesfashion': {
    'borderTop': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#E7457C' }]
  },
  'ladiesfashion>secondmidrow': {
    'borderLeft': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#E7457C' }]
  },
  'ladiesfashion>secondmidrow>menu_title': {
    'background': 'rgba(231,69,124,1)'
  },
  'icon-bag:before': {
    'content': '"\6e"'
  },
  '[class^="icon-"]:before': {
    'fontFamily': '"iconpack"!important',
    'fontStyle': 'normal!important',
    'fontWeight': 'normal!important',
    'fontVariant': 'normal!important',
    'textTransform': 'none!important',
    'speak': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale',
    'fontSize': [{ 'unit': 'em', 'value': 1.8 }],
    'verticalAlign': 'top'
  },
  '[class*=" icon-"]:before': {
    'fontFamily': '"iconpack"!important',
    'fontStyle': 'normal!important',
    'fontWeight': 'normal!important',
    'fontVariant': 'normal!important',
    'textTransform': 'none!important',
    'speak': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale',
    'fontSize': [{ 'unit': 'em', 'value': 1.8 }],
    'verticalAlign': 'top'
  },
  'ladiesfashion mn': {
    'background': 'rgba(231,69,124,0.1)',
    'borderRadius': '0px 20px 20px 0px'
  },
  'ladiesfashion active': {
    'color': 'rgba(231,69,124,1)',
    'background': 'rgba(231,69,124,0.1)'
  },
  'active': {
    'background': 'rgba(255,255,255,0.8)',
    'color': '#817a7a'
  },
  'mn li': {
    'margin': [{ 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 0 }]
  },
  'kurta-showcase': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'halfpreview': {
    'WebkitTransition': 'width 2s',
    'transition': 'all 0.8s',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'width': [{ 'unit': '%H', 'value': 0.16670000000000001 }],
    'height': [{ 'unit': 'px', 'value': 400 }],
    'float': 'left'
  },
  'halfpreview img': {
    'objectFit': 'none',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'entertainment': {
    'borderTop': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgb(235,70,47)' }]
  },
  'entertainment>secondmidrow': {
    'borderLeft': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgb(235,70,47)' }]
  },
  'entertainment>secondmidrow>menu_title': {
    'background': 'rgba(235,70,47,1)'
  },
  'entertainment mn': {
    'background': 'rgba(235,70,47,0.1)',
    'borderRadius': '0px 20px 20px 0px'
  },
  'entertainment active': {
    'color': 'rgba(235,70,47,1)',
    'background': 'rgba(235,70,47,0.1)'
  },
  'active': {
    'background': 'rgba(255,255,255,0.8)',
    'color': '#817a7a'
  },
  'pb:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': '#aaa' }]
  },
  'fullbox:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': '#aaa' }]
  },
  'personalcare>secondmidrow': {
    'borderLeft': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgb(103,240,220)' }]
  },
  'personalcare>secondmidrow>menu_title': {
    'background': 'rgba(103,240,220,1)'
  },
  'personalcare secondmidrow menu_title c a': {
    'color': 'rgba(9,115,99,1)'
  },
  'personalcare mn': {
    'background': 'rgba(103,240,220,0.1)',
    'borderRadius': '0px 20px 20px 0px',
    'lineHeight': [{ 'unit': 'px', 'value': 28 }]
  },
  'personalcare active': {
    'color': 'rgba(9,115,99,1)',
    'background': 'rgba(103,240,220,0.1)'
  },
  'homepage': {
    'backgroundColor': '#eee'
  },
  'second-bar': {
    'backgroundColor': 'white'
  },
  'footer': {
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'borderTop': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#333' }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'background': '#fff',
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'lineHeight': [{ 'unit': 'px', 'value': 30 }]
  },
  'container_48': {
    'marginLeft': [{ 'unit': 'string', 'value': 'auto' }],
    'marginRight': [{ 'unit': 'string', 'value': 'auto' }],
    'maxWidth': [{ 'unit': 'px', 'value': 1266 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'review_block left_bottom_half': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }, { 'unit': 'string', 'value': '#CCCCCC' }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'footer p': {
    'clear': 'both',
    'lineHeight': [{ 'unit': 'em', 'value': 2 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }]
  },
  '#newsletter': {
    'background': '#eee none repeat scroll 0 0',
    'border': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#666' }],
    'textAlign': 'center',
    'marginRight': [{ 'unit': '%H', 'value': 0.04 }]
  },
  '#newsletter inputn': {
    'background': 'rgba(255,255,255,0.2) none repeat scroll 0 0!important',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(55,55,55,0.3)' }],
    'borderRadius': '2px',
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'height': [{ 'unit': 'px', 'value': 22 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 10 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'transition': 'all 0.5s'
  },
  'bttnsite': {
    'backgroundColor': '#555',
    'borderStyle': 'none',
    'color': '#fff',
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'height': [{ 'unit': 'px', 'value': 38 }],
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 13 }],
    'width': [{ 'unit': '%H', 'value': 0.3 }]
  },
  'input[type="button"]': {
    'cursor': 'pointer'
  },
  'input[type="submit"]': {
    'cursor': 'pointer'
  },
  'review_block middle_bottom_half': {
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'dotted' }, { 'unit': 'string', 'value': '#CCCCCC' }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'middle_bottom_half': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'middle_bottom_half ul': {
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'middle_bottom_half ul li': {
    'listStyle': 'none outside none',
    'display': 'inline',
    'paddingRight': [{ 'unit': 'px', 'value': 5 }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#999' }]
  },
  'review_block right_bottom_half': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'right_bottom_half': {
    'float': 'right'
  },
  'ulhtoo': {
    'paddingLeft': [{ 'unit': 'px', 'value': 3 }]
  },
  'footersec': {
    'marginRight': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '!important' }]
  },
  'mpi': {
    'borderTop': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgb(51,51,51)' }],
    'padding': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }],
    'lineHeight': [{ 'unit': 'em', 'value': 2 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.1 }]
  },
  'arrow': {
    'color': 'rgb(51,51,51)',
    'background': 'rgba(255,255,255,0.9) none repeat scroll 0% 0%',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -49 }],
    'position': 'absolute',
    'fontSize': [{ 'unit': 'px', 'value': 31 }],
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 9 }],
    'cursor': 'pointer',
    'boxShadow': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'rgba(102,102,102,0.5)' }]
  },
  'arrow-left': {
    'left': [{ 'unit': 'px', 'value': 14 }],
    'borderRadius': '0px 4px 4px 0px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'arrow-right': {
    'right': [{ 'unit': 'px', 'value': 14 }],
    'borderRadius': '4px 0px 0px 4px',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'pb': {
    'background': '#fff',
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'fullbox': {
    'background': '#fff',
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'spotlight-pane': {
    'background': '#fff',
    'display': 'inline-block',
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#999' }]
  },
  'spotlight menu_title': {
    'background': '#f3f3f3',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'menu_title': {
    'color': '#555',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'lineHeight': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': 'px', 'value': 180 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginBottom': [{ 'unit': 'px', 'value': 1 }],
    'borderRadius': '0px 0px 20px 0px'
  },
  'menu_title a': {
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'spotcontainer': {
    'position': 'relative',
    'display': 'inline-block',
    'float': 'left'
  },
  'breadcrumb': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }],
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  '#abovefold': {
    'background': '#fff',
    'overflow': 'hidden',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  '#prodleftColumn': {
    'float': 'left',
    'height': [{ 'unit': '%V', 'value': 1 }],
    // width: 47%;
    'maxWidth': [{ 'unit': 'px', 'value': 580 }],
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'paddingRight': [{ 'unit': 'px', 'value': 2 }],
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'minHeight': [{ 'unit': 'px', 'value': 550 }]
  },
  'filterbttn': {
    'width': [{ 'unit': 'px', 'value': 110 }],
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  'up-arrow': {
    'position': 'absolute',
    'display': 'none',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 26 }],
    'height': [{ 'unit': 'px', 'value': 26 }],
    'cursor': 'pointer',
    'background': 'transparent url(/css/next-horizontal.gif) no-repeat 0 0',
    'WebkitTransform': 'rotate(-90deg)',
    'MozTransform': 'rotate(-90deg)',
    'MsTransform': 'rotate(-90deg)',
    'OTransform': 'rotate(-90deg)',
    'transform': 'rotate(-90deg)'
  },
  'down-arrow': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 510 }],
    'right': [{ 'unit': 'px', 'value': 40 }],
    'width': [{ 'unit': 'px', 'value': 26 }],
    'height': [{ 'unit': 'px', 'value': 26 }],
    'cursor': 'pointer',
    'background': 'transparent url(/css/next-horizontal.gif) no-repeat 0 0',
    'WebkitTransform': 'rotate(90deg)',
    'MozTransform': 'rotate(90deg)',
    'MsTransform': 'rotate(90deg)',
    'OTransform': 'rotate(90deg)',
    'transform': 'rotate(90deg)'
  },
  'pane': {
    'overflow': 'hidden',
    'height': [{ 'unit': 'px', 'value': 500 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  '#gallery_01': {
    'paddingTop': [{ 'unit': 'px', 'value': 0 }]
  },
  '#gallery_01': {
    'paddingTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'buttonspan': {
    'position': 'relative',
    'transition': 'all 0.5s ease-in-out'
  },
  '#gallery_01 li': {
    'paddingBottom': [{ 'unit': 'px', 'value': 0 }],
    'height': [{ 'unit': 'px', 'value': 125 }]
  },
  '#gallery_01 img': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#E5E5E5' }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'width': [{ 'unit': 'px', 'value': 99 }],
    'height': [{ 'unit': 'px', 'value': 120 }]
  },
  '#zoom_03': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  '#zoom_03': {
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'img': {
    'border': [{ 'unit': 'px', 'value': 0 }]
  },
  '#prodrightColumn': {
    'float': 'left',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.016 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.016 }]
  },
  'saveicon': {
    'position': 'fixed',
    'display': 'block',
    'right': [{ 'unit': 'px', 'value': 35 }],
    'zIndex': '1',
    'width': [{ 'unit': 'px', 'value': 55 }],
    'height': [{ 'unit': 'px', 'value': 55 }],
    'background': 'rgba(0,0,0,0) url(/icons/save-52.png) no-repeat scroll 0 0',
    'cursor': 'pointer',
    'marginTop': [{ 'unit': 'px', 'value': 25 }]
  },
  'savebox': {
    'background': 'rgba(255,255,255,0.85) none repeat scroll 0 0',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'borderRadius': '5px',
    'display': 'none',
    'height': [{ 'unit': 'px', 'value': 95 }],
    'position': 'fixed',
    'right': [{ 'unit': 'px', 'value': 90 }],
    'width': [{ 'unit': 'px', 'value': 495 }],
    'zIndex': '1',
    'overflow': 'auto',
    'overflowY': 'hidden'
  },
  '#wrap': {
    'paddingLeft': [{ 'unit': 'px', 'value': 3 }],
    'color': '#333'
  },
  '#prodrightColumn #wrap h1': {
    'fontWeight': 'normal',
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'overflow': 'hidden'
  },
  '#prod-feedback': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'height': [{ 'unit': 'px', 'value': 20 }],
    'background': '#fafafa',
    'marginTop': [{ 'unit': 'px', 'value': 12 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }]
  },
  'rating': {
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 17 }]
  },
  'rating i': {
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 17 }]
  },
  'rating': {
    'background': 'url(/icons/star-grey-20.png)',
    'width': [{ 'unit': 'px', 'value': 90 }],
    'float': 'left',
    'marginTop': [{ 'unit': 'px', 'value': 1 }]
  },
  'rating': {
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 17 }]
  },
  'rating i': {
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 17 }]
  },
  'rating i': {
    'background': 'url(/icons/star-filled-20.png)'
  },
  'votecounts': {
    'lineHeight': [{ 'unit': 'px', 'value': 17 }],
    'float': 'left',
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }],
    'fontWeight': '500',
    'marginTop': [{ 'unit': 'px', 'value': 1 }]
  },
  'social': {
    'float': 'left'
  },
  'social divsave': {
    'background': 'url(/icons/save-24.png) no-repeat 0px 2.3px/85%',
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'social div': {
    'height': [{ 'unit': 'px', 'value': 24 }],
    'cursor': 'pointer',
    'width': [{ 'unit': 'px', 'value': 18 }],
    'height': [{ 'unit': 'px', 'value': 18 }],
    'backgroundSize': '18px 18px',
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'float': 'left'
  },
  'social div': {
    'display': 'inline-block',
    'fontWeight': '500',
    'marginLeft': [{ 'unit': 'px', 'value': 6 }]
  },
  'social div': {
    'height': [{ 'unit': 'px', 'value': 24 }],
    'cursor': 'pointer',
    'width': [{ 'unit': 'px', 'value': 18 }],
    'height': [{ 'unit': 'px', 'value': 18 }],
    'backgroundSize': '18px 18px',
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'float': 'left'
  },
  'social div': {
    'display': 'inline-block',
    'fontWeight': '500',
    'marginLeft': [{ 'unit': 'px', 'value': 6 }]
  },
  'prod-features': {
    'width': [{ 'unit': 'px', 'value': 384 }],
    'float': 'left',
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'pricing': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'pricing div': {
    'display': 'inline-block'
  },
  'features': {
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.3 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'features span:nth-child(1)': {
    'width': [{ 'unit': 'px', 'value': 120 }],
    'display': 'inline-block',
    'verticalAlign': 'top'
  },
  'features': {
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.3 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'features price': {
    'paddingLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'price': {
    'fontWeight': 'normal'
  },
  'price': {
    'color': '#666',
    'fontWeight': '500',
    'lineHeight': [{ 'unit': 'px', 'value': 18 }]
  },
  'seller-info': {
    'background': '#fafafa none repeat scroll 0 0',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'width': [{ 'unit': '%H', 'value': 0.385 }],
    'fontSize': [{ 'unit': '%V', 'value': 1.1 }],
    'float': 'right',
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 1.1 }]
  },
  'elementstyle': {
  },
  'seller-info p': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 0 }]
  },
  'seller-info p': {
    'height': [{ 'unit': 'px', 'value': 25 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }],
    'overflow': 'hidden'
  },
  'p': {
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'sellersrating': {
    'marginTop': [{ 'unit': 'px', 'value': 0 }],
    'marginLeft': [{ 'unit': 'px', 'value': 2 }]
  },
  'rating': {
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 17 }]
  },
  'rating i': {
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 17 }]
  },
  'rating': {
    'background': 'url(/icons/star-grey-20.png)',
    'width': [{ 'unit': 'px', 'value': 90 }],
    'float': 'left',
    'marginTop': [{ 'unit': 'px', 'value': 1 }]
  },
  'rating': {
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 17 }]
  },
  'rating i': {
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 17 }]
  },
  'rating i': {
    'background': 'url(/icons/star-filled-20.png)'
  },
  'votecounts': {
    'lineHeight': [{ 'unit': 'px', 'value': 17 }],
    'float': 'left',
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }],
    'fontWeight': '500',
    'marginTop': [{ 'unit': 'px', 'value': 1 }]
  },
  'cl_both': {
    'clear': 'both'
  },
  'sizebox': {
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#eee' }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'action-bttns': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 60 }]
  },
  '#addtocart': {
    'background': '#333',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#000' }],
    'color': '#fff',
    'display': 'block',
    'float': 'left',
    'height': [{ 'unit': 'px', 'value': 41 }],
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#444444' }],
    'width': [{ 'unit': 'px', 'value': 176 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'cursor': 'pointer',
    'borderRadius': '2px',
    'marginLeft': [{ 'unit': 'px', 'value': 25 }]
  },
  '#prodrightColumn': {
    'float': 'left',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.016 }, { 'unit': 'px', 'value': 0 }, { 'unit': '%H', 'value': 0.016 }]
  },
  'seller-guarantee': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'background': '#fafafa',
    'height': [{ 'unit': 'px', 'value': 60 }],
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'seller-guarantee icon': {
    'fontSize': [{ 'unit': 'em', 'value': 4.2 }]
  },
  'seller-guarantee div': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'verticalAlign': 'top',
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  '[data-icon]:before': {
    'fontFamily': '"iconpack"!important',
    'content': 'attr(data-icon)',
    'fontStyle': 'normal!important',
    'fontWeight': 'normal!important',
    'fontVariant': 'normal!important',
    'textTransform': 'none!important',
    'speak': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale'
  },
  '[data-icon]:before': {
    'fontFamily': '"iconpack"!important',
    'content': 'attr(data-icon)',
    'fontStyle': 'normal!important',
    'fontWeight': 'normal!important',
    'fontVariant': 'normal!important',
    'textTransform': 'none!important',
    'speak': 'none',
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'WebkitFontSmoothing': 'antialiased',
    'MozOsxFontSmoothing': 'grayscale'
  },
  'seller-guarantee txt': {
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'textAlign': 'center',
    'marginRight': [{ 'unit': 'px', 'value': 29 }],
    'marginLeft': [{ 'unit': 'px', 'value': -5 }]
  },
  'seller-guarantee div': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'verticalAlign': 'top',
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'seller-guarantee txt': {
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'textAlign': 'center',
    'marginRight': [{ 'unit': 'px', 'value': 29 }],
    'marginLeft': [{ 'unit': 'px', 'value': -5 }]
  },
  'seller-guarantee div': {
    'width': [{ 'unit': 'px', 'value': 50 }],
    'height': [{ 'unit': 'px', 'value': 50 }],
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'verticalAlign': 'top',
    'marginLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  '#buynow': {
    'background': '#3498db none repeat scroll 0 0',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#004b91' }],
    'color': '#fff',
    'cursor': 'pointer',
    'float': 'left',
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'height': [{ 'unit': 'px', 'value': 13 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'padding': [{ 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 13 }, { 'unit': 'px', 'value': 50 }],
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#999' }],
    'width': [{ 'unit': 'px', 'value': 78 }],
    'borderRadius': '2px'
  },
  '#addtocart': {
    'background': '#333',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#000' }],
    'color': '#fff',
    'display': 'block',
    'float': 'left',
    'height': [{ 'unit': 'px', 'value': 41 }],
    'textShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': '#444444' }],
    'width': [{ 'unit': 'px', 'value': 176 }],
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'em', 'value': 1.5 }],
    'cursor': 'pointer',
    'borderRadius': '2px',
    'marginLeft': [{ 'unit': 'px', 'value': 25 }]
  },
  'action-bttns': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 60 }]
  },
  'description': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }]
  },
  'ui-corner-all': {
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'ui-tabs ui-tabs-nav': {
    'textAlign': 'center',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#aaa' }]
  },
  'ui-tabs ui-tabs-nav': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'em', 'value': 0.2 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.2 }]
  },
  'ui-corner-all': {
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'ui-corner-all': {
    'borderBottomRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-bottom': {
    'borderBottomRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-right': {
    'borderBottomRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-br': {
    'borderBottomRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-all': {
    'borderBottomLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-bottom': {
    'borderBottomLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-left': {
    'borderBottomLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-bl': {
    'borderBottomLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-all': {
    'borderTopRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-top': {
    'borderTopRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-right': {
    'borderTopRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-tr': {
    'borderTopRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-all': {
    'borderTopLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-top': {
    'borderTopLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-left': {
    'borderTopLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-tl': {
    'borderTopLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-widget-header': {
    'background': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'ui-corner-all': {
    'borderBottomRightRadius': '4px'
  },
  'ui-corner-bottom': {
    'borderBottomRightRadius': '4px'
  },
  'ui-corner-right': {
    'borderBottomRightRadius': '4px'
  },
  'ui-corner-br': {
    'borderBottomRightRadius': '4px'
  },
  'ui-corner-all': {
    'borderBottomLeftRadius': '4px'
  },
  'ui-corner-bottom': {
    'borderBottomLeftRadius': '4px'
  },
  'ui-corner-left': {
    'borderBottomLeftRadius': '4px'
  },
  'ui-corner-bl': {
    'borderBottomLeftRadius': '4px'
  },
  'ui-corner-all': {
    'borderTopRightRadius': '4px'
  },
  'ui-corner-top': {
    'borderTopRightRadius': '4px'
  },
  'ui-corner-right': {
    'borderTopRightRadius': '4px'
  },
  'ui-corner-tr': {
    'borderTopRightRadius': '4px'
  },
  'ui-corner-all': {
    'borderTopLeftRadius': '4px'
  },
  'ui-corner-top': {
    'borderTopLeftRadius': '4px'
  },
  'ui-corner-left': {
    'borderTopLeftRadius': '4px'
  },
  'ui-corner-tl': {
    'borderTopLeftRadius': '4px'
  },
  'ui-widget-header': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#aaaaaa' }],
    'background': '#cccccc url(images/ui-bg_highlight-soft_75_cccccc_1x100.png) 50% 50% repeat-x',
    'color': '#222222',
    'fontWeight': 'bold'
  },
  'ui-helper-clearfix': {
    'minHeight': [{ 'unit': 'px', 'value': 0 }]
  },
  'ui-helper-reset': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'outline': '0',
    'lineHeight': [{ 'unit': 'px', 'value': 1.3 }],
    'textDecoration': 'none',
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    'listStyle': 'none'
  },
  'ui-tabs ui-tabs-nav liui-tabs-active': {
    'marginBottom': [{ 'unit': 'px', 'value': -4 }],
    'background': '#fff',
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }]
  },
  'ui-tabs ui-tabs-nav liui-tabs-active': {
    'marginBottom': [{ 'unit': 'px', 'value': -1 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 1 }]
  },
  'ui-tabs ui-tabs-nav li': {
    'marginBottom': [{ 'unit': 'px', 'value': -3 }]
  },
  'ui-tabs ui-tabs-nav li': {
    'float': 'none!important',
    'display': 'inline-block'
  },
  'ui-tabs ui-tabs-nav li': {
    'listStyle': 'none',
    'float': 'left',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderBottomWidth': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'nowrap'
  },
  'ui-state-default': {
    'background': '#f8f8f8'
  },
  'ui-widget-content ui-state-default': {
    'background': '#f8f8f8'
  },
  'ui-widget-header ui-state-default': {
    'background': '#f8f8f8'
  },
  'ui-state-active': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#aaaaaa' }],
    'background': '#ffffff url(images/ui-bg_glass_65_ffffff_1x400.png) 50% 50% repeat-x',
    'fontWeight': 'normal',
    'color': '#212121'
  },
  'ui-widget-content ui-state-active': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#aaaaaa' }],
    'background': '#ffffff url(images/ui-bg_glass_65_ffffff_1x400.png) 50% 50% repeat-x',
    'fontWeight': 'normal',
    'color': '#212121'
  },
  'ui-widget-header ui-state-active': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#aaaaaa' }],
    'background': '#ffffff url(images/ui-bg_glass_65_ffffff_1x400.png) 50% 50% repeat-x',
    'fontWeight': 'normal',
    'color': '#212121'
  },
  'ui-state-default': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d3d3d3' }],
    'background': '#e6e6e6 url(images/ui-bg_glass_75_e6e6e6_1x400.png) 50% 50% repeat-x',
    'fontWeight': 'normal',
    'color': '#555555'
  },
  'ui-widget-content ui-state-default': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d3d3d3' }],
    'background': '#e6e6e6 url(images/ui-bg_glass_75_e6e6e6_1x400.png) 50% 50% repeat-x',
    'fontWeight': 'normal',
    'color': '#555555'
  },
  'ui-widget-header ui-state-default': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d3d3d3' }],
    'background': '#e6e6e6 url(images/ui-bg_glass_75_e6e6e6_1x400.png) 50% 50% repeat-x',
    'fontWeight': 'normal',
    'color': '#555555'
  },
  'ui-corner-all': {
    'borderTopRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-top': {
    'borderTopRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-right': {
    'borderTopRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-tr': {
    'borderTopRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-all': {
    'borderTopLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-top': {
    'borderTopLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-left': {
    'borderTopLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-tl': {
    'borderTopLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-all': {
    'borderTopRightRadius': '4px'
  },
  'ui-corner-top': {
    'borderTopRightRadius': '4px'
  },
  'ui-corner-right': {
    'borderTopRightRadius': '4px'
  },
  'ui-corner-tr': {
    'borderTopRightRadius': '4px'
  },
  'ui-corner-all': {
    'borderTopLeftRadius': '4px'
  },
  'ui-corner-top': {
    'borderTopLeftRadius': '4px'
  },
  'ui-corner-left': {
    'borderTopLeftRadius': '4px'
  },
  'ui-corner-tl': {
    'borderTopLeftRadius': '4px'
  },
  'ul': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'li': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'user agent stylesheet li': {
    'display': 'list-item',
    'textAlign': '-webkit-match-parent'
  },
  'Inherited from ului-tabs-navui-helper-resetui-helper-clearfixui-widget-headerui-corner-all ui-tabs ui-tabs-nav': {
    'textAlign': 'center',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#aaa' }]
  },
  'ui-widget-header': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#aaaaaa' }],
    'background': '#cccccc url(images/ui-bg_highlight-soft_75_cccccc_1x100.png) 50% 50% repeat-x',
    'color': '#222222',
    'fontWeight': 'bold'
  },
  'ui-tabs ui-tabs-nav li': {
    'marginBottom': [{ 'unit': 'px', 'value': -3 }]
  },
  'ui-tabs ui-tabs-nav li': {
    'float': 'none!important',
    'display': 'inline-block'
  },
  'ui-tabs ui-tabs-nav li': {
    'listStyle': 'none',
    'float': 'left',
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'em', 'value': 0.2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'borderBottomWidth': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'whiteSpace': 'nowrap'
  },
  'ui-state-default': {
    'background': '#f8f8f8'
  },
  'ui-widget-content ui-state-default': {
    'background': '#f8f8f8'
  },
  'ui-widget-header ui-state-default': {
    'background': '#f8f8f8'
  },
  'ui-state-default': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d3d3d3' }],
    'background': '#e6e6e6 url(images/ui-bg_glass_75_e6e6e6_1x400.png) 50% 50% repeat-x',
    'fontWeight': 'normal',
    'color': '#555555'
  },
  'ui-widget-content ui-state-default': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d3d3d3' }],
    'background': '#e6e6e6 url(images/ui-bg_glass_75_e6e6e6_1x400.png) 50% 50% repeat-x',
    'fontWeight': 'normal',
    'color': '#555555'
  },
  'ui-widget-header ui-state-default': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d3d3d3' }],
    'background': '#e6e6e6 url(images/ui-bg_glass_75_e6e6e6_1x400.png) 50% 50% repeat-x',
    'fontWeight': 'normal',
    'color': '#555555'
  },
  'ui-corner-all': {
    'borderTopRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-top': {
    'borderTopRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-right': {
    'borderTopRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-tr': {
    'borderTopRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-all': {
    'borderTopLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-top': {
    'borderTopLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-left': {
    'borderTopLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-tl': {
    'borderTopLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-all': {
    'borderTopRightRadius': '4px'
  },
  'ui-corner-top': {
    'borderTopRightRadius': '4px'
  },
  'ui-corner-right': {
    'borderTopRightRadius': '4px'
  },
  'ui-corner-tr': {
    'borderTopRightRadius': '4px'
  },
  'ui-corner-all': {
    'borderTopLeftRadius': '4px'
  },
  'ui-corner-top': {
    'borderTopLeftRadius': '4px'
  },
  'ui-corner-left': {
    'borderTopLeftRadius': '4px'
  },
  'ui-corner-tl': {
    'borderTopLeftRadius': '4px'
  },
  'ul': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'li': {
    'listStyle': 'none',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ui-tabs ui-tabs-panel': {
    'display': 'block',
    'borderWidth': '0',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1.4 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1.4 }],
    'background': 'none'
  },
  'ui-corner-all': {
    'borderBottomRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-bottom': {
    'borderBottomRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-right': {
    'borderBottomRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-br': {
    'borderBottomRightRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-all': {
    'borderBottomLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-bottom': {
    'borderBottomLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-left': {
    'borderBottomLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-bl': {
    'borderBottomLeftRadius': 'none!important',
    'borderRadius': '0px'
  },
  'ui-corner-all': {
    'borderBottomRightRadius': '4px'
  },
  'ui-corner-bottom': {
    'borderBottomRightRadius': '4px'
  },
  'ui-corner-right': {
    'borderBottomRightRadius': '4px'
  },
  'ui-corner-br': {
    'borderBottomRightRadius': '4px'
  },
  'ui-corner-all': {
    'borderBottomLeftRadius': '4px'
  },
  'ui-corner-bottom': {
    'borderBottomLeftRadius': '4px'
  },
  'ui-corner-left': {
    'borderBottomLeftRadius': '4px'
  },
  'ui-corner-bl': {
    'borderBottomLeftRadius': '4px'
  },
  'ui-widget-content': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#aaaaaa' }],
    'background': '#ffffff 50% 50% repeat-x',
    'color': '#222222'
  },
  '#tbltodiv': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'tbltodiv': {
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'display': 'block',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  '#titletd': {
    'backgroundColor': '#F6F6F6',
    'borderColor': '#ccc',
    'borderStyle': 'solid',
    'borderWidth': '0 0 1px 1px',
    'color': '#444',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': 'bold',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'float': 'left',
    'lineHeight': [{ 'unit': 'px', 'value': 25 }]
  },
  'titletd': {
    'backgroundColor': '#F6F6F6',
    'borderColor': '#ccc',
    'borderStyle': 'solid',
    'borderWidth': '0 0 1px 1px',
    'color': '#444',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontWeight': 'bold',
    'height': [{ 'unit': 'px', 'value': 25 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'float': 'left',
    'lineHeight': [{ 'unit': 'px', 'value': 25 }]
  },
  '#spactd': {
    'backgroundColor': '#F6F6F6',
    'borderColor': '#ccc',
    'borderStyle': 'solid',
    'borderWidth': '0 1px 1px',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'color': '#555'
  },
  'spactd': {
    'backgroundColor': '#F6F6F6',
    'borderColor': '#ccc',
    'borderStyle': 'solid',
    'borderWidth': '0 1px 1px',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 10 }],
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'color': '#555'
  },
  '#tabs-2': {
    'textAlign': 'center'
  },
  'ui-tabs ui-tabs-panel': {
    'display': 'block',
    'borderWidth': '0',
    'padding': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1.4 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'em', 'value': 1.4 }],
    'background': 'none'
  },
  // category page
  'sortbyp': {
    'borderBottom': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#333' }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'lineHeight': [{ 'unit': 'px', 'value': 30 }],
    'marginTop': [{ 'unit': 'px', 'value': 25 }]
  },
  '#sortby': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'fontWeight': 'bold'
  },
  'filter': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'hover': {
    'padding': [{ 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 3 }],
    'borderRadius': '2px 2px 0 0',
    'background': '#666 none repeat scroll 0 0'
  },
  'hover': {
    'color': '#ed2f2f'
  },
  'filter': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'cursor': 'pointer',
    'paddingRight': [{ 'unit': 'px', 'value': 5 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'hover a': {
    'color': '#fff'
  },
  'a': {
    'color': '#333333',
    'textDecoration': 'none'
  },
  'new': {
    'background': 'rgba(0,0,0,0) url(/sprites/sprites.png) repeat scroll 0 0'
  },
  'img': {
    'background': 'rgba(0,0,0,0) url(/sprites/sprites.png) repeat scroll 0 0'
  },
  'span': {
    'background': 'rgba(0,0,0,0) url(/sprites/sprites.png) repeat scroll 0 0'
  },
  '#bullet': {
    'background': 'rgba(0,0,0,0) url(/sprites/sprites.png) repeat scroll 0 0'
  },
  'bullet': {
    'background': 'rgba(0,0,0,0) url(/sprites/sprites.png) repeat scroll 0 0'
  },
  '#next': {
    'background': 'rgba(0,0,0,0) url(/sprites/sprites.png) repeat scroll 0 0'
  },
  '#prev': {
    'background': 'rgba(0,0,0,0) url(/sprites/sprites.png) repeat scroll 0 0'
  },
  '#facebook': {
    'background': 'rgba(0,0,0,0) url(/sprites/sprites.png) repeat scroll 0 0'
  },
  '#twitter': {
    'background': 'rgba(0,0,0,0) url(/sprites/sprites.png) repeat scroll 0 0'
  },
  '#contact': {
    'background': 'rgba(0,0,0,0) url(/sprites/sprites.png) repeat scroll 0 0'
  },
  '#bagimg': {
    'background': 'rgba(0,0,0,0) url(/sprites/sprites.png) repeat scroll 0 0'
  },
  'browse_selected_link': {
    'background': 'rgba(0,0,0,0) url(/sprites/sprites.png) repeat scroll 0 0'
  },
  'browse_selected_link': {
    'backgroundAttachment': 'scroll',
    'backgroundPosition': '0 0',
    'backgroundRepeat': 'repeat',
    'bottom': [{ 'unit': 'px', 'value': -30 }],
    'color': '#ed1c24',
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 11 }],
    'left': [{ 'unit': 'px', 'value': -45 }],
    'marginRight': [{ 'unit': 'px', 'value': -15 }],
    'position': 'relative',
    'transition': 'left 0.5s ease 0.2s',
    'width': [{ 'unit': 'px', 'value': 22 }]
  },
  'browse_selected_link': {
    'backgroundAttachment': 'scroll',
    'backgroundPosition': '0 0',
    'backgroundRepeat': 'repeat',
    'bottom': [{ 'unit': 'px', 'value': -30 }],
    'color': '#ed1c24',
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 11 }],
    'left': [{ 'unit': 'px', 'value': -45 }],
    'marginRight': [{ 'unit': 'px', 'value': -15 }],
    'position': 'relative',
    'transition': 'left 0.5s ease 0.2s',
    'width': [{ 'unit': 'px', 'value': 22 }]
  },
  'filter': {
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'filter': {
    'marginLeft': [{ 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'cursor': 'pointer',
    'paddingRight': [{ 'unit': 'px', 'value': 5 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'shoestype:hover': {
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': -3 }, { 'unit': 'string', 'value': '#000' }],
    'overflow': 'none'
  },
  'selsize': {
    'boxShadow': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': -2 }, { 'unit': 'string', 'value': '#818080' }],
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }],
    'minWidth': [{ 'unit': 'px', 'value': 20 }],
    'minHeight': [{ 'unit': 'px', 'value': 20 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#E5E5E5' }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }],
    'textAlign': 'center'
  },
  'category_title': {
    'background': 'none repeat scroll 0 0 #fcfcfc',
    'borderColor': '#D4D4D4',
    'borderStyle': 'solid',
    'borderWidth': '1px',
    'fontFamily': 'Arial,sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'textAlign': 'center'
  },
  'cmn': {
    'background': '#fff none repeat scroll 0 0',
    'borderColor': '#d4d4d4',
    'borderStyle': 'solid',
    'borderWidth': '0 1px 1px',
    'fontSize': [{ 'unit': 'em', 'value': 1.2 }],
    'lineHeight': [{ 'unit': 'px', 'value': 23 }],
    'listStyle': 'outside none none',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }]
  },
  '#catleftColumn divboxshadow': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'accordion': {
    'cursor': 'pointer'
  },
  'category_title': {
    'background': 'none repeat scroll 0 0 #fcfcfc',
    'borderColor': '#D4D4D4',
    'borderStyle': 'solid',
    'borderWidth': '1px',
    'fontFamily': 'Arial,sans-serif',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'height': [{ 'unit': 'px', 'value': 35 }],
    'lineHeight': [{ 'unit': 'px', 'value': 35 }],
    'textAlign': 'center'
  },
  'mc': {
    'listStyle': 'none outside none',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }],
    'background': '#fff',
    'borderColor': '#d4d4d4',
    'borderWidth': '0 1px 1px',
    'borderStyle': 'solid',
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'transition': 'all 200ms'
  },
  'ulscroll': {
    'height': [{ 'unit': 'px', 'value': 175 }],
    'overflow': 'auto'
  },
  'ez-checkbox': {
    'zoom': '1',
    'height': [{ 'unit': 'px', 'value': 30 }],
    'float': 'left'
  },
  'ez-radio': {
    'zoom': '1',
    'height': [{ 'unit': 'px', 'value': 30 }],
    'float': 'left'
  },
  'label': {
    'fontWeight': 'normal !important'
  },
  'mc': {
    'listStyle': 'none outside none',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 10 }],
    'background': '#fff',
    'borderColor': '#d4d4d4',
    'borderWidth': '0 1px 1px',
    'borderStyle': 'solid',
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'transition': 'all 200ms'
  },
  'pages': {
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'marginRight': [{ 'unit': 'px', 'value': 2 }],
    'color': '#666'
  }
});
