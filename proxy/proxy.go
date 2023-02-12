package proxy

import (
	"context"
	"fmt"
)

var (
	a []string = make([]string, 10)
)

type Proxy struct {
	ctx context.Context
}

func NewProxy() *Proxy {
	return &Proxy{}
}

func (p *Proxy) Exec(url string) []string {
	a[0] = "1"
	a[2] = url
	fmt.Printf("%v\n", a)
	return a
}
