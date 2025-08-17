package main

import (
	"context"
	"net/http"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	ginadapter "github.com/awslabs/aws-lambda-go-api-proxy/gin"
	"github.com/gin-gonic/gin"
)

var ginLambda *ginadapter.GinLambdaV2

type User struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

func main() {
	lambda.Start(Handler)
}

func init() {
	r := gin.Default()

	// create short code
	r.POST("/newUser", ReceiveUser)

	// access url
	r.GET("/getUser", FindUser)

	// Use the v2 adapter for HTTP API v2
	ginLambda = ginadapter.NewV2(r)
}

func ReceiveUser(c *gin.Context) {
	var user User

	// c.Bind automatically chooses the right binder based on Content-Type
	if err := c.Bind(&user); err != nil {
		c.JSON(http.StatusBadRequest, "Invalid request")
		return
	}

	// You can log, store, or process the user here

	c.JSON(http.StatusOK, nil) // 200 with no body
}

func FindUser(c *gin.Context) {

	id := c.Query("id")
	if id == "" {
		c.JSON(http.StatusBadRequest, "Missing 'id' query parameter")
		return
	}

	// Dummy example — normally you'd fetch this from a DB
	user := User{
		ID:    id,
		Name:  "John Doe",
		Email: "johndoe@example.com",
	}

	c.JSON(http.StatusOK, user)
}

// Handler for HTTP API v2
func Handler(ctx context.Context, req events.APIGatewayV2HTTPRequest) (events.APIGatewayV2HTTPResponse, error) {
	return ginLambda.ProxyWithContext(ctx, req)
}
