package models;

import com.fasterxml.jackson.annotation.*;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Set;

/**
 * Created by denis on 16.02.17.
 */
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "notebook", "set"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Note implements GetIDable{
    private int noteId;
    private String noteName;
    private String noteText;
    private Timestamp lastEdited;
    private Timestamp created;
    @JsonManagedReference
    private Notebook notebook;
    @JsonBackReference
    private Set<Attachment> attachmentSet;

    public Note() {

    }

    @Id
    @Column(name = "NOTE_ID", nullable = false)
    public int getId() {
        return noteId;
    }

    public void setId(int noteId) {
        this.noteId = noteId;
    }

    @Basic
    @Column(name = "NOTE_NAME", nullable = true, length = 20)
    public String getNoteName() {
        return noteName;
    }

    public void setNoteName(String noteName) {
        this.noteName = noteName;
    }

    @Basic
    @Column(name = "NOTE_TEXT", nullable = true, length = 1000)
    public String getNoteText() {
        return noteText;
    }

    public void setNoteText(String noteText) {
        this.noteText = noteText;
    }

    @Basic
    @Column(name = "LAST_EDITED", nullable = true)
    public Timestamp getLastEdited() {
        return lastEdited;
    }

    public void setLastEdited(Timestamp lastEdited) {
        this.lastEdited = lastEdited;
    }

    @Basic
    @Column(name = "CREATED", nullable = true)
    public Timestamp getCreated() {
        return created;
    }

    public void setCreated(Timestamp created) {
        this.created = created;
    }

    @ManyToOne
    @JoinColumn(name = "NOTEBOOK_ID")
    public Notebook getNotebook() {
        return notebook;
    }

    public void setNotebook(Notebook notebook) {
        this.notebook = notebook;
    }


    @OneToMany(mappedBy = "note")
    @NotFound(action = NotFoundAction.IGNORE)
    public Set<Attachment> getSet() {
        return attachmentSet;
    }

    public void setSet(Set<Attachment> attachmentSet) {
        this.attachmentSet = attachmentSet;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Note note = (Note) o;

        if (noteId != note.noteId) return false;
        if (noteName != null ? !noteName.equals(note.noteName) : note.noteName != null) return false;
        if (noteText != null ? !noteText.equals(note.noteText) : note.noteText != null) return false;
        if (lastEdited != null ? !lastEdited.equals(note.lastEdited) : note.lastEdited != null) return false;
        if (created != null ? !created.equals(note.created) : note.created != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = noteId;
        result = 31 * result + (noteName != null ? noteName.hashCode() : 0);
        result = 31 * result + (noteText != null ? noteText.hashCode() : 0);
        result = 31 * result + (lastEdited != null ? lastEdited.hashCode() : 0);
        result = 31 * result + (created != null ? created.hashCode() : 0);
        return result;
    }
}
