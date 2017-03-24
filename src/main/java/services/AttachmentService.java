package services;

import models.Attachment;
import util.DBHelper;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.net.URI;

import static util.ServiceUtil.*;

/**
 * Created by denis on 16.02.17.
 */
@Path("resources/attachment")
public class AttachmentService {
    private DBHelper<Attachment> dbHelper = new DBHelper<>(Attachment.class);

    @POST
    @Consumes("application/json")
    public Response createAttachment(Attachment attachment) {
        dbHelper.write(attachment);
        return Response.created(URI.create("/attachment/" + attachment.getId())).build();
    }

    @GET
    @Produces("application/json")
    @Path("{id}")
    public Attachment getAttachment(@PathParam("id") int id) {
        Attachment attachment = dbHelper.read(id);
        return attachment;
    }

    @PUT
    @Consumes("application/json")
    @Path("{id}")
    public void updateAttachment(@PathParam("id") int id, Attachment update) {
        Attachment attachment = dbHelper.read(id);
        attachment.setFilepath(update.getFilepath());
        dbHelper.write(attachment);
    }

    @DELETE
    @Produces("application/json")
    @Path("{id}")
    public void deleteAttachment(@PathParam("id") int id) {
        dbHelper.delete(id);
    }

}
