package services;

import static util.ServiceUtil.*;
/**
 * Created by denis on 16.02.17.
 */

import models.Notebook;
import models.User;
import util.DBHelper;
import util.ServiceUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.math.BigInteger;
import java.net.URI;
import java.util.Collections;
import java.util.Set;

@Path("/resources/user")
public class UserService {
    private DBHelper<User> dbHelper = new DBHelper<>(User.class);

    /*это навряд ли надо*/

    @POST
    @Consumes("application/json")
    public Response createUser(User user) {
        dbHelper.write(user);
        return Response.status(Response.Status.CREATED).build();
    }

    @GET
    @Produces("application/json")
    @Path("{id}")
    public User getUser(@PathParam("id") int id) {
        return dbHelper.read(id);
    }

    @PUT
    @Consumes("application/json")
    @Path("{id}")
    public void updateUser(@PathParam("id") int id, User update) {
        User user = dbHelper.read(id);
        user.setUsername(update.getUsername());
        user.setPassword(update.getPassword());
        dbHelper.write(user);
    }

    @DELETE
    @Produces("application/json")
    @Path("{id}")
    public void deleteUser(@PathParam("id") int id) {
        dbHelper.delete(id);
    }


    /*получение блокнотов по id пользователя*/

    @GET
    @Produces("application/json")
    @Path("{id}/notebooks")
    public Set<Notebook> getNotebooks(@Context HttpServletRequest request, @PathParam("id") int id) throws IOException {
        if (isAccessible(request, id))
            return dbHelper.read(id).getSet();
        else return Collections.emptySet();
    }


}
