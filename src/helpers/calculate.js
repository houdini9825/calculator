const DECIMAL_PLACES = 5



class Calculate {
  static round(n) {
    return Number(n.toFixed(DECIMAL_PLACES))
  }

  static calc(operand, x, y) {
    switch (operand) {
      case '-':
        return Calculate.round(x - y)
      case '+':
        return Calculate.round(x + y)
      case '/':
        return Calculate.round(x / y)
      case 'x':
        return Calculate.round(x * y)
    }
  }

  static executeCalcs(data) {
    // Check if / or * in array for order of operations
    const result = []
    for (let i=0; i<data.length; i++) {
      if (typeof data[i] === 'string' && data[i].match(/x|\//)) {
        result.push(Calculate.calc(data[i], result.pop(), data[i+1]))
        i++
      } else {
        result.push(data[i])
      }
    }
    const finalResult = []
    for (let i=0; i<result.length; i++) {
      if (typeof result[i] === 'string') {
        if (i === 0 && result[i+1]) {
          result[i+1] = -(result[i+1])
          continue
        }
        finalResult.pop()
        finalResult.push(Calculate.calc(result[i], result[i-1], result[i+1]))
        i++
      } else {
        finalResult.push(result[i])
      }
    }
    return finalResult.length ? finalResult : 0;
  }
}

export default Calculate