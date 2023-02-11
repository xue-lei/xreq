package proxy

import (
	"context"
)

type Proxy struct {
	ctx context.Context
}

func NewProxy() *Proxy {
	return &Proxy{}
}

func (p *Proxy) Exec() string {
	return "123131"
}
