package sc.com.apphub.server;

/**
 * Created by phitien on 6/4/17.
 */

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by phitien on 7/12/16.
 */
@SpringBootApplication
public class Application extends WebMvcConfigurerAdapter {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        if (!registry.hasMappingForPattern("/webjars/**")) {
            registry.addResourceHandler("/webjars/**").addResourceLocations(
                    "classpath:/META-INF/resources/webjars/");
        }
        if (!registry.hasMappingForPattern("/**")) {
            registry.addResourceHandler("/**").addResourceLocations(CLASSPATH_RESOURCE_LOCATIONS);
        }
        registry.addResourceHandler("/static/**")
                .addResourceLocations("file:////Users/phitien/apphub/public/static/")
                .setCachePeriod(0);
    }

    private static final String[]CLASSPATH_RESOURCE_LOCATIONS = {
            "classpath:/META-INF/resources/","classpath:/resources/",
            "classpath:/static/","classpath:/static/app/","classpath:/public/"
    };

//    @Override
//    public void addViewControllers(ViewControllerRegistry registry) {
//        registry.addViewController("/dmr/**").setViewName("dmr");
//    }

}
