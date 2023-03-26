package request

type Client interface {
	Options(options Options)
	Headers()
	Content()
	Execute() string
}

type Options struct {
	Method string `json:"method"`
	Url    string `json:"url"`
}
