package services;

import models.Attachment;
import models.Note;
import util.DBHelper;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Cookie;
import javax.ws.rs.core.Response;
import java.io.IOException;
import java.net.URI;
import java.sql.Timestamp;
import java.util.Collections;
import java.util.Set;

import static util.ServiceUtil.*;

/**
 * Created by denis on 16.02.17.
 */
@Path("/resources/note")
public class NoteService {
    private DBHelper<Note> dbHelper = new DBHelper<>(Note.class);


    @POST
    @Consumes("application/json")
    public Response createNote(Note note) throws IOException {
        dbHelper.write(note);
        return Response.created(URI.create("/note/" + note.getId())).build();
    }

    @GET
    @Produces("application/json")
    @Path("{id}")
    public Note getNote(@Context HttpServletRequest request, @PathParam("id") int id) throws IOException {
        Note note = dbHelper.read(id);
        if (isAccessible(request, note.getNotebook().getUser().getId()))
            return note;
        else return new Note();
    }

    @PUT
    @Consumes("application/json")
    @Path("{id}")
    public void updateNote(@Context HttpServletRequest request, @PathParam("id") int id, Note update) throws IOException {
        Note note = dbHelper.read(id);
        if (isAccessible(request, note.getNotebook().getUser().getId())) {
            note.setNoteName(update.getNoteName());
            note.setLastEdited(new Timestamp(System.nanoTime()));
            note.setNoteText(update.getNoteText());
            dbHelper.write(note);
        }
    }

    @DELETE
    @Produces("application/json")
    @Path("{id}")
    public void deleteNote(@Context HttpServletRequest request, @PathParam("id") int id) throws IOException {
        Note note = dbHelper.read(id);
        if (isAccessible(request, note.getNotebook().getUser().getId()))
            dbHelper.delete(id);
    }

    @GET
    @Produces("application/json")
    @Path("{id}/attachments")
    public Set<Attachment> getAttachments(@Context HttpServletRequest request, @PathParam("id") int id) throws IOException {
        Note note = dbHelper.read(id);
        if (isAccessible(request, note.getNotebook().getUser().getId()))
            return note.getSet();
        else return Collections.emptySet();
    }

}
