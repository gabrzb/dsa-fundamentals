package solution

import (
	"slices"
	"testing"
)

func shortestCoinPath(coins []int, amount int) int {
	type state struct{ total, count int }
	queue := []state{{0, 0}}
	seen := map[int]bool{0: true}
	for head := 0; head < len(queue); head++ {
		current := queue[head]
		if current.total == amount {
			return current.count
		}
		for _, coin := range coins {
			next := current.total + coin
			if next <= amount && !seen[next] {
				seen[next] = true
				queue = append(queue, state{next, current.count + 1})
			}
		}
	}
	return -1
}

func TestAgainstBreadthFirstEnumeration(t *testing.T) {
	for mask := range 32 {
		coins := []int{}
		for coin := 1; coin <= 5; coin++ {
			if mask&(1<<(coin-1)) != 0 {
				coins = append(coins, coin)
			}
		}
		original := slices.Clone(coins)
		for amount := 0; amount < 20; amount++ {
			want := shortestCoinPath(coins, amount)
			for _, solve := range []func([]int, int) int{Memoized, Tabulated} {
				if got := solve(coins, amount); got != want {
					t.Fatalf("%v amount %d: got %d want %d", coins, amount, got, want)
				}
				if !slices.Equal(coins, original) {
					t.Fatal("input mutated")
				}
			}
		}
	}
}

func TestReuseAndIsolation(t *testing.T) {
	for _, solve := range []func([]int, int) int{Memoized, Tabulated} {
		for _, tc := range []struct {
			coins        []int
			amount, want int
		}{{[]int{1, 3, 4}, 6, 2}, {[]int{2, 2}, 4, 2}, {[]int{2}, 3, -1}, {[]int{1}, 3, 3}, {nil, 0, 0}} {
			if got := solve(tc.coins, tc.amount); got != tc.want {
				t.Fatalf("got %d want %d", got, tc.want)
			}
		}
	}
}

func TestInvalidInputs(t *testing.T) {
	for _, solve := range []func([]int, int) int{Memoized, Tabulated} {
		for _, tc := range []struct {
			coins  []int
			amount int
		}{{[]int{0}, 0}, {[]int{-1}, 3}, {[]int{1}, -1}, {nil, int(^uint(0) >> 1)}} {
			func() {
				defer func() {
					if recover() == nil {
						t.Fatal("expected panic")
					}
				}()
				solve(tc.coins, tc.amount)
			}()
		}
	}
}
