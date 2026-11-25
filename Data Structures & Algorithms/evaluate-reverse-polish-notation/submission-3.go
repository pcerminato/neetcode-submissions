func evalRPN(tokens []string) int {
	operMap := map[string]func(int, int) int {
		"+": func(a, b int) int { return a + b},
		"-": func(a, b int) int { return a - b},
		"*": func(a, b int) int { return a * b},
		"/": func(a, b int) int { return a / b},
	}
	stack := []int{}

	for _, t := range tokens {
		if op, ok := operMap[t]; ok {
			// pop two values
			i := len(stack) - 1
			a := stack[i]
			b := stack[i-1]
			stack = stack[:i-1]
			// calculate
			r := op(b,a)
			// push back to the stack
			stack = append(stack, r)
		} else {
			// convert to int push to the stack
			num, _ := strconv.Atoi(t)
			stack = append(stack, num)
		}
	}
	// pop the value and return
	return stack[0]
}
