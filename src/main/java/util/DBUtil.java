package util;

import models.Notebook;
import models.User;
import org.hibernate.Session;

import java.util.Set;

import static util.HibernateUtil.getSessionFactory;

/**
 * Created by denis on 12.03.17.
 */
public class DBUtil {

    public static User getUser(String username, String password) {
        Session session = getSessionFactory().getCurrentSession();
        session.beginTransaction();
        User user = (User) session.createQuery("select u from User u where u.username = :username and u.password = :password")
                .setParameter("username", username).setParameter("password", password).list().toArray()[0];
        session.getTransaction().commit();
        session.close();
        return user;
    }

}
