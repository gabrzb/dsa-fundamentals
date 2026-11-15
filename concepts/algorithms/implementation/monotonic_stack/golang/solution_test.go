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
	if err := json.Unmarshal([]byte(`[{"Values":[],"Want":[]},{"Values":[2,1,2,4,3],"Want":[3,2,3,-1,-1]},{"Values":[3,2,1],"Want":[-1,-1,-1]},{"Values":[1,1,1],"Want":[-1,-1,-1]},{"Values":[-2,-1,0],"Want":[1,2,-1]}]`), &cases); err != nil {
		t.Fatal(err)
	}
	for _, tc := range cases {
		original := slices.Clone(tc.Values)
		got := NextGreaterIndices(tc.Values)
		if !slices.Equal(got, tc.Want) {
			t.Fatalf("got %v want %v", got, tc.Want)
		}
		if !slices.Equal(tc.Values, original) {
			t.Fatal("input mutated")
		}
	}

}
