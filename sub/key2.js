window.active_input66 = "one";
let lastClickTime = 0;
window.inn = async function (e) {
    let mm66;
    if (window.active_input66 == "one") {
        mm66 = window.mathField6;
    } else if (window.active_input66 == "two") {
        mm66 = mathField6;
    }






    mm66.focus();
    



    const now = Date.now();
    if (now - lastClickTime < 300) {
      // Too fast, ignore this click
      console.log("Click ignored");
      return;
    }
    lastClickTime = now;


    console.log(e);
    if (e == "a^2") {

        mm66.write(`^2`);
    } else if (e == "a^b") {
        mm66.write(`^{}`);
        mm66.keystroke('Left');
    } else if (e == "a_x") {
        mm66.write(`_{}`);
        mm66.keystroke('Left');
    } else if (e == "sqrt{x}") {
        mm66.write(`\\sqrt{{}}`);
    } else if (e == "frac{d}{dx}") {
        mm66.write(`\\frac{d}{dx}`);
    } else if (e == "lim_{x\\to a}") {
        mm66.write(`\\lim_{x\\to a}`);
    } else if (e == "frac{a}{b}") {
        mm66.write(`\\frac{}{}`);
    } else if (e == "sin") {
        mm66.write(`sin`);
    } else if (e == "cos") {
        mm66.write(`cos`);
    } else if (e == "tan") {
        mm66.write(`tan`);
    } else if (e == "sin1") {
        mm66.write(`sin^{-1}`);
    } else if (e == "cos1") {
        mm66.write(`cos^{-1}`);
    } else if (e == "tan1") {
        mm66.write(`tan^{-1}`);
    } else if (e == "alpha") {
        mm66.write(`\\alpha`);
    } else if (e == "beta") {
        mm66.write(`\\beta`);
    } else if (e == "gamma") {
        mm66.write(`\\gamma`);
    } else if (e == "delta") {
        mm66.write(`\\delta`);
    } else if (e == "theta") {
        mm66.write(`\\theta`);
    } else if (e == "sigma") {
        mm66.write(`\\sigma`);
    } else if (e == "omega") {
        mm66.write(`\\omega`);
    }  else if (e == "Omega") {
        mm66.write(`\\Omega`);
    }  else if (e == "°") {
        inputt(`°`);
    }    else if (e == "propto") {
        mm66.write(`\\propto`);
    }    else if (e == "eta") {
        mm66.write(`\\eta`);
    }
    else if (e == "infty") {
        mm66.write(`\\infty`);
    } else if (e == "approx") {
        mm66.write(`\\approx`);
    } else if (e == "ne") {
        mm66.write(`\\ne`);
    } else if (e == "phi") {
        mm66.write(`\\phi`);
    } else if (e == "perp") {
        mm66.write(`\\perp`);
    } else if (e == "sqrt[n]{x}") {
        mm66.write(`\\sqrt[{}]{{}}`);
    } else if (e == "int_a^b") {
        mm66.write(`\\int_{}^{}`);
    } else if (e == "pi") {
        mm66.write(`\\pi`);
    } else if (e == "λ") {
        mm66.write(`λ`);
    }else if (e == "î") {
        inputt(`î`);
    }else if (e == "ĵ") {
        inputt(`ĵ`);
    }else if (e == "k̂") {
        inputt(`k̂`);
    }else if (e == "–") {
        inputt(`–`);
    }else if (e == "≡") {
        inputt(`≡`);
    }
    else if (e == "⇌") {
        mm66.write(`⇌`);
    }
    else if (e == "→") {

        mm66.write(`\\rightarrow`);
    }
    
    else if (e == "vec{A}") {
        mm66.write(`\\vec{A}`);
    }else if (e == "mathbf{A}") {
        mm66.write(`\\mathbf{A}`);
    }else if (e == "mathbf{vec{B}}") {
        mm66.write(`\\mathbf{\\vec{B}}`);
    }else if (e == "times") {
        mm66.write(`\\times`);
    }else if (e == "mathrm{/}") {
        mm66.write(`\\mathrm{/}`);
    }else if (e == "fff") {
        mm66.write(`fff`);
    }else if (e == "fff") {
        mm66.write(`fff`);
    }else if (e == "fff") {
        mm66.write(`fff`);
    }else if (e == "fff") {
        mm66.write(`fff`);
    }else if (e == "fff") {
        mm66.write(`fff`);
    }else if (e == "fff") {
        mm66.write(`fff`);
    }
    



    mm66.focus();

}


