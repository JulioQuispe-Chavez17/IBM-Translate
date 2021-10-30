FROM openjdk:8-jdk-alpine

ARG JAR_FILE=target/translate.jar

COPY ${JAR_FILE} app.jar

EXPOSE 9095
# java -jar /usr/local/runme/app.jar
ENTRYPOINT ["java","-jar","app.jar"]
