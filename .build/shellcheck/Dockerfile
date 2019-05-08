FROM koalaman/shellcheck-alpine:latest
RUN \
  echo "http://dl-cdn.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories && \
  apk update && \
  apk add ripgrep
COPY .build/shellcheck/script.sh .
RUN chmod +x ./script.sh
WORKDIR /workdir
ENTRYPOINT [ "/script.sh" ]
