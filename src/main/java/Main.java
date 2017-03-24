import models.User;
import org.hibernate.SessionFactory;
import services.UserService;
import util.DBHelper;
import util.DBUtil;
import util.HibernateUtil;

public class Main {

    public static void main(String[] args) {
        User user = DBUtil.getUser("USER1", "PASSWORD1");
        System.out.println("");
    }
}
