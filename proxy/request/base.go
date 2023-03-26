package request

import (
	"fmt"
	"io"
	"net/http"
)

type Base struct {
	client *http.Client
	req    *http.Request
}

func (r *Base) Options(options Options) {
	// init client if nil
	if r.client == nil {
		r.client = &http.Client{}
	}
	fmt.Printf("request params [%v] \n", options)
	req, err := http.NewRequest(options.Method, options.Url, nil)
	if err != nil {
		fmt.Println(err)
	}
	r.req = req
}

func (r *Base) Headers() {

}

func (r *Base) Content() {

}

func (r *Base) Execute() string {
	res, err := r.client.Do(r.req)
	if err != nil {
		fmt.Println(err)
		return err.Error()
	}
	defer res.Body.Close()

	b, err := io.ReadAll(res.Body)
	if err != nil {
		fmt.Println(err)
		return err.Error()
	}
	rs := string(b)
	fmt.Println(rs)
	return rs
}
