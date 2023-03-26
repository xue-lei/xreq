package proxy

import (
	"xuelei/xreq/proxy/request"
)

type Proxy struct {
	request *request.Base
}

func NewProxy() *Proxy {
	return &Proxy{new(request.Base)}
}

func (proxy *Proxy) Action(options request.Options) string {
	proxy.request.Options(options)
	return proxy.request.Execute()
}
