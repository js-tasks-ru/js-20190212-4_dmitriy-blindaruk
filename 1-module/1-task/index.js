/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
    if(n===0) {
        return 1;
    }
    else if (n % 2 ===0) {
        return pow(m,parseInt(n/2))*pow(m,parseInt(n/2));
    } else {
        return m*pow(m,parseInt(n/2))*pow(m,parseInt(n/2));
    }
}

pow(3, 2) === 9;
pow(3, 3) === 27;