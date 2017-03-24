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
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "notebookSet", "set"})
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class User implements GetIDable {
    private int userId;
    private String username;
    private String password;
    @JsonManagedReference
    private Set<Notebook> notebookSet;

    public User() {

    }

    @Id
    @Column(name = "USER_ID", nullable = false)
    public int getId() {
        return userId;
    }

    public void setId(int userId) {
        this.userId = userId;
    }

    @Basic
    @Column(name = "USERNAME", nullable = true, length = 20)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Basic
    @Column(name = "PASSWORD", nullable = true, length = 20)
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    @OneToMany(mappedBy = "user")
    @NotFound(action = NotFoundAction.IGNORE)
    public Set<Notebook> getSet() {
        return notebookSet;
    }

    public void setSet(Set<Notebook> notebookSet) {
        this.notebookSet = notebookSet;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        User user = (User) o;

        if (userId != user.userId) return false;
        if (username != null ? !username.equals(user.username) : user.username != null) return false;
        if (password != null ? !password.equals(user.password) : user.password != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + (username != null ? username.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        return result;
    }
}
