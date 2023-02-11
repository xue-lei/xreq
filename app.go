package main

import (
	"context"
	"fmt"
	"xuelei/xreq/proxy"
)

// App struct
type App struct {
	ctx   context.Context
	Proxy *proxy.Proxy
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{
		Proxy: proxy.NewProxy(),
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	println("xreq launch")
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) Greet1(name string) string {
	name += "1231"
	return fmt.Sprintf("Hello %s, It's 111 time!", name)
}
