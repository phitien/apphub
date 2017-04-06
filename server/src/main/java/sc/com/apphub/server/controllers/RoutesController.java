package sc.com.apphub.server.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by phitien on 6/4/17.
 */
@Controller
public class RoutesController {

    @RequestMapping("dmr/**")
    public String dmr() {
        return "dmr";
    }

}
