export const quizzies = [{
  quizNum: 1,
  questionType:'What is displayed on the screen by the following code: <br><br>DECLARE A, B AS INTEGER <br>FOR B = 3 TO 1 STEP -1 <br>&nbsp; &nbsp; A = B * 2 <br>NEXT B <br>DISPLAY B, A<br><br>',
  answer:[
    {text:' B A ', correct: false},
    {text:' 0 2 ', correct: true},
    {text:' 3 6 ', correct: false},
    {text:' 2 1 ', correct: false}
  ]
},{
  quizNum: 2,
  questionType:`What is displayed on the screen by the following code: <br>          
  DECLARE MIN, MAX AS REAL<br>          
  MIN = 6<br>          
  MAX = MIN &#8726; 3<br>          
  IF MIN - MAX = 4 AND MAX - MIN < 0 THEN <br>          
  &nbsp; &nbsp; DISPLAY MAX <br>
  &nbsp; &nbsp; MIN = MAX * 2 <br>          
  ELSE<br>           
  &nbsp; &nbsp; DISPLAY MIN <br>          
  ENDIF<br> <br>`,
  answer:[
    {text:' 2 ', correct: true},
    {text:' 6 ', correct: false},
    {text:' MIN ', correct: false},
    {text:' MAX ', correct: false}
  ]
},{
  quizNum: 3,
  questionType:`What is displayed on the screen by the following code if BMW is input: <br>
  DECLARE PRICE AS REAL <br>
  DECLARE MSG, CAR AS STRING <br>
  ACCEPT CAR<br>
  IF NOT CAR < > “BMW” THEN<br>
  &nbsp; &nbsp; PRICE = 550 <br>
  &nbsp; &nbsp; MSG = “HIGH” <br>
  ELSE <br>
  &nbsp; &nbsp; PRICE = 200<br>
  &nbsp; &nbsp; MSG = “LOW” <br>
  END IF<br>
  &nbsp; &nbsp; DISPLAY CAR, PRICE, MSG <br><br>`,
  answer:[
    {text:' BMW 200 LOW ', correct: false},
    {text:' CAR, PRICE, MSG ', correct: false},,
    {text:' NONE OF THESE ', correct: false},,
    {text:' BMW 550 HIGH ', correct: true},
  ]
},{
  quizNum: 4,
  questionType:`In the following code, what value is in C3 after the loop ends: <br>
  DECLARE Z, C1, C2, C3 AS REAL<br>
  C1 = 10<br> 
  C2 = (C1 / 2 + (C1 - 6)) <br>
  FOR Z = C2 TO C1<br>  
  &nbsp; &nbsp; C3 = C2 &#8726; Z<br>
  NEXT Z <br><br>`,
  answer:[
    {text:' 0 ', correct: true},
    {text:' 1 ', correct: false},
    {text:' 5 ', correct: false},
    {text:' NONE OF THESE ', correct: false}
  ]
},{
  quizNum: 5,
  questionType:` What is displayed on the screen by the following code: <br>
  DECLARE A, B, C, SUM AS REAL<br>
  B = 5<br>
  A = 2<br>
  C = 2 <br>
  IF B > A AND A > C AND C > B THEN<br> 
  &nbsp; &nbsp; B = A + 2<br>
  ELSE <br>
  &nbsp; &nbsp; A = B + 1 <br>
  END IF <br>
  SUM = A + B + C <br>
  DISPLAY SUM<br><br>`,
  answer:[
    {text:' 13 ', correct: true},
    {text:' 8 ', correct: false},
    {text:' 9 ', correct: false},
    {text:' NONE OF THESE ', correct: false},
  ]
},{
  quizNum: 6,
  questionType:`  What is displayed on the screen by the following code if these values are input: 5 4 6 <br>
  DECLARE J, CUPS, TCPS, TOTC AS INTEGER<br> 
  FOR J = 1 TO 3<br>
  &nbsp; &nbsp; ACCEPT CUPS<br>
  &nbsp; &nbsp;  IF CUPS > = 5 OR CUPS < 4 THEN<br>
  &nbsp; &nbsp; &nbsp; &nbsp; TCPS = TCPS + 1 <br>
  &nbsp; &nbsp; ELSE <br>
  &nbsp; &nbsp; &nbsp; &nbsp;  TOTC = TOTC + CUPS<br>
  &nbsp; &nbsp;  ENDIF<br>
  NEXT J<br>
  DISPLAY TCPS, TOTC<br><br>`,
  answer:[
    {text:' 1 10 ', correct: false},
    {text:' 0 15 ', correct: false},
    {text:' 2 4  ', correct: true},
    {text:' NONE OF THESE ', correct: false}
  ]
},{
  quizNum: 7,
  questionType:`IF X1 > X2 THEN<br>
    &nbsp; &nbsp;  DISPLAY X2 <br>
  ELSE <br>
    &nbsp; &nbsp;  DISPLAY X1 <br>
  ENDIF <br><br>
  Is the correct code to use to display the larger of two unequal numbers <br><br>`,
  answer:[
    {text:' True ', correct: false},
    {text:' False ', correct: true},
  ]
},{
  quizNum: 8,
  questionType:`The following code displays 2 on the screen: <br>
  DECLARE BOOKS, FIN, X AS INTEGER <br>
  FOR X = BOOKS TO 3 STEP 2<br>
  &nbsp; &nbsp;  FIN = FIN - X <br>
  NEXT X<br>
  DISPLAY FIN <br><br>`,
  answer:[
    {text:' TRUE  ', correct: false},
    {text:' FALSE ', correct: true}
  ]
},{
  quizNum: 9,
  questionType:`Evaluate: <br>
  A < (B + 7) AND NOT C - 2 * 4 < A + C + B ^ 2 <br>
  where A=3, B=5, C=11 <br><br>`,
  answer:[
    {text:' TRUE ', correct: false},
    {text:' FALSE ', correct: true}
  ]
},{
  quizNum: 10,
  questionType:`In the following code, what value is in NUM3 after the loop ends:<br>
    DECLARE MM, NUM1, NUM2, NUM3 AS REAL <br>
    NUM1 = 6 <br>
    NUM2 = (NUM1 * 4 - (NUM1 - 2)) <br>
    FOR MM = NUM1 TO NUM2 <br>
    &nbsp; &nbsp;  NUM3 = MM - NUM2 + 1<br>
    NEXT MM <br><br>`,
  answer:[
    {text:' 1 ', correct: true},
    {text:' 0 ', correct: false},
    {text:' 5 ', correct: false},
    {text:' NONE OF THE ABOVE ', correct: false},
  ]
},{
  quizNum: 11,
  questionType:`What value is displayed on the screen by the following code if these values are input: 8 10 9 DECLARE K, PENS, TOTAL, CNT1 AS INTEGER <br>
    FOR K = 1 TO 3 <br>
    &nbsp; &nbsp;  ACCEPT PENS <br>
    &nbsp; &nbsp;&nbsp;&nbsp;  IF PENS > = 8 OR PENS < 10 THEN CNT1 = CNT1 + 1 <br>
    ENDIF<br>
    NEXT K<br>
    DISPLAY CNT1<br><br>`,
  answer:[
    {text:' 1 ', correct: false},
    {text:' 2 ', correct: false},
    {text:' 3 ', correct: true},
    {text:' NONE OF THE ABOVE ', correct: false},
  ]
},{
  quizNum: 12,
  questionType:`The following code displays 3 on the screen:<br>
      DECLARE TOTAL1, TOTAL2, J AS INTEGER<br>
      FOR J = TOTAL1 TO 4 STEP 2<br>
      &nbsp; &nbsp;  TOTAL2 = J - 1<br>
      NEXT J<br>
      DISPLAY TOTAL2 <br><br>`,
  answer:[
    {text:' TRUE ', correct: true},
    {text:' FALSE ', correct: false}
  ]
},{
  quizNum: 13,
  questionType:`The following code displays 4 on the screen: <br>
    DECLARE TOTAL1, TOTAL2, J AS INTEGER<br>
    FOR J = TOTAL1 TO 4 STEP 2 <br>
    &nbsp; &nbsp;  TOTAL2 = TOTAL2 - J<br>
    NEXT J<br>
    DISPLAY TOTAL2 <br><br>`,
  answer:[
    {text:' TRUE ', correct: false},
    {text:' FALSE ', correct: true}
  ]
},{
  quizNum: 14,
  questionType:` The following code displays 6 on the screen:<br>
    DECLARE TOTAL1, TOTAL2, J AS INTEGER<br>
    FOR J = TOTAL1 TO 4 STEP 2 <br>
    &nbsp; &nbsp;  TOTAL2 = TOTAL2 + J <br>
    NEXT J <br>
    DISPLAY TOTAL2<br><br>`,
  answer:[
    {text:' TRUE ', correct: true},
    {text:' FALSE ', correct: false}
  ]
}];