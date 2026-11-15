package solution

import (
	"encoding/json"
	"slices"
	"testing"
)

func TestBehavior(t *testing.T) {
	var cases []struct {
		Values []int
		Param  int
		Want   int
	}
	if err := json.Unmarshal([]byte(`[{"Values":[],"Param":1,"Want":0},{"Values":[1,2,3,1,1],"Param":4,"Want":3},{"Values":[3,2,2,4,1,4],"Param":3,"Want":6},{"Values":[1,2,3],"Param":1,"Want":6},{"Values":[1,2,3],"Param":9,"Want":3}]`), &cases); err != nil {
		t.Fatal(err)
	}
	for _, tc := range cases {
		original := slices.Clone(tc.Values)
		got := MinimumCapacity(tc.Values, tc.Param)
		if got != tc.Want {
			t.Fatalf("got %v want %v", got, tc.Want)
		}
		if !slices.Equal(tc.Values, original) {
			t.Fatal("input mutated")
		}
	}
	func() {
		defer func() {
			if recover() == nil {
				t.Fatal("expected panic")
			}
		}()
		MinimumCapacity([]int{1}, 0)
	}()
}

func TestOverflow(t *testing.T) {
	maximum := int(^uint(0) >> 1)
	defer func() {
		if recover() == nil {
			t.Fatal("expected overflow panic")
		}
	}()
	MinimumCapacity([]int{maximum, 1}, 1)
}
