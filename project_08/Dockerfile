FROM golang:1.18.9-alpine3.17 AS builder

RUN apk add --no-cache --update git

WORKDIR /go/src

COPY . .

RUN cd app && \
    go mod init fullcycle && \
    CGO_ENABLED=0 GOARCH=amd64 GOOS=linux go build -ldflags "-s -w -extldflags '-static'" -o . && \
    apk add upx && \
    upx fullcycle

FROM scratch

COPY --from=builder /go/src .

CMD [ "app/fullcycle" ]