package us.mn.dgtc.emu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Created by David Groomes on 12/28/2015.
 *
 * Forwards requests to front-end-managed routes to "index.html". E.g., when the client requests "/jokes", and since
 * "/jokes" is a route defined in the client (Angular 2) code, the server should just serve the home page--"index.html".
 * The client code (Angular 2) will handle the routing to the "/jokes" endpoint.
 */
@Component
public class IndexHtmlForwardingFilter implements Filter {

    private final Set<String> frontEndRoutesSet;

    @Autowired
    public IndexHtmlForwardingFilter(@Value("${front.end.routes}") String[] frontEndRoutes) {
        frontEndRoutesSet = Arrays.stream(frontEndRoutes)
                .map(route -> "/" + route)
                .collect(Collectors.toSet());
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse
            response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        if (frontEndRoutesSet.contains(req.getRequestURI())) {
            req.getRequestDispatcher("/index.html").forward(request, response);
        } else {
            chain.doFilter(request, response);
        }
    }

    @Override
    public void destroy() {

    }
}
