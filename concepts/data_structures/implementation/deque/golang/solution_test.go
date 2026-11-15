package deque

import "testing"

func TestModel(t *testing.T) {
	actual := New(1)
	model := []int{}
	for v := range 40 {
		actual.PushFront(v)
		model = append([]int{v}, model...)
	}
	state := uint32(12345)
	for range 2000 {
		state = 1664525*state + 1013904223
		op := (state >> 8) % 4
		switch op {
		case 0:
			actual.PushFront(int(state))
			model = append([]int{int(state)}, model...)
		case 1:
			actual.PushBack(int(state))
			model = append(model, int(state))
		case 2:
			if len(model) > 0 {
				v, ok := actual.PopFront()
				if !ok || v != model[0] {
					t.Fatal("wrong front")
				}
				model = model[1:]
			}
		case 3:
			if len(model) > 0 {
				v, ok := actual.PopBack()
				if !ok || v != model[len(model)-1] {
					t.Fatal("wrong back")
				}
				model = model[:len(model)-1]
			}
		}
		if actual.Len() != len(model) {
			t.Fatal("wrong length")
		}
		if len(model) > 0 {
			front, _ := actual.Front()
			back, _ := actual.Back()
			if front != model[0] || back != model[len(model)-1] {
				t.Fatal("wrong endpoints")
			}
		}
	}
	for len(model) > 0 {
		v, _ := actual.PopFront()
		if v != model[0] {
			t.Fatal("drain failed")
		}
		model = model[1:]
	}
	for _, op := range []func() (int, bool){actual.PopFront, actual.PopBack, actual.Front, actual.Back} {
		if _, ok := op(); ok {
			t.Fatal("expected empty")
		}
	}
	actual.PushBack(0)
	if v, ok := actual.PopBack(); !ok || v != 0 {
		t.Fatal("reuse failed")
	}
	defer func() {
		if recover() == nil {
			t.Fatal("expected panic")
		}
	}()
	New(0)
}
