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
var erlang_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,21],$V2=[1,19],$V3=[1,12],$V4=[1,14],$V5=[1,17],$V6=[1,20],$V7=[1,22],$V8=[1,29],$V9=[1,28],$Va=[1,31],$Vb=[1,33],$Vc=[8,11,15,16,22,24,26,27,28,29,30,31,32,33,34,35,36,40,41,42,47,49],$Vd=[8,15,42],$Ve=[2,43],$Vf=[1,34],$Vg=[1,35],$Vh=[1,36],$Vi=[1,37],$Vj=[1,38],$Vk=[1,39],$Vl=[1,40],$Vm=[1,41],$Vn=[1,42],$Vo=[1,43],$Vp=[1,44],$Vq=[8,11,15,16,22,24,26,27,28,29,30,31,32,33,34,35,36,40,41,42,49],$Vr=[2,38],$Vs=[1,52],$Vt=[8,11,24,49],$Vu=[2,29],$Vv=[8,11,15,16,22,24,26,27,28,29,30,31,32,40,41,42,49],$Vw=[8,11,15,16,22,24,26,27,28,29,30,31,32,33,34,40,41,42,49];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"top_level_statements":4,"EOF":5,"statements":6,"statements_":7,",":8,"statement":9,"top_level_statement":10,".":11,"IDENTIFIER":12,"(":13,"exprs":14,")":15,"->":16,"function_call":17,"statement_with_semicolon":18,"if_statement":19,"case":20,"e":21,"of":22,"case_statements":23,"end":24,"=":25,"or":26,"and":27,"==":28,"=<":29,"<":30,">=":31,">":32,"+":33,"-":34,"*":35,"/":36,"dot_expr":37,"parentheses_expr":38,"[":39,"||":40,"<-":41,"]":42,"expr":43,"|":44,"NUMBER":45,"STRING_LITERAL":46,":":47,"elif":48,";":49,"if":50,"case_statement":51,"case_statements_":52,"_":53,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:",",11:".",12:"IDENTIFIER",13:"(",15:")",16:"->",20:"case",22:"of",24:"end",25:"=",26:"or",27:"and",28:"==",29:"=<",30:"<",31:">=",32:">",33:"+",34:"-",35:"*",36:"/",39:"[",40:"||",41:"<-",42:"]",43:"expr",44:"|",45:"NUMBER",46:"STRING_LITERAL",47:":",49:";",50:"if",53:"_"},
productions_: [0,[3,2],[6,1],[7,3],[7,1],[4,3],[4,2],[10,6],[10,3],[10,1],[9,1],[9,1],[9,5],[18,3],[18,1],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,2],[21,1],[17,3],[17,4],[38,7],[38,9],[38,2],[38,3],[38,5],[38,1],[38,3],[38,1],[38,1],[38,1],[37,3],[37,1],[14,3],[14,1],[48,3],[48,5],[19,7],[51,4],[52,2],[52,1],[23,4]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2:
this.$ = ["statements",$$[$0]]
break;
case 3: case 42:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 4: case 41: case 49:
this.$ =
 [$$[$0]];
break;
case 5: case 40:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 6:
this.$ =
 [$$[$0-1]];
break;
case 7:
this.$ = ["function","public","Object",$$[$0-5],$$[$0-3],$$[$0]]
break;
case 8:
this.$ = ["function","public","Object",$$[$0-2],[],$$[$0]]
break;
case 10:
this.$ = ["semicolon",$$[$0]];
break;
case 12:
this.$ = ["switch",$$[$0-3],$$[$0-1]];
break;
case 13:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 14:
this.$= ["return",$$[$0]];
break;
case 15:
this.$ = ['||',$$[$0-2],$$[$0]];
break;
case 16:
this.$ = ['&&',$$[$0-2],$$[$0]];
break;
case 17:
this.$ = ['==',$$[$0-2],$$[$0]];
break;
case 18:
this.$ = ['<=',$$[$0-2],$$[$0]];
break;
case 19: case 21:
this.$ = ['>',$$[$0-2],$$[$0]];
break;
case 20:
this.$ = ['>=',$$[$0-2],$$[$0]];
break;
case 22:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 23:
this.$ = ["-",$$[$0-2],$$[$0]];
break;
case 24:
this.$ = ["*",$$[$0-2],$$[$0]];
break;
case 25:
this.$ = ["/",$$[$0-2],$$[$0]];
break;
case 26:
this.$ = ["-",$$[$0]];
break;
case 27:
this.$ = [".",$$[$0]];
break;
case 28:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 29:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 30:
this.$=["list_comprehension",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 31:
this.$=["list_comprehension",$$[$0-7],$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 32:
this.$ = ["initializer_list","Object",[]];
break;
case 33:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 34:
this.$ = ["list_head_tail","Object",$$[$0-3],["initializer_list","Object",$$[$0-1]]];
break;
case 36:
this.$ = $$[$0-1];
break;
case 37: case 38: case 39:
this.$ = yytext;
break;
case 43:
this.$ = [$$[$0]];
break;
case 44:
this.$ = ["elif",$$[$0-2],$$[$0]];
break;
case 45:
this.$ = ["elif",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 46:
this.$ = ["if",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 47:
this.$ = ["case",$$[$0-3],$$[$0-1]]
break;
case 48:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 50:
this.$ = $$[$0-3].concat([["default",$$[$0]]])
break;
}
},
table: [{3:1,4:2,10:3,12:$V0,17:5},{1:[3]},{5:[1,6]},{11:[1,7]},{13:[1,8],16:[1,9]},{11:[2,9]},{1:[2,1]},{4:10,5:[2,6],10:3,12:$V0,17:5},{12:$V1,13:$V2,14:11,15:$V3,17:18,21:13,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{6:23,7:24,9:25,12:$V8,13:$V2,17:18,18:26,19:27,20:$V9,21:30,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7,50:$Va},{5:[2,5]},{8:$Vb,15:[1,32]},o($Vc,[2,28]),o($Vd,$Ve,{26:$Vf,27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp}),{12:$V1,13:$V2,17:18,21:45,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},o($Vq,[2,27]),o($Vq,[2,41],{47:[1,46]}),{12:$V1,13:$V2,14:49,17:18,21:47,34:$V4,37:15,38:16,39:$V5,42:[1,48],43:[1,50],45:$V6,46:$V7},o($Vc,[2,35]),{12:$V1,13:$V2,17:18,21:51,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},o($Vc,[2,37]),o($Vc,$Vr,{13:$Vs}),o($Vc,[2,39]),{11:[2,8]},o([11,24,49],[2,2],{8:[1,53]}),o($Vt,[2,4]),o($Vt,[2,10]),o($Vt,[2,11]),{12:$V1,13:$V2,17:18,21:54,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},o([8,11,24,26,27,28,29,30,31,32,33,34,35,36,47,49],$Vr,{13:$Vs,25:[1,55]}),o($Vt,[2,14],{26:$Vf,27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp}),{12:$V1,13:$V2,17:18,21:56,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{11:$Vu,16:[1,57]},{12:$V1,13:$V2,17:18,21:58,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{12:$V1,13:$V2,17:18,21:59,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{12:$V1,13:$V2,17:18,21:60,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{12:$V1,13:$V2,17:18,21:61,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{12:$V1,13:$V2,17:18,21:62,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{12:$V1,13:$V2,17:18,21:63,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{12:$V1,13:$V2,17:18,21:64,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{12:$V1,13:$V2,17:18,21:65,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{12:$V1,13:$V2,17:18,21:66,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{12:$V1,13:$V2,17:18,21:67,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{12:$V1,13:$V2,17:18,21:68,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{12:$V1,13:$V2,17:18,21:69,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},o($Vq,[2,26]),{12:$V1,13:$V2,17:18,37:70,38:16,39:$V5,45:$V6,46:$V7},o([8,42],$Ve,{26:$Vf,27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,40:[1,71]}),o($Vc,[2,32]),{8:$Vb,42:[1,72]},{44:[1,73]},{15:[1,74],26:$Vf,27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp},{12:$V1,13:$V2,14:75,15:$V3,17:18,21:13,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{9:76,12:$V8,13:$V2,17:18,18:26,19:27,20:$V9,21:30,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7,50:$Va},{22:[1,77],26:$Vf,27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp},{12:$V1,13:$V2,17:18,21:78,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{16:[1,79],26:$Vf,27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp},{6:80,7:24,9:25,12:$V8,13:$V2,17:18,18:26,19:27,20:$V9,21:30,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7,50:$Va},o($Vd,[2,42],{26:$Vf,27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o([8,11,15,16,22,24,26,40,41,42,49],[2,15],{27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o([8,11,15,16,22,24,26,27,40,41,42,49],[2,16],{28:$Vh,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o($Vv,[2,17],{33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o($Vv,[2,18],{33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o($Vv,[2,19],{33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o($Vv,[2,20],{33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o($Vv,[2,21],{33:$Vm,34:$Vn,35:$Vo,36:$Vp}),o($Vw,[2,22],{35:$Vo,36:$Vp}),o($Vw,[2,23],{35:$Vo,36:$Vp}),o($Vq,[2,24]),o($Vq,[2,25]),o($Vq,[2,40]),{12:$V1,13:$V2,17:18,21:81,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},o($Vc,[2,33]),{12:$V1,13:$V2,14:82,17:18,21:13,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},o($Vc,[2,36]),{8:$Vb,15:[1,83]},o($Vt,[2,3]),{12:$V1,13:$V2,17:18,21:87,23:84,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7,51:86,52:85},o($Vt,[2,13],{26:$Vf,27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp}),{6:88,7:24,9:25,12:$V8,13:$V2,17:18,18:26,19:27,20:$V9,21:30,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7,50:$Va},{11:[2,7]},{26:$Vf,27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,41:[1,89]},{8:$Vb,42:[1,90]},o($Vc,$Vu),{24:[1,91]},{53:[1,92]},{12:$V1,13:$V2,17:18,21:87,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7,51:86,52:93,53:[2,49]},{16:[1,94],26:$Vf,27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp},{49:[1,95]},{12:$V1,13:$V2,17:18,21:96,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},o($Vc,[2,34]),o($Vt,[2,12]),{16:[1,97]},{53:[2,48]},{6:98,7:24,9:25,12:$V8,13:$V2,17:18,18:26,19:27,20:$V9,21:30,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7,50:$Va},{12:$V1,13:$V2,17:18,21:100,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7,48:99},{8:[1,102],26:$Vf,27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,42:[1,101]},{6:103,7:24,9:25,12:$V8,13:$V2,17:18,18:26,19:27,20:$V9,21:30,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7,50:$Va},{49:[1,104]},{24:[1,105]},{16:[1,106],26:$Vf,27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp},o($Vc,[2,30]),{12:$V1,13:$V2,17:18,21:107,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7},{24:[2,50]},o([12,13,34,39,45,46,53],[2,47]),o($Vt,[2,46]),{6:108,7:24,9:25,12:$V8,13:$V2,17:18,18:26,19:27,20:$V9,21:30,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7,50:$Va},{26:$Vf,27:$Vg,28:$Vh,29:$Vi,30:$Vj,31:$Vk,32:$Vl,33:$Vm,34:$Vn,35:$Vo,36:$Vp,42:[1,109]},{24:[2,44],49:[1,110]},o($Vc,[2,31]),{12:$V1,13:$V2,17:18,21:100,34:$V4,37:15,38:16,39:$V5,45:$V6,46:$V7,48:111},{24:[2,45]}],
defaultActions: {5:[2,9],6:[2,1],10:[2,5],23:[2,8],80:[2,7],93:[2,48],103:[2,50],111:[2,45]},
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
case 0:/* skip whitespace */
break;
case 1:return 45
break;
case 2:return 46
break;
case 3:return 20
break;
case 4:return 22
break;
case 5:return "or"
break;
case 6:return "if"
break;
case 7:return "and"
break;
case 8:return "andalso"
break;
case 9:return "end"
break;
case 10:return 8
break;
case 11:return 49
break;
case 12:return 40
break;
case 13:return 16
break;
case 14:return 11
break;
case 15:return 47
break;
case 16:return 31
break;
case 17:return 32
break;
case 18:return 29
break;
case 19:return 41
break;
case 20:return 30
break;
case 21:return 28
break;
case 22:return 25
break;
case 23:return '*='
break;
case 24:return 35
break;
case 25:return '/='
break;
case 26:return 36
break;
case 27:return '-='
break;
case 28:return '--'
break;
case 29:return 34
break;
case 30:return '++'
break;
case 31:return '+='
break;
case 32:return 33
break;
case 33:return '^'
break;
case 34:return '{'
break;
case 35:return '}'
break;
case 36:return ']['
break;
case 37:return 39
break;
case 38:return 42
break;
case 39:return 13
break;
case 40:return 15
break;
case 41:return 53
break;
case 42:return 12
break;
case 43:return 5
break;
case 44:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:case\b)/,/^(?:of\b)/,/^(?:or\b)/,/^(?:if\b)/,/^(?:and\b)/,/^(?:andalso\b)/,/^(?:end\b)/,/^(?:,)/,/^(?:;)/,/^(?:\|\|)/,/^(?:->)/,/^(?:\.)/,/^(?::)/,/^(?:>=)/,/^(?:>)/,/^(?:=<)/,/^(?:<-)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\]\[)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:_\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"inclusive":true}}
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
exports.parser = erlang_parser;
exports.Parser = erlang_parser.Parser;
exports.parse = function () { return erlang_parser.parse.apply(erlang_parser, arguments); };
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