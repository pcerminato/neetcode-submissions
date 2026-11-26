func dailyTemperatures(temperatures []int) []int {
	result := make([]int, len(temperatures))
	stack := []int{}

	for i, curr := range temperatures {
		for len(stack) > 0 && curr > temperatures[stack[len(stack)-1]] {
			top := len(stack) - 1
			pop := stack[top]
			result[pop] = i - pop
			stack = stack[:top]
		}
		stack = append(stack, i)
	}
	return result
}
