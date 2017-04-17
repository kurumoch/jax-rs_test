package services;

import models.User;
import org.mindrot.jbcrypt.BCrypt;
import util.DBHelper;
import util.DBUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import java.io.IOException;

/**
 * Created by denis on 11.03.17.
 */
@Path("/")
public class LoginService {


    /*
    * сервис логина
    * formparam получает из формы
    * FormParam("username") - из формы под названием username, например
    * путь к этому сервису /rest/login
    * вообще, ко всем путям дописывается /rest/
    * */
    @POST
    @Produces("application/json")
    @Path("/login")
    public Response login(@Context HttpServletRequest request, @Context HttpServletResponse response,
                          @FormParam("username") String username, @FormParam("password") String password) {
        User user;
        if ((user = DBUtil.getUser(username)) != null && BCrypt.checkpw(password, user.getPassword())) {
            HttpSession session = request.getSession();
            session.setAttribute("userId", user.getId());
            try {
                response.sendRedirect("/main_page.html");
            } catch (IOException e) {
            }
            return Response.status(Response.Status.OK).build();
        }
        return Response.status(Response.Status.UNAUTHORIZED).build();
    }

    /*
    * создание нового пользователя
    * /rest/create
    * */
    @POST
    @Produces("application/json")
    @Path("/create")
    public Response createUser(@FormParam("username") String username, @FormParam("password") String password) {
        DBHelper<User> dbHelper = new DBHelper<>(User.class);
        User user = new User();
        user.setUsername(username);
        user.setPassword(BCrypt.hashpw(password, BCrypt.gensalt()));
        dbHelper.write(user);
        return Response.status(Response.Status.CREATED).build();
    }

    /*
    выход
    * rest/logout
    * */
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
