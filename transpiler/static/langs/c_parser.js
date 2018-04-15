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
var c_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,14],$V2=[1,5],$V3=[1,13],$V4=[1,8],$V5=[1,9],$V6=[1,10],$V7=[1,11],$V8=[1,12],$V9=[1,15],$Va=[1,16],$Vb=[5,19,37],$Vc=[1,28],$Vd=[12,63],$Ve=[2,72],$Vf=[2,73],$Vg=[1,42],$Vh=[1,53],$Vi=[1,51],$Vj=[1,54],$Vk=[1,44],$Vl=[1,46],$Vm=[1,55],$Vn=[1,56],$Vo=[1,58],$Vp=[2,89],$Vq=[1,63],$Vr=[1,64],$Vs=[15,20],$Vt=[5,11,12,17,19,23,25,28,29,31,32,37,40,42],$Vu=[1,77],$Vv=[1,85],$Vw=[1,86],$Vx=[1,87],$Vy=[1,88],$Vz=[1,89],$VA=[1,90],$VB=[1,91],$VC=[1,92],$VD=[1,93],$VE=[1,94],$VF=[1,95],$VG=[1,96],$VH=[1,97],$VI=[1,98],$VJ=[15,19,20,36,51,52,53,54,55,56,57,58,59,60,61,62,63,64,71,77],$VK=[13,15,19,20,36,51,52,53,54,55,56,57,58,59,60,61,62,63,64,69,71,77],$VL=[2,79],$VM=[5,11,12,17,19,23,25,28,29,31,32,37,40,42,80],$VN=[15,19],$VO=[15,19,77],$VP=[15,19,20,36,51,52,53,54,56,58,59,71,77],$VQ=[15,19,20,36,51,52,53,54,55,56,57,58,59,71,77],$VR=[15,19,20,36,51,52,53,54,55,56,57,58,59,60,61,71,77],$VS=[15,77],$VT=[1,178],$VU=[1,181],$VV=[19,39];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"access_modifier":8,"public":9,"private":10,"#define":11,"IDENTIFIER":12,"(":13,"exprs":14,")":15,"expr":16,"struct":17,"{":18,"}":19,";":20,"type":21,"parameters":22,"void":23,"statement_with_semicolon":24,"while":25,"e":26,"bracket_statements":27,"do":28,"switch":29,"case_statements":30,"for":31,"if":32,"elif":33,"case_statement":34,"case":35,":":36,"break":37,"case_statements_":38,"default":39,"return":40,"=":41,"const":42,"access_array":43,"identifiers":44,"++":45,"--":46,"+=":47,"-=":48,"*=":49,"/=":50,"?":51,"||":52,"&&":53,"<=":54,"<":55,">=":56,">":57,"==":58,"!=":59,"+":60,"-":61,"%":62,"*":63,"/":64,"not_expr":65,"!":66,"dot_expr":67,"parentheses_expr":68,".":69,"[":70,"]":71,"function_call":72,"parentheses_expr_":73,"NUMBER":74,"STRING_LITERAL":75,"parameter":76,",":77,"&":78,"types":79,"else":80,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"public",10:"private",11:"#define",12:"IDENTIFIER",13:"(",15:")",17:"struct",18:"{",19:"}",20:";",23:"void",25:"while",28:"do",29:"switch",31:"for",32:"if",35:"case",36:":",37:"break",39:"default",40:"return",41:"=",42:"const",45:"++",46:"--",47:"+=",48:"-=",49:"*=",50:"/=",51:"?",52:"||",53:"&&",54:"<=",55:"<",56:">=",57:">",58:"==",59:"!=",60:"+",61:"-",62:"%",63:"*",64:"/",66:"!",69:".",70:"[",71:"]",74:"NUMBER",75:"STRING_LITERAL",77:",",78:"&",80:"else"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[8,1],[8,1],[6,8],[6,6],[6,8],[6,8],[6,2],[6,5],[6,7],[6,7],[6,9],[6,6],[6,5],[34,6],[38,2],[38,1],[30,4],[30,1],[24,3],[24,4],[24,2],[24,4],[24,5],[24,2],[24,2],[24,3],[24,3],[24,2],[24,2],[24,3],[24,3],[24,3],[24,3],[26,5],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,3],[26,4],[26,4],[26,3],[26,3],[26,2],[26,1],[65,2],[65,1],[67,3],[67,1],[43,4],[68,1],[68,1],[68,3],[68,1],[73,2],[73,3],[73,1],[73,1],[73,1],[72,3],[72,4],[21,1],[21,1],[76,3],[76,2],[76,4],[22,3],[22,1],[22,0],[14,3],[14,1],[16,2],[16,1],[79,3],[79,1],[33,7],[33,2],[44,3],[44,1],[27,3],[27,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2: case 19:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 20: case 59: case 78:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["statements",$$[$0]]
break;
case 7:
this.$ = ["macro",$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 8:
this.$ = ["struct",$$[$0-4],$$[$0-2]]
break;
case 9:
this.$ = ["function","public",$$[$0-7],$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 10:
this.$ = ["function","public",$$[$0-7],$$[$0-6],[],$$[$0-1]];
break;
case 11: case 91:
this.$ = ["semicolon",$$[$0-1]];
break;
case 12:
this.$ = ["while",$$[$0-2],$$[$0]];
break;
case 13:
this.$ = ["do_while",$$[$0-5],$$[$0-2]];
break;
case 14:
this.$ = ["switch",$$[$0-4],$$[$0-1]];
break;
case 15:
this.$ = ["for",$$[$0-6],$$[$0-4],$$[$0-2],$$[$0]];
break;
case 16:
this.$ = ["if",$$[$0-3],$$[$0-1],$$[$0]];
break;
case 17:
this.$ = ["if",$$[$0-2],$$[$0]];
break;
case 18:
this.$ = ["case",$$[$0-4],$$[$0-2]]
break;
case 21:
this.$ = $$[$0-3].concat([["default",$$[$0]]])
break;
case 23: case 70:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 24: case 71:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 25:
this.$ = ["return",$$[$0]];
break;
case 26:
this.$ = ["initialize_var",$$[$0-3],$$[$0-2],$$[$0]];
break;
case 27:
this.$ = ["initialize_constant",$$[$0-3],$$[$0-2],$$[$0]];
break;
case 28:
return ["set_array_size",$$[$0-1],$$[$0][1],$$[$0][2]];
break;
case 29:
this.$ = ["initialize_empty_vars",$$[$0-1],$$[$0]];
break;
case 30: case 31:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 32: case 33:
this.$ = [$$[$0],$$[$0-1]];
break;
case 34: case 35: case 36: case 37: case 39: case 40: case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 49: case 52: case 53:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 38:
this.$ = ["ternary_operator",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 50:
this.$ = [">>",$$[$0-3],$$[$0-1]];
break;
case 51:
this.$ = ["<<",$$[$0-3],$$[$0-1]];
break;
case 54:
this.$ = ["-",$$[$0]];
break;
case 56:
this.$ = ["!", [".",$$[$0]]];
break;
case 57:
this.$ = [".", $$[$0]];
break;
case 58: case 77: case 80: case 84: case 88:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 60:
this.$ = ["access_array",$$[$0-3],[$$[$0-1]]];
break;
case 63:
this.$ = ["parentheses",$$[$0-1]];
break;
case 65:
this.$ = ["initializer_list","Object",[]];
break;
case 66:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 67: case 68: case 69:
this.$ = yytext;
break;
case 74:
this.$ = ["ref_parameter",$$[$0-2],$$[$0]]
break;
case 75:
this.$ = [$$[$0-1],$$[$0]];
break;
case 76:
this.$ = [[$$[$0-3],"[]"],$$[$0-2]];
break;
case 79:
this.$ = [];
break;
case 81: case 83: case 85: case 89:
this.$ = [$$[$0]];
break;
case 82:
this.$ = ["function_call_ref",$$[$0]];
break;
case 86:
this.$ = ["elif",$$[$0-3],$$[$0-1],$$[$0]]
break;
case 87:
this.$ = ["else",$$[$0]];
break;
case 90:
this.$= $$[$0-1];
break;
}
},
table: [{3:1,4:2,6:3,11:$V0,12:$V1,17:$V2,21:6,23:$V3,24:7,25:$V4,28:$V5,29:$V6,31:$V7,32:$V8,40:$V9,42:$Va,43:17},{1:[3]},{5:[1,18]},o($Vb,[2,3],{6:3,21:6,24:7,43:17,4:19,11:$V0,12:$V1,17:$V2,23:$V3,25:$V4,28:$V5,29:$V6,31:$V7,32:$V8,40:$V9,42:$Va}),{12:[1,20]},{12:[1,21]},{12:[1,22],43:23,44:24},{20:[1,25]},{13:[1,26]},{12:$V1,18:$Vc,21:30,23:$V3,24:29,27:27,40:$V9,42:$Va,43:17},{13:[1,31]},{13:[1,32]},{13:[1,33]},o($Vd,$Ve),{12:$Vf,13:[1,34],41:[1,35],45:[1,36],46:[1,37],47:[1,38],48:[1,39],49:[1,40],50:[1,41],70:$Vg},{12:$Vh,13:$Vi,18:$Vj,26:43,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vo,21:57,23:$V3},{41:[1,59]},{1:[2,1]},o($Vb,[2,2]),{13:[1,60]},{18:[1,61]},{13:[1,62],20:$Vp,41:$Vq,70:$Vg,77:$Vr},o($Vs,[2,28]),o($Vs,[2,29]),o($Vt,[2,11]),{12:$Vh,13:$Vi,18:$Vj,26:65,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{25:[1,66]},{4:68,6:3,7:67,11:$V0,12:$V1,17:$V2,21:6,23:$V3,24:7,25:$V4,28:$V5,29:$V6,31:$V7,32:$V8,40:$V9,42:$Va,43:17},{20:[1,69]},{12:[1,70],43:23,44:24},{12:$Vh,13:$Vi,18:$Vj,26:71,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$V1,21:30,23:$V3,24:72,40:$V9,42:$Va,43:17},{12:$Vh,13:$Vi,18:$Vj,26:73,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,14:75,15:[1,74],16:76,18:$Vj,26:78,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn,78:$Vu},{12:$Vh,13:$Vi,18:$Vj,26:79,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},o($Vs,[2,32]),o($Vs,[2,33]),{12:$Vh,13:$Vi,18:$Vj,26:80,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:81,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:82,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:83,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:84,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},o($Vs,[2,25],{51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),{12:$Vh,13:$Vi,18:$Vj,26:99,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},o($VJ,[2,55]),{12:$Vh,13:$Vi,18:$Vj,43:49,67:100,68:48,72:50,73:52,74:$Vm,75:$Vn},o($VJ,[2,57]),o($VJ,[2,59],{13:[1,102],69:[1,101]}),o($VK,[2,61]),o($VK,[2,62]),{12:$Vh,13:$Vi,18:$Vj,26:103,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},o($VK,[2,64]),o($VK,[2,68],{70:$Vg}),{12:$Vh,13:$Vi,14:105,16:76,18:$Vj,19:[1,104],26:78,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn,78:$Vu},o($VK,[2,67]),o($VK,[2,69]),{12:[1,106]},o($Vd,$Vf),{12:$Vh,13:$Vi,18:$Vj,26:107,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,14:108,16:76,18:$Vj,26:78,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn,78:$Vu},{4:68,6:3,7:109,11:$V0,12:$V1,17:$V2,21:6,23:$V3,24:7,25:$V4,28:$V5,29:$V6,31:$V7,32:$V8,40:$V9,42:$Va,43:17},{12:$Vo,15:$VL,21:113,22:110,23:[1,111],76:112},{12:$Vh,13:$Vi,18:$Vj,26:114,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:[1,116],44:115},{15:[1,117],51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI},{13:[1,118]},{19:[1,119]},o([19,37],[2,4]),o($VM,[2,91]),o($Vs,$Vp,{41:$Vq,70:$Vg,77:$Vr}),{15:[1,120],51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI},{20:[1,121]},{15:[1,122],51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI},o($Vs,[2,23]),{15:[1,123]},o($VN,[2,81],{77:[1,124]}),{12:$Vh,13:$Vi,18:$Vj,26:125,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},o($VO,[2,83],{51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),o($Vs,[2,31],{51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),o($Vs,[2,34],{51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),o($Vs,[2,35],{51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),o($Vs,[2,36],{51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),o($Vs,[2,37],{51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),{51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI,71:[1,126]},{12:$Vh,13:$Vi,18:$Vj,26:127,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:128,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:129,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:130,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:131,43:49,55:[1,132],61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:133,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:134,43:49,57:[1,135],61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:136,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:137,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:138,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:139,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:140,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:141,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,18:$Vj,26:142,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},o($VJ,[2,54]),o($VJ,[2,56]),{12:$Vh,13:$Vi,18:$Vj,43:49,67:143,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$Vh,13:$Vi,14:145,15:[1,144],16:76,18:$Vj,26:78,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn,78:$Vu},{15:[1,146],51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI},o($VK,[2,65]),{19:[1,147]},{41:[1,148]},o($Vs,[2,30],{51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),{15:[1,149]},{19:[1,150]},{15:[1,151]},o($Vd,$Ve,{15:[1,152]}),{15:[2,78],77:[1,153]},{12:[1,155],63:[1,154]},o($Vs,[2,26],{51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),o($Vs,[2,88]),o($Vs,$Vp,{77:$Vr}),{12:$V1,18:$Vc,21:30,23:$V3,24:29,27:156,40:$V9,42:$Va,43:17},{12:$Vh,13:$Vi,18:$Vj,26:157,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},o($VM,[2,90]),{18:[1,158]},{12:$Vh,13:$Vi,18:$Vj,26:159,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$V1,18:$Vc,21:30,23:$V3,24:29,27:160,40:$V9,42:$Va,43:17},o($Vs,[2,24]),{12:$Vh,13:$Vi,14:161,16:76,18:$Vj,26:78,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn,78:$Vu},o($VO,[2,82],{51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),o([13,15,19,20,36,41,51,52,53,54,55,56,57,58,59,60,61,62,63,64,69,71,77],[2,60]),{36:[1,162],51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI},o([15,19,20,36,51,52,71,77],[2,39],{53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),o([15,19,20,36,51,52,53,71,77],[2,40],{54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),o($VP,[2,41],{55:$Vz,57:$VB,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),o($VQ,[2,42],{60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),{12:$Vh,13:$Vi,18:$Vj,26:163,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},o($VP,[2,43],{55:$Vz,57:$VB,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),o($VQ,[2,44],{60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),{12:$Vh,13:$Vi,18:$Vj,26:164,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},o($VP,[2,45],{55:$Vz,57:$VB,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),o($VP,[2,46],{55:$Vz,57:$VB,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),o($VR,[2,47],{62:$VG,63:$VH,64:$VI}),o($VR,[2,48],{62:$VG,63:$VH,64:$VI}),o($VJ,[2,49]),o($VJ,[2,52]),o($VJ,[2,53]),o($VJ,[2,58]),o($VK,[2,70]),{15:[1,165]},o($VK,[2,63]),o($VK,[2,66]),{12:$Vh,13:$Vi,18:$Vj,26:166,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{13:[1,167]},{20:[1,168]},{18:[1,169]},{18:[1,170]},{12:$Vo,15:$VL,21:113,22:171,23:$V3,76:112},{12:[1,172]},o($VS,[2,75],{70:[1,173]}),o($Vt,[2,12]),{15:[1,174],51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI},{30:175,34:177,35:$VT,38:176},{20:[1,179],51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI},o($Vt,[2,17],{33:180,80:$VU}),o($VN,[2,80]),{12:$Vh,13:$Vi,18:$Vj,26:182,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},o($VQ,[2,51],{60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),o($VQ,[2,50],{60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),o($VK,[2,71]),o($Vs,[2,27],{51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),{12:$Vh,13:$Vi,16:183,18:$Vj,26:78,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn,78:$Vu},o($Vt,[2,8]),{4:68,6:3,7:184,11:$V0,12:$V1,17:$V2,21:6,23:$V3,24:7,25:$V4,28:$V5,29:$V6,31:$V7,32:$V8,40:$V9,42:$Va,43:17},{4:68,6:3,7:185,11:$V0,12:$V1,17:$V2,21:6,23:$V3,24:7,25:$V4,28:$V5,29:$V6,31:$V7,32:$V8,40:$V9,42:$Va,43:17},{15:[2,77]},o($VS,[2,74]),{71:[1,186]},{20:[1,187]},{19:[1,188]},{19:[2,22],39:[1,189]},o($VV,[2,20],{34:177,38:190,35:$VT}),{12:$Vh,13:$Vi,18:$Vj,26:191,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{12:$V1,21:30,23:$V3,24:192,40:$V9,42:$Va,43:17},o($Vt,[2,16]),{12:$V1,18:$Vc,21:30,23:$V3,24:29,27:194,32:[1,193],40:$V9,42:$Va,43:17},o([15,19,20,36,71,77],[2,38],{51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI}),{15:[1,195]},{19:[1,196]},{19:[1,197]},o($VS,[2,76]),o($Vt,[2,13]),o($Vt,[2,14]),{36:[1,198]},o($VV,[2,19]),{36:[1,199],51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI},{15:[1,200]},{13:[1,201]},o($Vt,[2,87]),o($Vt,[2,7]),o($Vt,[2,9]),o($Vt,[2,10]),{4:68,6:3,7:202,11:$V0,12:$V1,17:$V2,21:6,23:$V3,24:7,25:$V4,28:$V5,29:$V6,31:$V7,32:$V8,40:$V9,42:$Va,43:17},{4:68,6:3,7:203,11:$V0,12:$V1,17:$V2,21:6,23:$V3,24:7,25:$V4,28:$V5,29:$V6,31:$V7,32:$V8,40:$V9,42:$Va,43:17},{12:$V1,18:$Vc,21:30,23:$V3,24:29,27:204,40:$V9,42:$Va,43:17},{12:$Vh,13:$Vi,18:$Vj,26:205,43:49,61:$Vk,65:45,66:$Vl,67:47,68:48,72:50,73:52,74:$Vm,75:$Vn},{19:[2,21]},{37:[1,206]},o($Vt,[2,15]),{15:[1,207],51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,59:$VD,60:$VE,61:$VF,62:$VG,63:$VH,64:$VI},{20:[1,208]},{12:$V1,18:$Vc,21:30,23:$V3,24:29,27:209,40:$V9,42:$Va,43:17},o([19,35,39],[2,18]),{33:210,80:$VU},o($Vt,[2,86])],
defaultActions: {18:[2,1],171:[2,77],202:[2,21]},
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
case 1:return 74
break;
case 2:return 75
break;
case 3:return 11
break;
case 4:return "if"
break;
case 5:return 28
break;
case 6:return "else"
break;
case 7:return "return"
break;
case 8:return "void"
break;
case 9:return "case"
break;
case 10:return "printf"
break;
case 11:return "while"
break;
case 12:return "break"
break;
case 13:return "default"
break;
case 14:return "const"
break;
case 15:return "struct"
break;
case 16:return "switch"
break;
case 17:return "for"
break;
case 18:return 77
break;
case 19:return 20
break;
case 20:return 69
break;
case 21:return 36
break;
case 22:return 53
break;
case 23:return 78
break;
case 24:return 52
break;
case 25:return 59
break;
case 26:return 66
break;
case 27:return 56
break;
case 28:return 57
break;
case 29:return 54
break;
case 30:return 55
break;
case 31:return 58
break;
case 32:return 41
break;
case 33:return 49
break;
case 34:return 63
break;
case 35:return 62
break;
case 36:return 50
break;
case 37:return 64
break;
case 38:return 48
break;
case 39:return 46
break;
case 40:return 61
break;
case 41:return 45
break;
case 42:return 47
break;
case 43:return 60
break;
case 44:return '^'
break;
case 45:return 51
break;
case 46:return 18
break;
case 47:return 19
break;
case 48:return 70
break;
case 49:return 71
break;
case 50:return 13
break;
case 51:return 15
break;
case 52:return 12
break;
case 53:return 5
break;
case 54:return 'INVALID'
break;
}
},
rules: [/^(?:(\s+|\/\/+.*\n))/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:#define\b)/,/^(?:if\b)/,/^(?:do\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:void\b)/,/^(?:case\b)/,/^(?:printf\b)/,/^(?:while\b)/,/^(?:break\b)/,/^(?:default\b)/,/^(?:const\b)/,/^(?:struct\b)/,/^(?:switch\b)/,/^(?:for\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?::)/,/^(?:&&)/,/^(?:&)/,/^(?:\|\|)/,/^(?:!=)/,/^(?:!)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:%)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\?)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54],"inclusive":true}}
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
exports.parser = c_parser;
exports.Parser = c_parser.Parser;
exports.parse = function () { return c_parser.parse.apply(c_parser, arguments); };
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