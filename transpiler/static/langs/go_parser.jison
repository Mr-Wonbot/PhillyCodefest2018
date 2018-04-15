/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
\"([^\\\"]|\\.)*\" return 'STRING_LITERAL'
"$"                   return "$"
":="                  return ':='
"func"                return "func"
"range"               return "range"
"struct"              return "struct"
"public"              return "public"
"extends"             return "extends"
"implements"          return "implements"
"private"             return "private"
"static"              return "static"
"if"                  return 'if'
"else"                return 'else'
"return"              return 'return'
"while"               return 'while'
"for"                 return 'for'
"var"                 return 'var'
"of"                 return 'of'
","                   return ','
";"                   return ';'
"."                   return '.'
":"                   return ':'
"&&"                  return '&&'
"||"                  return '||'
">="                  return '>='
">"                   return '>'
"<="                  return '<='
"<"                   return '<'
"=="                  return '=='
"="                   return '='
"*="                  return '*='
"*"                   return '*'
"/="                  return '/='
"/"                   return '/'
"%"                   return '%'
"-="                  return '-='
"--"                  return '--'
"-"                   return '-'
"++"                  return '++'
"+="                  return '+='
"+"                   return '+'
"^"                   return '^'
"{"                   return '{'
"}"                   return '}'
"]["                  return ']['
"["                   return '['
"]"                   return ']'
"("                   return '('
")"                   return ')'
"_"                   return '_'
[a-zA-Z_][a-zA-Z0-9_]* return 'IDENTIFIER'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%left '||'
%left '&&'
%left '<' '<=' '>' '>='
%left '+' '-'
%left '*' '/' '%'
%left UMINUS

%start expressions

%% /* language grammar */

expressions
    : statements EOF
        {return $1;}
    ;

statements_: statement statements_ {$$ = [$1].concat($2);} | statement {$$ =
 [$1];};
 

statements: statements_ {$$ = ["statements",$1]};



access_modifier: "public" | "private";


statement
    :
    statement_with_semicolon {$$ = ["semicolon",$1];}
    | "for" e "{" statements "}" {$$ = ["while",$2,$4];}
    | "for" "_" "," IDENTIFIER ":=" "range" dot_expr "{" statements "}" {$$ = ["foreach","Object",$4,$7,$9];}
    | "for" IDENTIFIER "," IDENTIFIER ":=" "range" dot_expr "{" statements "}" {$$ = ["foreach_with_index","Object",$2,$4,$7,$9];}
    | if_statement
    | "func" IDENTIFIER "(" parameters ")" type "{" statements "}" {$$ = ["function","public",$6,$2,$4,$8];}
    ;



statement_with_semicolon
   : 
   "return" e  {$$ = ["return",$2];}
   | "var" IDENTIFIER "=" e {$$ = ["initialize_var","Object",$2,$4];}
   | IDENTIFIER ":=" e {$$ = ["initialize_var","Object",$1,$3];}
   | "var" identifiers {$$ = ["initialize_empty_vars","Object",$2];}
   | access_array "=" e {$$ = ["set_var",$1,$3];}
   | IDENTIFIER "=" e {$$ = ["set_var",$1,$3];}
   | IDENTIFIER "++" {$$ = [$2,$1];}
   | IDENTIFIER "--" {$$ = [$2,$1];}
   | IDENTIFIER "+=" e {$$ = [$2,$1,$3];}
   | IDENTIFIER "-=" e {$$ = [$2,$1,$3];}
   | IDENTIFIER "*=" e {$$ = [$2,$1,$3];}
   | IDENTIFIER "/=" e {$$ = [$2,$1,$3];}
   | function_call "." dot_expr {$$ = [".",[$1].concat($3)]}
   | IDENTIFIER "." dot_expr {$$ = [".",[$1].concat($3)]}
   | function_call
   ;
e
    :
    e '||' e
        {$$ = [$2,$1,$3];}
    |e '&&' e
        {$$ = [$2,$1,$3];}
    |e '<=' e
        {$$ = [$2,$1,$3];}
    |e '<' e
        {$$ = [$2,$1,$3];}
    | e '>=' e
        {$$ = [$2,$1,$3];}
    |e '>' e
        {$$ = [$2,$1,$3];}
    | e '+' e
        {$$ = [$2,$1,$3];}
    | e '-' e
        {$$ = [$2,$1,$3];}
    | e '*' e
        {$$ = [$2,$1,$3];}
    | e '/' e
        {$$ = [$2,$1,$3];}
    | e '%' e
        {$$ = [$2,$1,$3];}
    | '-' e %prec UMINUS
        {$$ = ["-",$2];}
    | dot_expr {$$ = [".", $1];}
    ;


dot_expr: parentheses_expr "." dot_expr {$$ = [$1].concat($3);} | parentheses_expr {$$ =
 [$1];};

access_array: IDENTIFIER "[" access_arr "]" {$$ = ["access_array",$1,$3];};


function_call: IDENTIFIER "(" ")" {$$ = ["function_call",$1,[]];}
    | IDENTIFIER "(" exprs ")" {$$ = ["function_call",$1,$3];};

parentheses_expr:
    "type" IDENTIFIER "struct" "{" statements "}" {$$ = ["struct",$1,$5]}
    | "function" "(" parameters ")" "{" statements "}" {$$ = ["anonymous_function","Object",$3,$6]}
    | access_array
    | function_call
    | "[" "]" {$$ = ["initializer_list","Object",[]];} | "[" exprs "]" {$$ = ["initializer_list","Object",$2];}
    | "(" e ")" {$$ = $2;}
    | NUMBER
        {$$ = yytext;}
    | IDENTIFIER
        {$$ = yytext;}
    | STRING_LITERAL
        {$$ = yytext;};

type: IDENTIFIER "[" "]" {$$ = [$1,"[]"];} | IDENTIFIER;
parameter: IDENTIFIER type {$$ = [$2, $1];};
parameters: parameter "," parameters {$$ = [$1].concat($3);} | parameter {$$ =
 [$1];} | {$$ = []};
access_arr: parentheses_expr "][" access_arr {$$ = [$1].concat($3);} | parentheses_expr {$$ =
 [$1];};
exprs: e "," exprs {$$ = [$1].concat($3);} | e {$$ = [$1];};
types: type "," types {$$ = [$1].concat($3);} | type {$$ = [$1];};
elif: "else" "if" e "{" statements "}" elif {$$ = ["elif",$3,$5,$7]}| "else" "{" statements "}" {$$ = ["else",$3];};
if_statement:
"if" e "{" statements "}" elif {$$ = ["if",$2,$4,$6];}
|  "if" e "{" statements "}" {$$ = ["if",$2,$4];};
identifiers: IDENTIFIER "," identifiers {$$ = [$1].concat($3);} | IDENTIFIER {$$ = [$1];};
