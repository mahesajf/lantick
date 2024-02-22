FROM golang:latest

RUN mkdir /app
COPY . /app
WORKDIR /app

RUN go get .
RUN go build
RUN go mod download

EXPOSE 5000
CMD ["go", "run", "main.go"]
