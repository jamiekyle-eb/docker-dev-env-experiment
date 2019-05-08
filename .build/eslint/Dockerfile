FROM node:12.1.0-stretch
COPY .build/eslint/package.json .
COPY .build/eslint/package-lock.json .
RUN npm ci
COPY .build/eslint/config.ts .
RUN /node_modules/.bin/tsc config.ts --outFile config.js
COPY .build/eslint/.eslintignore .
WORKDIR /workdir
ENTRYPOINT [ "/node_modules/.bin/eslint", "--config=/config.js", "--ignore-path=/.eslintignore" ]
CMD ["."]
