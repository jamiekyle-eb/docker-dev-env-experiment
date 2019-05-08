FROM node:12.1.0-alpine
COPY .build/prettier/package.json .
COPY .build/prettier/package-lock.json .
RUN npm ci
COPY .build/prettier/.prettierrc .
COPY .build/prettier/.prettierignore .
WORKDIR /workdir
ENTRYPOINT [ "/node_modules/.bin/prettier", "--config=/.prettierrc", "--ignore-path=/.prettierignore" ]
CMD [ "--write", "**" ]
