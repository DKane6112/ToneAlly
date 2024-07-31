package com.ToneAlly.app;


import org.springframework.boot.autoconfigure.cassandra.CassandraProperties;
import org.springframework.boot.web.server.Compression;
import org.springframework.boot.web.server.ErrorPage;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.boot.web.servlet.server.Session;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

@Configuration
public class ServerConfiguration implements WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> {

    @Override
    public void customize(ConfigurableServletWebServerFactory factory) {
        // Enable compression for text-based responses
        Compression compression = new Compression();
        compression.setEnabled(true);
        compression.setMimeTypes(new String[]{"text/html", "text/css", "text/javascript", "application/json"});
        factory.setCompression(compression);

        // Set the error pages for different status codes
        factory.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND, "/error/404.html"));
        factory.addErrorPages(new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/error/500.html"));
    }
}
