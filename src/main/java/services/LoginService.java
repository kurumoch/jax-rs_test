package services;

import models.User;
import util.DBUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.ws.rs.*;
import javax.ws.rs.core.*;
import javax.servlet.http.Cookie;

/**
 * Created by denis on 11.03.17.
 */
@Path("/")
public class LoginService {
    @GET
    @Produces("application/json")

    public Response login(@Context HttpServletRequest request, @FormParam("username") String username, @FormParam("password") String password) {
        User user;
        if ((user = DBUtil.getUser(username, password)) != null) {
            HttpSession session = request.getSession();
            session.setAttribute("userId", user.getId());
            return Response.status(Response.Status.OK).build();
        }
        return Response.status(Response.Status.UNAUTHORIZED).build();
    }

   /* @GET
    @Path("/login")
    @Produces("application/json")
    public Response login(@Context HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.setAttribute("userId", 1);
        return Response.status(Response.Status.OK).build();
    }
*/
    @GET
    public Response hi() {
        return Response.ok("HI").build();
    }

    @GET
    @Path("/logout")
    @Produces("application/json")
    public Response logout(@Context HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.setAttribute("userId", null);
        session.invalidate();
        return Response.status(Response.Status.OK).build();
    }
}
