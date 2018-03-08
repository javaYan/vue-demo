package vue.basic.servlet;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by Mr_yyy on 2018/3/8.
 */

@WebServlet("/basic")
public class BasicServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        this.doPost(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        String type = request.getParameter("type");
        if (type != null && type.trim().length() > 0) {
            System.out.println("type = " + type);
            response.sendRedirect("/"+type+".html");
        } else {
            response.sendRedirect("/index.html");
        }
    }

    @Override
    public void init(ServletConfig config) {}
}
