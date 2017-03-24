package util;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;

/**
 * Created by denis on 19.03.17.
 */
public class ServiceUtil {

    public static boolean isAccessible(HttpServletRequest request, int id) {
        int userId = (int) request.getSession().getAttribute("userId");
        if (userId != id)
            throw new WebApplicationException(Response.Status.FORBIDDEN);
        return true;
    }
}
