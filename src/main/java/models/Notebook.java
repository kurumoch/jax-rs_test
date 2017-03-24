package models;

import com.fasterxml.jackson.annotation.*;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by denis on 16.02.17.
 */
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "user", "noteSet", "set"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Notebook implements GetIDable{
    private int notebookId;
    private String notebookName;
    @JsonBackReference
    private User user;
    @JsonManagedReference
    private Set<Note> noteSet;

    public Notebook() {

    }

    @Id
    @Column(name = "NOTEBOOK_ID", nullable = false)
    public int getId() {
        return notebookId;
    }

    public void setId(int notebookId) {
        this.notebookId = notebookId;
    }

    @Basic
    @Column(name = "NOTEBOOK_NAME", nullable = true, length = 20)
    public String getNotebookName() {
        return notebookName;
    }

    public void setNotebookName(String notebookName) {
        this.notebookName = notebookName;
    }


    @OneToMany(mappedBy = "notebook")
    @NotFound(action = NotFoundAction.IGNORE)
    public Set<Note> getSet() {
        return noteSet;
    }

    public void setSet(Set<Note> noteSet) {
        this.noteSet = noteSet;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Notebook notebook = (Notebook) o;

        if (notebookId != notebook.notebookId) return false;
        if (notebookName != null ? !notebookName.equals(notebook.notebookName) : notebook.notebookName != null)
            return false;

        return true;
    }

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


    @Override
    public int hashCode() {
        int result = notebookId;
        result = 31 * result + (notebookName != null ? notebookName.hashCode() : 0);
        return result;
    }
}
