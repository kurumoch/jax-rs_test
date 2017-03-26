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

    public static User getUser(String username) {
        Session session = getSessionFactory().getCurrentSession();
        session.beginTransaction();
        User user = (User) session.createQuery("select u from User u where u.username = :username")
                .setParameter("username", username).list().toArray()[0];
        session.getTransaction().commit();
        session.close();
        return user;
    }

}
