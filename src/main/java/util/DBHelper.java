package util;

import models.GetIDable;
import org.hibernate.ReplicationMode;
import org.hibernate.Session;
import org.hibernate.query.Query;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import java.util.List;

import static util.HibernateUtil.getSessionFactory;

/**
 * Created by denis on 16.02.17.
 */
public class DBHelper<T extends GetIDable> {

    private Class<T> type;

    public DBHelper(Class<T> type) {
        this.type = type;
    }

    public Class<T> getMyType() {
        return this.type;
    }

    public T read(int id) {
        Session session = getSessionFactory().getCurrentSession();
        session.beginTransaction();
        T obj = session.get(type, id);
        session.getTransaction().commit();
        session.close();
        if (obj == null) throw new WebApplicationException(Response.Status.NOT_FOUND);
        return obj;
//
    }

    public void write(T obj) {
        Session session = getSessionFactory().getCurrentSession();
        session.beginTransaction();
        session.replicate(obj, ReplicationMode.LATEST_VERSION);
        session.getTransaction().commit();
        session.close();
    }

    public void delete(int id) {
        Session session = getSessionFactory().getCurrentSession();
        session.beginTransaction();
        T obj = session.get(type, id);
        session.delete(obj);
        session.getTransaction().commit();
        session.close();
        if (obj == null) throw new WebApplicationException(Response.Status.NOT_FOUND);
    }

}
