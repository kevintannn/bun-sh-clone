import{g as b}from"./index-22F_eGkf.js";function f(r,a){for(var o=0;o<a.length;o++){const t=a[o];if(typeof t!="string"&&!Array.isArray(t)){for(const e in t)if(e!=="default"&&!(e in r)){const n=Object.getOwnPropertyDescriptor(t,e);n&&Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:()=>t[e]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var s,u;function g(){if(u)return s;u=1,s=r,r.displayName="pascaligo",r.aliases=[];function r(a){(function(o){var t=/\((?:[^()]|\((?:[^()]|\([^()]*\))*\))*\)/.source,e=/(?:\b\w+(?:<braces>)?|<braces>)/.source.replace(/<braces>/g,function(){return t}),n=o.languages.pascaligo={comment:/\(\*[\s\S]+?\*\)|\/\/.*/,string:{pattern:/(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1|\^[a-z]/i,greedy:!0},"class-name":[{pattern:RegExp(/(\btype\s+\w+\s+is\s+)<type>/.source.replace(/<type>/g,function(){return e}),"i"),lookbehind:!0,inside:null},{pattern:RegExp(/<type>(?=\s+is\b)/.source.replace(/<type>/g,function(){return e}),"i"),inside:null},{pattern:RegExp(/(:\s*)<type>/.source.replace(/<type>/g,function(){return e})),lookbehind:!0,inside:null}],keyword:{pattern:/(^|[^&])\b(?:begin|block|case|const|else|end|fail|for|from|function|if|is|nil|of|remove|return|skip|then|type|var|while|with)\b/i,lookbehind:!0},boolean:{pattern:/(^|[^&])\b(?:False|True)\b/i,lookbehind:!0},builtin:{pattern:/(^|[^&])\b(?:bool|int|list|map|nat|record|string|unit)\b/i,lookbehind:!0},function:/\b\w+(?=\s*\()/,number:[/%[01]+|&[0-7]+|\$[a-f\d]+/i,/\b\d+(?:\.\d+)?(?:e[+-]?\d+)?(?:mtz|n)?/i],operator:/->|=\/=|\.\.|\*\*|:=|<[<=>]?|>[>=]?|[+\-*\/]=?|[@^=|]|\b(?:and|mod|or)\b/,punctuation:/\(\.|\.\)|[()\[\]:;,.{}]/},p=["comment","keyword","builtin","operator","punctuation"].reduce(function(i,c){return i[c]=n[c],i},{});n["class-name"].forEach(function(i){i.inside=p})})(a)}return s}var l=g();const d=b(l),y=f({__proto__:null,default:d},[l]);export{y as p};
