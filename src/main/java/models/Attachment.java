package models;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;

/**
 * Created by denis on 16.02.17.
 */

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "note"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Attachment implements GetIDable {
    private int attachmentId;
    private String filepath;
    @JsonBackReference
    private Note note;

    public Attachment() {
    }

    @Id
    @Column(name = "ATTACHMENT_ID", nullable = false)
    public int getId() {
        return attachmentId;
    }

    public void setId(int attachmentId) {
        this.attachmentId = attachmentId;
    }

    @Basic
    @Column(name = "FILEPATH", nullable = true, length = 20)
    public String getFilepath() {
        return filepath;
    }

    public void setFilepath(String filepath) {
        this.filepath = filepath;
    }

    @ManyToOne
    @JoinColumn(name = "NOTE_ID")
    public Note getNote() {
        return note;
    }

    public void setNote(Note note) {
        this.note = note;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Attachment that = (Attachment) o;

        if (attachmentId != that.attachmentId) return false;
        if (filepath != null ? !filepath.equals(that.filepath) : that.filepath != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = attachmentId;
        result = 31 * result + (filepath != null ? filepath.hashCode() : 0);
        return result;
    }
}
