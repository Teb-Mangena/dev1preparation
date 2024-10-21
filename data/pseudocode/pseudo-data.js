export const questionsPseudo = [{
  questionNum: '1',
  pseudoStatement: `
    <p class="inner-text">
    Evaluate the following expressions <br>
    z= x + y * 10 - (x - y) ^ 2 where x = 6, y = 3 <br>
    </p>
  `,

  pseudoSolution:'to be added',
  close:'close'
},{
  questionNum: '2',
  pseudoStatement: `
    <p class="inner-text">
    Evaluate the following expressions  <br>
    d + 4 * g / 2 < g * 3 + 14 where d = 3, g = 24  <br>
    </p>
`,

  pseudoSolution:'to be added',
  close:'close'
},{
  questionNum: '3',
  pseudoStatement: `
    <p class="inner-text">
    Evaluate the following expressions  <br>
    (9 < 4 * 3 + 5) OR (8 * 3 = 4 + 3 * 5) AND NOT (7 < 7 MOD 2) <br>
    </p>
`,

  pseudoSolution:'to be added',
  close:'close'
},{
  questionNum: '4',
  pseudoStatement: `
    <p class="inner-text">
    Evaluate the following expressions  <br>
    (16 MOD 3 ^ 2 <> 3 * 6 - 4 MOD 2) OR (5 * 2 < 7 MOD 2 ^ 2) <br>
    </p>
`,

  pseudoSolution:'to be added',
  close:'close'
},{
  questionNum: '5',
  pseudoStatement: `
    <p class="inner-text">
    Evaluate the following expressions  <br>
    M = A ^ 2 + B * 2 + 8 MOD 3 + 5 ^ (B - C) &#8726 A where A = 5, B = 20, C =18 <br>
    </p>
`,

  pseudoSolution:'to be added',
  close:'close'
},{
  questionNum: '6',
  pseudoStatement: `
    <p class="inner-text">
    Evaluate the following expressions   <br>
    (P * 2) / 4 = 2 * F + P AND NOT H / P + 2 <= 4 where H = 20, F = 5, P= 4 <br>
    </p>
`,

  pseudoSolution:'to be added',
  close:'close'
},{
  questionNum: '7',
  pseudoStatement: `
    <p class="inner-text">
    Evaluate the following expressions  <br>
    (16 MOD 3 ^ 2 <> 3 * 6 - 4 MOD 2) OR (5 * 2 < 7 MOD 2 ^ 2) AND (12 ^ 1 + 3 \ 2 = 6 / 2) <br> 
    </p>
  `,

  pseudoSolution:'to be added',
  close:'close'
},{
  questionNum: '8',
  pseudoStatement: `
    <p class="inner-text"> 
      Draw a Trace Table using the input 4 and 11. <br> <br>
      BEGIN  <br>
      &nbsp; &nbsp; Declare A, B as String <br>
      &nbsp; &nbsp;  Declare x, y, z as Real  <br>
      &nbsp; &nbsp;  Accept x, y  <br>
      &nbsp; &nbsp;  z = x * 5 MOD y - x + 2  <br>
      &nbsp; &nbsp;      IF z = 3 then <br>
      &nbsp; &nbsp;  &nbsp; &nbsp;  A = “TRUE” <br>
      &nbsp; &nbsp;  &nbsp; &nbsp;  B = “FALSE” <br>
      &nbsp; &nbsp; Else <br>
      &nbsp; &nbsp; If z = 7 Then <br>
        &nbsp; &nbsp;  &nbsp; &nbsp;  A = “YES” <br>
        &nbsp; &nbsp;  &nbsp; &nbsp;  B = “NO” <br>
      &nbsp; &nbsp;  Else  <br>
        &nbsp; &nbsp;  &nbsp; &nbsp;  A = “VALID” <br>
        &nbsp; &nbsp;  &nbsp; &nbsp;  B = “INVALID” <br>
      &nbsp; &nbsp;  End If  <br>
      &nbsp; &nbsp;  End If  <br>
      &nbsp; &nbsp; Display A  <br>
      &nbsp; &nbsp;  Display B  <br>
      END <br>
    </p>
  `,

  pseudoSolution:'to be added',
  close:'close'
},{
  questionNum: '9',
  pseudoStatement: `
    <p class="inner-text">
      Draw a trace table for the following pseudocode, using the input values 10, 2 and 20 in the same order. <br> <br>
      BEGIN <br>
      &nbsp; &nbsp;  DECLARE v, x, y, z AS INTEGER  <br>
      &nbsp; &nbsp;  ACCEPT x, y, z  <br>
      &nbsp; &nbsp;  v = x * y + 5 * (z - 17) <br>
      &nbsp; &nbsp; IF v = x + y + z THEN  <br>
      &nbsp; &nbsp;  &nbsp; &nbsp;  z = y ^ 3  <br>
      &nbsp; &nbsp;  ELSE  <br>
      &nbsp; &nbsp;  &nbsp; &nbsp;  z = y * 3  <br>
      &nbsp; &nbsp;  END IF <br>
      &nbsp; &nbsp;   IF z = 20 THEN  <br>
      &nbsp; &nbsp;  &nbsp; &nbsp;  DISPLAY “x “ x  <br>
      &nbsp; &nbsp;  ELSE <br>
      &nbsp; &nbsp;  &nbsp; &nbsp;  DISPLAY “z z” <br>
      &nbsp; &nbsp;  END IF  <br>
      &nbsp; &nbsp;  IF z = 8 THEN  <br>
      &nbsp; &nbsp;  &nbsp; &nbsp;  DISPLAY “y y” <br>
      &nbsp; &nbsp;  ELSE  <br>
      &nbsp; &nbsp;  &nbsp; &nbsp;  DISPLAY v “ v” <br>
      &nbsp; &nbsp;  END IF <br>
      END <br>
  </p>
  `,

  pseudoSolution:'to be added',
  close:'close'
},{
  questionNum: '10',
  pseudoStatement: `
    <p class="inner-text">
    Draw a trace table for the following pseudocode, using this input value: OFF  <br>
    Please note that there are no syntax or runtime errors in the code. <br> <br>
    BEGIN  <br>
    &nbsp; &nbsp;  DECLARE VOLTS AS INTEGER <br>
    &nbsp; &nbsp;  DECLARE MSG AS STRING  <br>
    &nbsp; &nbsp;  DECLARE LIGHT AS STRING <br>
    &nbsp; &nbsp;  ACCEPT LIGHT  <br>
    &nbsp; &nbsp;  IF LIGHT < > “OFF” THEN  <br>
    &nbsp; &nbsp;  &nbsp; &nbsp;  VOLTS = 0  <br>
    &nbsp; &nbsp;  &nbsp; &nbsp;  MSG = “DARK” <br>
    &nbsp; &nbsp;  ELSE<br>
    &nbsp; &nbsp;  &nbsp; &nbsp;   VOLTS = 10 ^ 2 - 1  <br>
    &nbsp; &nbsp;  &nbsp; &nbsp;  MSG = “BRIGHT” <br>
    &nbsp; &nbsp;  END IF <br>
    &nbsp; &nbsp;  IF VOLTS > 50 THEN  <br>
    &nbsp; &nbsp;  &nbsp; &nbsp;  LIGHT = “ON” <br>
    &nbsp; &nbsp;  END IF  <br>
    &nbsp; &nbsp;  IF NOT LIGHT = “OFF” THEN <br>
    &nbsp; &nbsp;  &nbsp; &nbsp;   MSG = “LIGHT” <br>
    &nbsp; &nbsp;  ELSE  <br>
    &nbsp; &nbsp;  &nbsp; &nbsp;  VOLTS = VOLTS + 50  <br>
    &nbsp; &nbsp;  END IF <br>
    &nbsp; &nbsp;  DISPLAY MSG, LIGHT  <br>
    END  <br>
    </p>
  `,

  pseudoSolution:'to be added',
  close:'close'
},{
  questionNum: '11',
  pseudoStatement: `
    <p class="inner-text">
      Draw a trace table for the following pseudocode, using this input value: RED <br>
      Please note that there are no syntax or runtime errors in the code. <br> <br>

      BEGIN  <br>
      &nbsp; &nbsp;  DECLARE LITRES AS INTEGER <br>
      &nbsp; &nbsp;  DECLARE PRICE, TOTAL AS REAL  <br>
      &nbsp; &nbsp;  DECLARE COLOUR AS STRING  <br>
      &nbsp; &nbsp;  DISPLAY “PLEASE INPUT COLOUR” <br>
      &nbsp; &nbsp;  ACCEPT COLOUR  <br>
      &nbsp; &nbsp;  LITRES = 10  <br>
      &nbsp; &nbsp;  IF COLOUR = “BLUE” AND COLOUR = “RED” THEN  <br>
      &nbsp; &nbsp; &nbsp; &nbsp;   PRICE = 99  <br>
      &nbsp; &nbsp;  END IF <br>
      &nbsp; &nbsp;  DISPLAY “PRICE ” PRICE <br> 
      &nbsp; &nbsp;  IF PRICE > 0 THEN <br>
      &nbsp; &nbsp; &nbsp; &nbsp;   TOTAL = PRICE * 50 + LITRES <br> 
      &nbsp; &nbsp;  ELSE <br> 
      &nbsp; &nbsp;  &nbsp; &nbsp;  TOTAL = PRICE * LITRES + 50 <br> 
      &nbsp; &nbsp;  END IF  <br>
      &nbsp; &nbsp;  DISPLAY “PLEASE PAY TOTAL” <br>
      End  <br>
      </p>
  `,

  pseudoSolution:'to be added',
  close:'close'
},{
  questionNum: '12',
  pseudoStatement: `
    <p class="inner-text">
        Draw a trace table for the following pseudocode, using this input value: BLUE <br>
        Please note that there are no syntax or runtime errors in the following pseudocode. <br> <br>

        BEGIN <br>
        &nbsp; &nbsp;    DECLARE METERS AS INTEGER <br>
        &nbsp; &nbsp;    DECLARE PRICE, TOTAL AS REAL <br>
        &nbsp; &nbsp;   DECLARE COLOUR AS STRING <br>
        &nbsp; &nbsp;    DISPLAY “PLEASE INPUT COLOUR” <br>
        &nbsp; &nbsp;   ACCEPT COLOUR <br>
        &nbsp; &nbsp;    METERS = 10  <br>
        &nbsp; &nbsp;   IF NOT COLOUR <> “RED” OR COLOUR = “BLUE” <br>
        &nbsp; &nbsp;   &nbsp; &nbsp;   THEN PRICE = 500  <br>
        &nbsp; &nbsp;   ELSE  <br>
        &nbsp; &nbsp;   &nbsp; &nbsp;   PRICE = 200  <br>
        &nbsp; &nbsp;   END IF <br>
        &nbsp; &nbsp;   DISPLAY “PRICE” PRICE  <br>
        &nbsp; &nbsp;   IF PRICE < 500 THEN  <br>
        &nbsp; &nbsp;   &nbsp; &nbsp;   TOTAL = (PRICE * METERS) + 100  <br>
        &nbsp; &nbsp;   ELSE  <br>
        &nbsp; &nbsp;   TOTAL = (PRICE * METERS) + 200  <br>
        &nbsp; &nbsp;   END IF <br>
        &nbsp; &nbsp;    DISPLAY “PLEASE PAY” TOTAL END <br>
        </p> 
`,

  pseudoSolution:'to be added',
  close:'close'
},{
  questionNum: '13',
  pseudoStatement: `
    <p class="inner-text">
      Draw a trace table for the following pseudocode Input values are as follows  <br>
      GAME:FIFA  <br>
      VENUE:SOUTH AFRICA <br>  <br>

      BEGIN  <br>
      &nbsp; &nbsp;   DECLARE GAME, WINNER, VENUE, POSITION AS STRING <br>
      &nbsp; &nbsp;   ACCEPT GAME  <br>
      &nbsp; &nbsp;   ACCEPT VENUE  <br>
      &nbsp; &nbsp;   IF GAME = “fifa” THEN  <br>
      &nbsp; &nbsp;   &nbsp; &nbsp;   WINNER = “SPAIN” <br>
      &nbsp; &nbsp;   ELSE  <br>
      &nbsp; &nbsp;   &nbsp; &nbsp;   WINNER = “NETHERLAND” <br>
      &nbsp; &nbsp;   END IF  <br>
      &nbsp; &nbsp;   IF WINNER = “NETHERLAND” THEN  <br>
      &nbsp; &nbsp;   &nbsp; &nbsp;   POSITION = ”FIRST RUNNERS UP” <br>
      &nbsp; &nbsp;   END IF  <br>
      &nbsp; &nbsp;   DISPLAY “WINNER OF THE GAME: “ WINNER <br>
      &nbsp; &nbsp;   DISPLAY “VENUE OF THE GAME: “ VENUE  <br>
      END <br>
      </p>
`,

  pseudoSolution:'to be added',
  close:'close'
},{
  questionNum: '14',
  pseudoStatement: `
    <p class="inner-text">
      DRAW A TRACE TABLE FOR THE FOLLOWING PSEODOCODE INPUT VALUE : WSU <br> <br>
      BEGIN <br> 
      &nbsp; &nbsp;   DECLARE UNIVERSITY, LOCATION AS STRING <br> 
      &nbsp; &nbsp;   ACCEPT UNIVERSITY <br>
      &nbsp; &nbsp;    IF UNIVERSITY = “wsu”  THEN  <br>
      &nbsp; &nbsp;   &nbsp; &nbsp;   LOCATION = “IBIKA” <br>
      &nbsp; &nbsp;   END IF <br> 
      &nbsp; &nbsp;   IF UNIVERSITY = “WSU” THEN  <br>
      &nbsp; &nbsp;   &nbsp; &nbsp;   LOCATION = “CHISELHURST” <br>
      &nbsp; &nbsp;   END IF  <br>
      &nbsp; &nbsp;   DISPLAY “LOCATION OF THE CAMPUS: “, LOCATION  <br>
      END <br>
      </p>
`,

  pseudoSolution:'to be added',
  close:'close'
},{
  questionNum: '15',
  pseudoStatement: `
    <p class="inner-text">
      Draw a trace table for the following pseudocode, Input value COLOR: RED  <br> <br>
      BEGIN <br> 
      &nbsp; &nbsp;   DECLARE SCORE AS INTEGER  <br>
      &nbsp; &nbsp;   DECLARE MSG AS STRING <br>
      &nbsp; &nbsp;   DECLARE COLOUR AS STRING  <br>
      &nbsp; &nbsp;   ACCEPT COLOUR  <br>
      &nbsp; &nbsp;   IF COLOUR = “red” THEN  <br>
      &nbsp; &nbsp;   &nbsp; &nbsp;   SCORE = 3  <br>
      &nbsp; &nbsp;   &nbsp; &nbsp;   MSG = “YES” <br>
      &nbsp; &nbsp;   ELSE <br>
      &nbsp; &nbsp; &nbsp; &nbsp;      SCORE = SCORE * 2 <br> 
      &nbsp; &nbsp; &nbsp; &nbsp;     MSG = “NO” <br>
      &nbsp; &nbsp;    END IF <br>
      &nbsp; &nbsp;   IF SCORE > 0 THEN  <br>
      &nbsp; &nbsp;   &nbsp; &nbsp;   COLOUR = “blue” <br>
      &nbsp; &nbsp;   &nbsp; &nbsp;    END IF <br>
      &nbsp; &nbsp;    IF NOT COLOUR = “blue” THEN  <br>
      &nbsp; &nbsp;   &nbsp; &nbsp;   MSG = “MAYBE” <br>
      &nbsp; &nbsp;   ELSE <br>
      &nbsp; &nbsp;   &nbsp; &nbsp;    SCORE = SCORE + 3  <br>
      &nbsp; &nbsp;   END IF <br>
      &nbsp; &nbsp;   DISPLAY MSG, “ THE ANSWER IS ”, SCORE <br> 
      END  <br>
      </p>
  `,

  pseudoSolution:'to be added',
  close:'close'
},{
  questionNum: '16',
  pseudoStatement: `
    <p class="inner-text">
      Draw a trace table for the following pseudocode using 10, 20 and 30 as the input <br> <br> 
      DECLARE A, P, Q, T, R AS INTEGER  <br>
      DECLARE S AS STRING <br> 
      ACCEPT A, P, Q <br> 
      IF A = 10 THEN  <br>
      IF P = Q THEN  <br>
      T = 5 <br>
      R = 7  <br>
      A = A + 1 <br>
      ELSE  <br>
      IF P < Q * 2 THEN <br>
      T = Q - P + P MOD 3  <br>
      R = P MOD 5 + Q / A  <br>
      S = “A” <br>
      END IF <br>
      END IF <br>
      END IF <br>
      DISPLAY S , A <br> 
      DISPLAY P <br>
      DISPLAY Q  <br>
      DISPLAY “R, R” <br>
      DISPLAY T  <br>
      END <br>
      </p>
  `,

  pseudoSolution:'to be added',
  close:'close'
  }];