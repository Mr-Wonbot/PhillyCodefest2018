/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var lua_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,6],$V2=[1,7],$V3=[1,8],$V4=[1,14],$V5=[1,9],$V6=[1,10],$V7=[1,11],$V8=[1,12],$V9=[1,17],$Va=[1,18],$Vb=[1,19],$Vc=[5,12,68,69],$Vd=[5,9,11,12,17,19,22,26,29,31,32,60,63,64,68,69],$Ve=[1,29],$Vf=[1,33],$Vg=[1,28],$Vh=[1,23],$Vi=[1,25],$Vj=[2,49],$Vk=[1,47],$Vl=[1,46],$Vm=[5,9,11,12,14,15,17,19,21,22,26,27,29,31,32,36,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,57,58,60,61,63,64,68,69],$Vn=[2,50],$Vo=[1,55],$Vp=[1,56],$Vq=[1,57],$Vr=[1,58],$Vs=[1,59],$Vt=[1,60],$Vu=[1,61],$Vv=[1,62],$Vw=[1,63],$Vx=[1,64],$Vy=[1,65],$Vz=[1,66],$VA=[1,67],$VB=[1,68],$VC=[1,69],$VD=[5,9,11,12,15,17,19,21,22,26,27,29,31,32,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,58,60,61,63,64,68,69],$VE=[5,9,11,12,15,17,19,21,22,26,27,29,31,32,36,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,58,60,61,63,64,68,69],$VF=[2,69],$VG=[1,82],$VH=[15,61],$VI=[21,61],$VJ=[1,93],$VK=[2,60],$VL=[1,114],$VM=[5,9,11,12,15,17,19,21,22,26,27,29,31,32,38,39,40,41,42,43,44,45,58,60,61,63,64,68,69],$VN=[5,9,11,12,15,17,19,21,22,26,27,29,31,32,38,39,40,41,42,43,44,45,46,47,48,58,60,61,63,64,68,69],$VO=[5,9,11,12,15,17,19,21,22,26,27,29,31,32,38,39,40,41,42,43,44,45,46,47,48,49,50,51,58,60,61,63,64,68,69],$VP=[1,139],$VQ=[1,140];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"statement_with_semicolon":8,"while":9,"e":10,"do":11,"end":12,"bracket_statements":13,"(":14,")":15,";":16,"repeat":17,"until":18,"for":19,"_":20,",":21,"IDENTIFIER":22,"in":23,"pairs":24,"dot_expr":25,"if":26,"then":27,"elif":28,"function":29,"parameters":30,"return":31,"local":32,"=":33,"identifiers":34,"access_array":35,".":36,"function_call":37,"or":38,"and":39,"<=":40,"<":41,">=":42,"==":43,"~=":44,">":45,"+":46,"-":47,"..":48,"*":49,"/":50,"%":51,"^":52,"not_expr":53,"!":54,"parentheses_expr":55,"parentheses_expr_":56,"[":57,"]":58,"exprs":59,"{":60,"}":61,"key_values":62,"NUMBER":63,"STRING_LITERAL":64,"type":65,"parameter":66,"types":67,"elseif":68,"else":69,"key_value":70,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"while",11:"do",12:"end",13:"bracket_statements",14:"(",15:")",16:";",17:"repeat",18:"until",19:"for",20:"_",21:",",22:"IDENTIFIER",23:"in",24:"pairs",26:"if",27:"then",29:"function",31:"return",32:"local",33:"=",36:".",38:"or",39:"and",40:"<=",41:"<",42:">=",43:"==",44:"~=",45:">",46:"+",47:"-",48:"..",49:"*",50:"/",51:"%",52:"^",54:"!",57:"[",58:"]",60:"{",61:"}",63:"NUMBER",64:"STRING_LITERAL",68:"elseif",69:"else"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[6,1],[6,5],[6,7],[6,4],[6,12],[6,12],[6,6],[6,5],[6,7],[8,2],[8,4],[8,2],[8,3],[8,3],[8,3],[8,1],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,2],[10,1],[53,2],[53,1],[25,3],[25,1],[35,4],[37,3],[37,4],[56,2],[56,3],[56,3],[56,1],[56,1],[56,1],[55,6],[55,3],[55,1],[55,1],[55,1],[65,1],[66,1],[30,3],[30,1],[30,0],[59,3],[59,1],[67,3],[67,1],[28,5],[28,4],[28,2],[34,3],[34,1],[62,3],[62,1],[70,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]];
break;
case 2:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 41: case 59:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["statements",$$[$0]]
break;
case 5:
this.$ = ["semicolon",$$[$0]];
break;
case 6:
this.$ = ["while",$$[$0-3],$$[$0-1]];
break;
case 7:
this.$ = ["do_while",$$[$0-5],$$[$0-2]];
break;
case 8:
this.$ = ["do_while",$$[$0],$$[$0-2]];
break;
case 9:
this.$ = ["foreach","Object",$$[$0-8],$$[$0-4],$$[$0-1]];
break;
case 10:
this.$ = ["foreach_with_index","Object",$$[$0-10],$$[$0-8],$$[$0-4],$$[$0-1]];
break;
case 11:
this.$ = ["if",$$[$0-4],$$[$0-2],$$[$0-1]];
break;
case 12:
this.$ = ["if",$$[$0-3],$$[$0-1]];
break;
case 13:
this.$ = ["function","public","Object",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 14:
this.$ = ["return",$$[$0]];
break;
case 15:
this.$ = ["initialize_var","Object",$$[$0-2],$$[$0]];
break;
case 16:
this.$ = ["initialize_empty_vars","Object",$$[$0]];
break;
case 17: case 18:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 19:
this.$ = [".",[$$[$0-2]].concat($$[$0])]
break;
case 21:
this.$ = ['||',$$[$0-2],$$[$0]];
break;
case 22:
this.$ = ['&&',$$[$0-2],$$[$0]];
break;
case 23: case 24: case 25: case 26: case 28: case 29: case 30: case 31: case 32: case 33: case 34: case 35:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 27:
this.$ = ["!=",$$[$0-2],$$[$0]];
break;
case 36:
this.$ = ["-",$$[$0]];
break;
case 38:
this.$ = ["!", [".",$$[$0]]];
break;
case 39:
this.$ = [".", $$[$0]];
break;
case 40: case 58: case 61: case 63: case 68:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 42:
this.$ = ["access_array",$$[$0-3],[$$[$0-1]]];
break;
case 43:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 44:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 45:
this.$ = ["initializer_list","Object",[]];
break;
case 46:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 47:
this.$ = ["associative_array","Object","Object",$$[$0-1]];
break;
case 48: case 49: case 50:
this.$ = yytext;
break;
case 51:
this.$ = ["anonymous_function","Object",$$[$0-3],$$[$0-1]];
break;
case 52:
this.$ = ["parentheses",$$[$0-1]];
break;
case 57:
this.$ = ["Object", $$[$0]];
break;
case 60:
this.$ = [];
break;
case 62: case 64: case 69: case 71:
this.$ = [$$[$0]];
break;
case 65:
this.$ = ["elif",$$[$0-3],$$[$0-1],$$[$0]]
break;
case 66:
this.$ = ["elif",$$[$0-2],$$[$0]]
break;
case 67:
this.$ = ["else",$$[$0]];
break;
case 70:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 72:
this.$ = [$$[$0-2],$$[$0]]
break;
}
},
table: [{3:1,4:2,6:3,8:4,9:$V0,11:$V1,17:$V2,19:$V3,22:$V4,26:$V5,29:$V6,31:$V7,32:$V8,35:13,37:15,56:16,60:$V9,63:$Va,64:$Vb},{1:[3]},{5:[1,20]},o($Vc,[2,3],{6:3,8:4,35:13,37:15,56:16,4:21,9:$V0,11:$V1,17:$V2,19:$V3,22:$V4,26:$V5,29:$V6,31:$V7,32:$V8,60:$V9,63:$Va,64:$Vb}),o($Vd,[2,5]),{10:22,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{13:[1,34]},{13:[1,35]},{20:[1,36],22:[1,37]},{10:38,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{22:[1,39]},{10:40,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{22:[1,41],34:42},{33:[1,43]},o([14,57],$Vj,{33:[1,44],36:[1,45]}),o($Vd,[2,20]),{14:$Vk,57:$Vl},{10:51,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,59:49,60:$V9,61:[1,48],62:50,63:$Va,64:[1,53],70:52},o($Vm,[2,48]),o($Vm,$Vn),{1:[2,1]},o($Vc,[2,2]),{11:[1,54],38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC},{10:70,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},o($VD,[2,37]),{14:$Ve,22:$Vf,25:71,29:$Vg,35:30,37:31,55:27,56:32,60:$V9,63:$Va,64:$Vb},o($VD,[2,39]),o($VD,[2,41],{36:[1,72]}),{14:[1,73]},{10:74,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},o($VE,[2,53]),o($VE,[2,54]),o($VE,[2,55],{14:$Vk,57:$Vl}),o($Vm,$Vj),{9:[1,75]},{18:[1,76]},{21:[1,77]},{21:[1,78]},{27:[1,79],38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC},{14:[1,80]},o($Vd,[2,14],{38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC}),o($Vd,$VF,{21:$VG,33:[1,81]}),o($Vd,[2,16]),{10:83,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:84,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{14:$Ve,22:$Vf,25:85,29:$Vg,35:30,37:31,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:86,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:51,14:$Ve,15:[1,87],22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,59:88,60:$V9,63:$Va,64:$Vb},o($Vm,[2,45]),{61:[1,89]},{21:[1,91],61:[1,90]},o($VH,[2,62],{21:[1,92],38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC}),o($VI,[2,71]),o([14,21,36,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,57,61],$Vn,{33:$VJ}),{4:95,6:3,7:94,8:4,9:$V0,11:$V1,17:$V2,19:$V3,22:$V4,26:$V5,29:$V6,31:$V7,32:$V8,35:13,37:15,56:16,60:$V9,63:$Va,64:$Vb},{10:96,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:97,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:98,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:99,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:100,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:101,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:102,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:103,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:104,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:105,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:106,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:107,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:108,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:109,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{10:110,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},o($VD,[2,36]),o($VD,[2,38]),{14:$Ve,22:$Vf,25:111,29:$Vg,35:30,37:31,55:27,56:32,60:$V9,63:$Va,64:$Vb},{15:$VK,22:$VL,30:112,66:113},{15:[1,115],38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC},{14:[1,116]},{10:117,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{22:[1,118]},{22:[1,119]},{4:95,6:3,7:120,8:4,9:$V0,11:$V1,17:$V2,19:$V3,22:$V4,26:$V5,29:$V6,31:$V7,32:$V8,35:13,37:15,56:16,60:$V9,63:$Va,64:$Vb},{15:$VK,22:$VL,30:121,66:113},{10:122,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{22:[1,124],34:123},o($Vd,[2,17],{38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC}),o($Vd,[2,18],{38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC}),o($Vd,[2,19]),{38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC,58:[1,125]},o($VE,[2,43]),{15:[1,126]},o($Vm,[2,46]),o($Vm,[2,47]),{64:[1,128],70:127},{10:51,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,59:129,60:$V9,63:$Va,64:$Vb},{10:130,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{12:[1,131]},o([12,68,69],[2,4]),o([5,9,11,12,15,17,19,21,22,26,27,29,31,32,38,58,60,61,63,64,68,69],[2,21],{39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC}),o([5,9,11,12,15,17,19,21,22,26,27,29,31,32,38,39,58,60,61,63,64,68,69],[2,22],{40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC}),o($VM,[2,23],{46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC}),o($VM,[2,24],{46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC}),o($VM,[2,25],{46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC}),o($VM,[2,26],{46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC}),o($VM,[2,27],{46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC}),o($VM,[2,28],{46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC}),o($VN,[2,29],{49:$Vz,50:$VA,51:$VB,52:$VC}),o($VN,[2,30],{49:$Vz,50:$VA,51:$VB,52:$VC}),o($VN,[2,31],{49:$Vz,50:$VA,51:$VB,52:$VC}),o($VO,[2,32],{52:$VC}),o($VO,[2,33],{52:$VC}),o($VO,[2,34],{52:$VC}),o($VD,[2,35]),o($VD,[2,40]),{15:[1,132]},{15:[2,59],21:[1,133]},o([15,21],[2,57]),o($VE,[2,52]),{10:134,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},o($Vd,[2,8],{38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC}),{23:[1,135]},{23:[1,136]},{12:[1,138],28:137,68:$VP,69:$VQ},{15:[1,141]},o($Vd,[2,15],{38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC}),o($Vd,[2,68]),o($Vd,$VF,{21:$VG}),o([5,9,11,12,15,17,19,21,22,26,27,29,31,32,33,36,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,58,60,61,63,64,68,69],[2,42]),o($VE,[2,44]),o($VI,[2,70]),{33:$VJ},o($VH,[2,61]),o($VI,[2,72],{38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC}),o($Vd,[2,6]),{4:95,6:3,7:142,8:4,9:$V0,11:$V1,17:$V2,19:$V3,22:$V4,26:$V5,29:$V6,31:$V7,32:$V8,35:13,37:15,56:16,60:$V9,63:$Va,64:$Vb},{15:$VK,22:$VL,30:143,66:113},{15:[1,144],38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC},{24:[1,145]},{24:[1,146]},{12:[1,147]},o($Vd,[2,12]),{10:148,14:$Ve,22:$Vf,25:26,29:$Vg,35:30,37:31,47:$Vh,53:24,54:$Vi,55:27,56:32,60:$V9,63:$Va,64:$Vb},{4:95,6:3,7:149,8:4,9:$V0,11:$V1,17:$V2,19:$V3,22:$V4,26:$V5,29:$V6,31:$V7,32:$V8,35:13,37:15,56:16,60:$V9,63:$Va,64:$Vb},{4:95,6:3,7:150,8:4,9:$V0,11:$V1,17:$V2,19:$V3,22:$V4,26:$V5,29:$V6,31:$V7,32:$V8,35:13,37:15,56:16,60:$V9,63:$Va,64:$Vb},{12:[1,151]},{15:[2,58]},{16:[1,152]},{14:[1,153]},{14:[1,154]},o($Vd,[2,11]),{27:[1,155],38:$Vo,39:$Vp,40:$Vq,41:$Vr,42:$Vs,43:$Vt,44:$Vu,45:$Vv,46:$Vw,47:$Vx,48:$Vy,49:$Vz,50:$VA,51:$VB,52:$VC},{12:[2,67]},{12:[1,156]},o($VE,[2,51]),o($Vd,[2,7]),{14:$Ve,22:$Vf,25:157,29:$Vg,35:30,37:31,55:27,56:32,60:$V9,63:$Va,64:$Vb},{14:$Ve,22:$Vf,25:158,29:$Vg,35:30,37:31,55:27,56:32,60:$V9,63:$Va,64:$Vb},{4:95,6:3,7:159,8:4,9:$V0,11:$V1,17:$V2,19:$V3,22:$V4,26:$V5,29:$V6,31:$V7,32:$V8,35:13,37:15,56:16,60:$V9,63:$Va,64:$Vb},o($Vd,[2,13]),{15:[1,160]},{15:[1,161]},{12:[2,66],28:162,68:$VP,69:$VQ},{11:[1,163]},{11:[1,164]},{12:[2,65]},{4:95,6:3,7:165,8:4,9:$V0,11:$V1,17:$V2,19:$V3,22:$V4,26:$V5,29:$V6,31:$V7,32:$V8,35:13,37:15,56:16,60:$V9,63:$Va,64:$Vb},{4:95,6:3,7:166,8:4,9:$V0,11:$V1,17:$V2,19:$V3,22:$V4,26:$V5,29:$V6,31:$V7,32:$V8,35:13,37:15,56:16,60:$V9,63:$Va,64:$Vb},{12:[1,167]},{12:[1,168]},o($Vd,[2,9]),o($Vd,[2,10])],
defaultActions: {20:[2,1],143:[2,58],149:[2,67],162:[2,65]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace and line comments */
break;
case 1:return 63
break;
case 2:return 64
break;
case 3:return "$"
break;
case 4:return "function"
break;
case 5:return "end"
break;
case 6:return "then"
break;
case 7:return 68
break;
case 8:return 26
break;
case 9:return 69
break;
case 10:return 31
break;
case 11:return 9
break;
case 12:return 19
break;
case 13:return 32
break;
case 14:return 17
break;
case 15:return 18
break;
case 16:return 'of'
break;
case 17:return 'not'
break;
case 18:return 21
break;
case 19:return 48
break;
case 20:return 36
break;
case 21:return ':'
break;
case 22:return 39
break;
case 23:return 38
break;
case 24:return 42
break;
case 25:return 45
break;
case 26:return 40
break;
case 27:return 41
break;
case 28:return 44
break;
case 29:return 43
break;
case 30:return 33
break;
case 31:return '*='
break;
case 32:return 49
break;
case 33:return 50
break;
case 34:return 51
break;
case 35:return 47
break;
case 36:return 46
break;
case 37:return 52
break;
case 38:return 60
break;
case 39:return 61
break;
case 40:return 57
break;
case 41:return 58
break;
case 42:return 14
break;
case 43:return 15
break;
case 44:return 20
break;
case 45:return 24
break;
case 46:return 23
break;
case 47:return 11
break;
case 48:return 22
break;
case 49:return 5
break;
case 50:return 'INVALID'
break;
}
},
rules: [/^(?:(\s+|--+.*\n))/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?:function\b)/,/^(?:end\b)/,/^(?:then\b)/,/^(?:elseif\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:while\b)/,/^(?:for\b)/,/^(?:local\b)/,/^(?:repeat\b)/,/^(?:until\b)/,/^(?:of\b)/,/^(?:not\b)/,/^(?:,)/,/^(?:\.\.)/,/^(?:\.)/,/^(?::)/,/^(?:and\b)/,/^(?:or\b)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:~=)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:_\b)/,/^(?:pairs\b)/,/^(?:in\b)/,/^(?:do\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = lua_parser;
exports.Parser = lua_parser.Parser;
exports.parse = function () { return lua_parser.parse.apply(lua_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}