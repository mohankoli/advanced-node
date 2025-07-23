class FibonacciSeries {
    calculateFibonacciValue(n) {
        if (n === 0) return 0;
        if (n === 1) return 1;
        return this.calculateFibonacciValue(n - 1) + this.calculateFibonacciValue(n - 2);
    }
}

module.exports = new FibonacciSeries();
