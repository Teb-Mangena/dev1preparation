export const questions = [{
  questionNum: 1,
  questiontoAnswer: '<p class="inner-text">What is displayed on the screen by the following code: <br>DECLARE A, B AS INTEGER <br>FOR B = 3 TO 1 STEP -1 <br>&nbsp; &nbsp; A = B * 2 <br>NEXT B <br>DISPLAY B, A<br><br> a.	B A <br>b.	0 2 <br>   c.	3 6 <br>d.	 2 1 <br></p>',

  solution:'B. 0 2',
  close:'close'
},{
  questionNum: 2,
  questiontoAnswer: `
  <p class="inner-text" >
  What is displayed on the screen by the following code: <br>          
  DECLARE MIN, MAX AS REAL<br>          
  MIN = 6<br>          
  MAX = MIN &#8726; 3<br>          
  IF MIN - MAX = 4 AND MAX - MIN < 0 THEN <br>          
  &nbsp; &nbsp; DISPLAY MAX <br>
  &nbsp; &nbsp; MIN = MAX * 2 <br>          
  ELSE<br>           
  &nbsp; &nbsp; DISPLAY MIN <br>          
  ENDIF<br> <br>         
  a. 2<br>           
  b.  6 <br>          
  c. MIN <br>           
  d. MAX <br>          
  </p>                
  `,
  solution:`A. 2`,
  close:'close'
},{
  questionNum: 3,
  questiontoAnswer: `
  <p class="inner-text" > 
  What is displayed on the screen by the following code if BMW is input: <br>
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
  &nbsp; &nbsp; DISPLAY CAR, PRICE, MSG <br><br>
  a. BMW 200 LOW <br>
  b. CAR, PRICE, MSG <br>
  c. NONE OF THESE <br>
  d. BMW 550 HIGH<br>
  </p>
  `,
  solution: `D. BMW 550 HIGH`,
  close:'close'
},{
  questionNum: 4,
  questiontoAnswer: `
  <p class="inner-text" >
  In the following code, what value is in C3 after the loop ends: <br>
  DECLARE Z, C1, C2, C3 AS REAL<br>
  C1 = 10<br> 
  C2 = (C1 / 2 + (C1 - 6)) <br>
  FOR Z = C2 TO C1<br>  
  &nbsp; &nbsp; C3 = C2 &#8726; Z<br>
  NEXT Z <br><br>
  a. 0<br>
  b. 1 <br>
  c. 5<br>
  d. NONE OF THESE<br> 
  </p>
  `,
  solution:`A. 0`,
  close:'close'
},{
  questionNum: 5,
  questiontoAnswer: `
  <p class="inner-text" > 
  What is displayed on the screen by the following code: <br>
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
  DISPLAY SUM<br><br>
  a. 13 <br>
  b. 8 <br>
  c. 9<br>
  d. NONE OF THESE <br>
  </p>
  `,
  solution:`A. 13`,
  close:'close'
},{
  questionNum: 6,
  questiontoAnswer: `
  <p class="inner-text" >
  What is displayed on the screen by the following code if these values are input: 5 4 6 <br>
  DECLARE J, CUPS, TCPS, TOTC AS INTEGER<br> 
  FOR J = 1 TO 3<br>
  &nbsp; &nbsp; ACCEPT CUPS<br>
  &nbsp; &nbsp;  IF CUPS > = 5 OR CUPS < 4 THEN<br>
  &nbsp; &nbsp; &nbsp; &nbsp; TCPS = TCPS + 1 <br>
  &nbsp; &nbsp; ELSE <br>
  &nbsp; &nbsp; &nbsp; &nbsp;  TOTC = TOTC + CUPS<br>
  &nbsp; &nbsp;  ENDIF<br>
  NEXT J<br>
  DISPLAY TCPS, TOTC<br><br>
  a. 1 10 <br>
  b. 0 15<br>
  c. 2 4 <br>
  d. NONE OF THESE<br>
  </p>
  `,
  solution: `C. 2 4`,
  close:'close'
},{
  questionNum: 7,
  questiontoAnswer: `
  <p class="inner-text" > 
  IF X1 > X2 THEN<br>
    &nbsp; &nbsp;  DISPLAY X2 <br>
  ELSE <br>
    &nbsp; &nbsp;  DISPLAY X1 <br>
  ENDIF <br><br>
  Is the correct code to use to display the larger of two unequal numbers <br><br>
  a. TRUE<br>
  b.FALSE <br>
  </p>
  `,
  solution: `A. False`,
  close:'close'
},{
  questionNum: 8,
  questiontoAnswer: `
  <p class="inner-text" >
  The following code displays 2 on the screen: <br>
  DECLARE BOOKS, FIN, X AS INTEGER <br>
  FOR X = BOOKS TO 3 STEP 2<br>
  &nbsp; &nbsp;  FIN = FIN - X <br>
  NEXT X<br>
  DISPLAY FIN <br><br>
  a.	TRUE <br>
  b.	FALSE <br>
  </p>
  `,
  solution: `B. True`,
  close:'close'
},{
  questionNum: 9,
  questiontoAnswer: `
  <p class="inner-text" > 
  Evaluate: <br>
  A < (B + 7) AND NOT C - 2 * 4 < A + C + B ^ 2 <br>
  where A=3, B=5, C=11 <br><br>
  a. TRUE <br>
  b. FALSE  <br>
  </p>
  `,
  solution: `B. False`,
  close:'close'
},{
  questionNum: 10,
  questiontoAnswer: `
  <p class="inner-text" > 
    In the following code, what value is in NUM3 after the loop ends:<br>
    DECLARE MM, NUM1, NUM2, NUM3 AS REAL <br>
    NUM1 = 6 <br>
    NUM2 = (NUM1 * 4 - (NUM1 - 2)) <br>
    FOR MM = NUM1 TO NUM2 <br>
    &nbsp; &nbsp;  NUM3 = MM - NUM2 + 1<br>
    NEXT MM <br><br>

    a. 1 <br>
    b. 0 <br>
    c. 5<br>
    d. none of the above<br><br>

  </p>
  `,
  solution:  `A. 1`,
  close:'close'
},{
  questionNum: 11,
  questiontoAnswer: `
  <p class="inner-text" > 
    In the following code, what value is in NUM3 after the loop ends: 
    DECLARE MM, NUM1, NUM2, NUM3 AS REAL<br>
    NUM1 = 5<br>
    NUM2 = (NUM1 * 4 - (NUM1 - 2)) <br>
    FOR MM = NUM1 TO NUM2 <br>
    &nbsp; &nbsp;  NUM3 = NUM2 MOD MM <br>
    NEXT MM <br><br>
    a. 1 <br>
    b. 5 <br>
    c. 0 <br>
    d. none of the above <br><br>
  </p>
  `,
  solution:`C. 0`,
  close:'close'
},{
  questionNum: 12,
  questiontoAnswer: `
  <p class="inner-text" > 
    What value is displayed on the screen by the following code if these values are input: 8 10 9 <br>
    DECLARE K, PENS, TOTAL, CNT1 AS INTEGER <br>
    FOR K = 1 TO 3 <br>
    &nbsp; &nbsp;  ACCEPT PENS <br>
    &nbsp; &nbsp;  IF PENS < 8 AND PENS > 10 THEN <br>
    &nbsp; &nbsp;&nbsp;&nbsp;  CNT1 = CNT1 + 1<br>
    &nbsp; &nbsp;  ENDIF<br>
    NEXT K<br>
    DISPLAY CNT1<br><br>


    a. 1<br>
    b. 2 <br>
    c. 3<br>
    d. none of the above <br><br>
  </p>
  `,
  solution: `D. None of the above`,
  close:'close'
},{
  questionNum: 13,
  questiontoAnswer: `
  <p class="inner-text" > 
    What value is displayed on the screen by the following code if these values are input: 8 10 9 DECLARE K, PENS, TOTAL, CNT1 AS INTEGER <br>
    FOR K = 1 TO 3 <br>
    &nbsp; &nbsp;  ACCEPT PENS <br>
    &nbsp; &nbsp;&nbsp;&nbsp;  IF PENS > = 8 OR PENS < 10 THEN CNT1 = CNT1 + 1 <br>
    ENDIF<br>
    NEXT K<br>
    DISPLAY CNT1<br><br>
    a. 1 <br>
    b. 2 <br>
    c. 3 <br>
    d. none of the above <br><br>
  </p>
  `,
  solution: `C. 3`,
  close:'close'
},{
  questionNum: 14,
  questiontoAnswer: `
  <p class="inner-text" > 
      Choose the correct answer for the following: What value is displayed on the screen by the following code if these values are input: 8 10 9<br>
      DECLARE K, PENS, TOTAL, CNT1 AS INTEGER<br>
      FOR K = 1 TO 3<br>
      &nbsp; &nbsp;  ACCEPT PENS <br>
      &nbsp; &nbsp;&nbsp;&nbsp;  IF PENS > 8 OR PENS < 10 THEN CNT1= CNT1+ 1 <br>
      ENDIF <br>
      NEXT K <br>
      DISPLAY CNT1<br><br>

      
      a. 1 <br>
      b. 2<br>
      c. 3<br>
      d. none of the above <br><br>

  </p>
  `,
  solution: `C. 3`,
  close:'close'
},{
  questionNum: 15,
  questiontoAnswer: `
  <p class="inner-text" > 
     The following code displays 3 on the screen:<br>
      DECLARE TOTAL1, TOTAL2, J AS INTEGER<br>
      FOR J = TOTAL1 TO 4 STEP 2<br>
      &nbsp; &nbsp;  TOTAL2 = J - 1<br>
      NEXT J<br>
      DISPLAY TOTAL2 <br><br>
      a. TRUE <br>
      b. FALSE<br><br>
  </p>
  `,
  solution:`B. True`,
  close:'close'
},{
  questionNum: 16,
  questiontoAnswer: `
  <p class="inner-text" > 
    The following code displays 4 on the screen: <br>
    DECLARE TOTAL1, TOTAL2, J AS INTEGER<br>
    FOR J = TOTAL1 TO 4 STEP 2 <br>
    &nbsp; &nbsp;  TOTAL2 = TOTAL2 - J<br>
    NEXT J<br>
    DISPLAY TOTAL2 <br><br>
    a. TRUE <br>
    b. FALSE<br><br>
  </p>
  `,
  solution:`B. False`,
  close:'close'
},{
  questionNum: 17,
  questiontoAnswer: `
  <p class="inner-text" > 
    The following code displays 6 on the screen:<br>
    DECLARE TOTAL1, TOTAL2, J AS INTEGER<br>
    FOR J = TOTAL1 TO 4 STEP 2 <br>
    &nbsp; &nbsp;  TOTAL2 = TOTAL2 + J <br>
    NEXT J <br>
    DISPLAY TOTAL2<br><br>

    a. TRUE <br>
    b. FALSE <br><br>

  </p>
  `,
  solution:`A. True`,
  close:'close'
}];