java -jar .\external-tools\swagger-codegen-cli.jar generate -i https://localhost:44349/swagger/docs/v1 -l typescript-angular -o .\src\swagger\ -D io.swagger.parser.util.RemoteUrl.trustAll=true
pause