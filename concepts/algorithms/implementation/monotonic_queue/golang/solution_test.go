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
		Want   []int
	}
	if err := json.Unmarshal([]byte(`[{"Values":[1,3,-1,-3,5,3,6,7],"Param":3,"Want":[3,3,5,5,6,7]},{"Values":[3,2,1],"Param":2,"Want":[3,2]},{"Values":[1,1,1],"Param":2,"Want":[1,1]},{"Values":[-2,-1],"Param":1,"Want":[-2,-1]},{"Values":[4,1,9],"Param":3,"Want":[9]}]`), &cases); err != nil {
		t.Fatal(err)
	}
	for _, tc := range cases {
		original := slices.Clone(tc.Values)
		got := WindowMaxima(tc.Values, tc.Param)
		if !slices.Equal(got, tc.Want) {
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
		WindowMaxima(nil, 1)
	}()
}
